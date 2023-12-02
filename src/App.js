import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';


import { AuthContext, AuthProvider } from './contexts/AuthContext';
//import { useService } from './hooks/useService';

import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import AddBike from './components/AddBike/AddBike';
//import Customers from './components/Customer/Customers';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts';

import Details from './components/Details/Details';


import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Catalog from './components/Catalog/Catalog';
import { Logout } from './components/Logout/Logout';
import Edit from './components/Edit/Edit';
import { RoutGuard } from './components/common/RouteGuard';
//import { BikeProvider } from './contexts/BikeContext';
import { BikeOwner } from './components/common/BikeOwner';
import Profile from './components/Profile/Profile';
import { bikeServiceFactory } from './services/bikeService';
import { authServiceFactory } from './services/authServices';
//import { useService } from './hooks/useService';

export default function App() {
const navigate = useNavigate();
const [bikes, setBikes] = useState([]);
//const [auth, setAuth] = useState({});
const bikeService = bikeServiceFactory()//auth.accessToken
// const authService = authServiceFactory(auth.accessToken)



useEffect(() => {
   bikeService.getAll()
      .then(result => {
         setBikes(result)
      })
}, []);

const onCerateBikeSubmit = async (data) => {
   const newBike = await bikeService.create(data);

   setBikes(state => [...state, newBike]);

   navigate('/catalog');
};

// const onLoginSubmit = async (data) => {
//    try {
//        const result = await authService.login(data);
//        setAuth(result);

//        navigate('/');
//    } catch (error) {
//        console.log('There is a problem');
//    }
// };
// const onRegisterSubmit = async (values) => {
//    const { repass, ...registerData } = values;

//    if (repass !== registerData.password) {
//        return;
//    };

//    try {
//        const result = await authService.register(registerData);
//        setAuth(result);
//        navigate('/');
//    } catch (error) {
//        console.log('There is a problem');
//    }
// };

// const onLogout = async () => {
//    await authService.logout();
//    setAuth({});
// };

const onBikeEditSubmit = async (values) => {
   const result = await bikeService.edit(values._id, values);  
   setBikes(state => state.map(x => x._id === values._id ? result : x));

   navigate(`/catalog/${values._id}`);
};


// const contextValues = {
//    onLoginSubmit,
//    onRegisterSubmit,
//    onLogout,
//    userId: auth._id,
//    token: auth.accessToken,
//    userEmail: auth.email,
//    isAuthenticated: !!auth.accessToken 
// }
   return (
      <AuthProvider >
         {/* <AuthContext.Provider value={contextValues}> */}
            <body id='body-bg'>
               <div className="header_section header_bg">
                  <Navigation />
                  <Routes>
                     <Route path='/' element={<Home />} />
                  </Routes>
               </div>
               <Routes>
                  {/* <Route path='' element={<Customers />} /> */}
                  <Route path='/news' element={<News />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/contacts' element={<Contacts />} />
                  <Route path='/trolley' element={<Profile />} />
                  <Route path='/catalog' element={<Catalog bikes={bikes}/>} />
                  <Route path='/catalog/:bikeId' element={<Details />} />
                  <Route element={<RoutGuard />}>

                     <Route path='/create' element={<AddBike onCerateBikeSubmit={onCerateBikeSubmit}/>} />
                     <Route path='/catalog/:bikeId/edit' element={
                        <BikeOwner>
                           <Edit onBikeEditSubmit={onBikeEditSubmit}/>
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
         {/* </AuthContext.Provider> */}
      </AuthProvider>
   );
}

