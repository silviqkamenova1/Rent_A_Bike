import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';

import { bikeServiceFactory } from './services/bikeService';
import { authServiceFactory } from './services/authServices';
import { AuthContext } from './contexts/AuthContext';
//import { useService } from './hooks/useService';

import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import AddBike from './components/AddBike/AddBike';
import Contacts from './components//Contacts/Contacts';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';
import Details from './components/Details/Details';
import { BikeOwner } from './components/common/BikeOwner';
import { RoutGuard } from './components/common/RouteGuard';


import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Catalog from './components/Catalog/Catalog';
import { Logout } from './components/Logout/Logout';
import Edit from './components/Edit/Edit';
import { useLocalStorage } from './hooks/useLocaleStorage';

export default function App() {
   const navigate = useNavigate();
   const [bikes, setBikes] = useState([]);
   const [auth, setAuth] = useLocalStorage('auth', {});


   const bikeService = bikeServiceFactory(auth.accessToken);
   const authService = authServiceFactory(auth.accessToken);

   useEffect(() => {
      bikeService.getAll()
         .then(result => {
            setBikes(result);
         });
   }, []);

   const onCerateBikeSubmit = async (data) => {
      const newBike = await bikeService.create(data);

      setBikes(state => [...state, newBike]);

      navigate('/catalog');
   };

   const onLoginSubmit = async (data) => {
      try {
         const result = await authService.login(data);
         setAuth(result);

         navigate('/');
      } catch (error) {
         console.log('There is a problem');
      }
   };

   const onRegisterSubmit = async (values) => {
      const { repass, ...registerData } = values;

      if (repass !== registerData.password) {
         return;
      };

      try {
         const result = await authService.register(registerData);
         setAuth(result);
         navigate('/');
      } catch (error) {

      }
   };

   const onLogout = async () => {
      await authService.logout();
      setAuth({});
   };

   const onBikeEditSubmit = async (values) => {
      const result = await bikeService.edit(values._id, values);

      setBikes(state => state.map(x => x._id === values._id ? result : x));

      navigate(`/catalog/${values._id}`);
   };
   const deleteBike = (bikeId) => {
      setBikes(state => state.filter(b => b._id !== bikeId))
   }

   const getBike = (bikeId) =>  {
      return bikes.find(bike => bike._id === bikeId)
   }

   const context = {
      onLoginSubmit,
      onRegisterSubmit,
      onLogout,
      deleteBike,
      getBike,
      userId: auth._id,
      token: auth.accessToken,
      userEmail: auth.email,
      isAuthenticated: !!auth.accessToken 
   };

   return (
      <AuthContext.Provider value={context}>
         <body>
            <div className="header_section header_bg">
               <Navigation />
               <Routes>
                  <Route path='/' element={<Home />} />
               </Routes>
            </div>
            <Routes>
               <Route path='/news' element={<News />} />
               <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
               <Route path='/register' element={<Register onRegisterSubmit={onRegisterSubmit}/>} />
               <Route path='/contacts' element={<Contacts />} />
               <Route path='/trolley' element={<Profile />} />
               <Route path='/catalog' element={<Catalog bikes={bikes} />} />
               <Route path='/catalog/:bikeId' element={<Details deleteBike={deleteBike}/>} />
               <Route path='/search' element={<Search bikes={bikes}/>} />
               <Route element={<RoutGuard />}>
                  <Route path='/create' element={<AddBike onCerateBikeSubmit={onCerateBikeSubmit} />} />
                  <Route path='/catalog/:bikeId/edit' element={
                  <BikeOwner>
                     <Edit onBikeEditSubmit={onBikeEditSubmit} getBike={getBike}/>       
                  </BikeOwner>
                     } />
                  <Route path='/logout' element={<Logout />} />
               </Route>
               {/* <Footer />
            <Copyright /> */}
            </Routes>
         </body>
         <footer>
            <div className="copyright_section">
               <div className="container">
                  <p className="copyright_text">Copyright 2019 All Right Reserved By Silviya Georgieva.<a href="https://html.design"> Free  html Templates</a></p>
               </div>
            </div>
         </footer>
      </AuthContext.Provider>
   );
}

