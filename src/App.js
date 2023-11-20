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
import Customers from './components/Customer/Customers';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
import Details from './components/Details/Details';


import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Catalog from './components/Catalog/Catalog';
import { Logout } from './components/Logout/Logout';
import Edit from './components/Edit/Edit';

export default function App() {
   const navigate = useNavigate();
   const [bikes, setBikes] = useState([]);
   const [auth, setAuth] = useState({});
   const bikeService = bikeServiceFactory(auth.accessToken)
   const authService = authServiceFactory(auth.accessToken)

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
      await authService.logout()
      setAuth({})
   };

   const onGameEditSubmit = async ( values) => {
      const result = await bikeService.edit(values._id, values);
   
      setBikes(state => state.map(x => x._id === values._id ? result : x))

      navigate(`/catalog/${values._id}`)
   }

   const context = {
      onLoginSubmit,
      onRegisterSubmit,
      onLogout,
      userId: auth._id,
      token: auth.accessToken,
      userEmail: auth.email,
      isAuthenticated: !!auth.accessToken //double negative
   };
   // function openNav() {
   //    document.getElementById("mySidenav").style.width = "250px";
   //    document.getElementById("main").style.marginLeft = "250px";
   //  }

   //  function closeNav() {
   //    document.getElementById("mySidenav").style.width = "0";
   //    document.getElementById("main").style.marginLeft= "0";

   //  }

   //  $("#main").click(function(){
   //      $("#navbarSupportedContent").toggleClass("nav-normal")
   //  })x
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
               <Route path='/create' element={<AddBike onCerateBikeSubmit={onCerateBikeSubmit} />} />
               <Route path='/logout' element = { <Logout />} />
               <Route path='' element={<Customers />} />
               <Route path='/news' element={<News />} />
               <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
               <Route path='/register' element={<Register />} />
               <Route path='/news' element={<Footer />} />
               <Route path='/news' element={<Copyright />} />
               <Route path='/catalog' element={<Catalog bikes={bikes} />} />
               <Route path='/catalog/:bikeId' element={<Details />} />
               <Route path='/catalog/:bikeId/edit' element={<Edit onGameEditSubmit={onGameEditSubmit}/>} />

               {/* <Footer />
            <Copyright /> */}
            </Routes>
         </body>
      </AuthContext.Provider>
   );
}

