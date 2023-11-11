import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';

import * as bikeService from './services/bikeService';
import * as authServices from './services/authServices';
import { AuthContext } from './contexts/AuthContext';

import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import AddBike from './components/AddBike/AddBike';
import AboutStore from './components/AboutStore/AboutStore';
import Customers from './components/Customer/Customers';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';


import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Catalog from './components/Catalog/Catalog';

export default function App() {
   const navigate = useNavigate();
   const [bikes, setBikes] = useState([]);
   const [auth, setAuth] = useState({});

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
         const result = await authServices.login(data);
         setAuth(result);

         navigate('/catalog');
      } catch (error) {
         console.log('There is a problem');
      }
   };

   const onRegisterSubmit = async (values) => {
      const { confirmPassword, ...registerData } = values;

      if (confirmPassword !== registerData.password) {
         return;
      };

      try {
         const result = await authServices.register(registerData);
         setAuth(result);
         navigate('/catalog');
      } catch (error) {

      }
   };

   const context = {
      onLoginSubmit,
      onRegisterSubmit,
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
               <Route path='/contact' element={<Contact />} />
               {/* <Route path='/about' element = { <AboutStore />} /> */}
               <Route path='' element={<Customers />} />
               <Route path='/news' element={<News />} />
               <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
               <Route path='/register' element={<Register />} />
               <Route path='/news' element={<Footer />} />
               <Route path='/news' element={<Copyright />} />
               <Route path='/catalog' element={<Catalog bikes={bikes} />} />

               {/* <Footer />
            <Copyright /> */}
            </Routes>
         </body>
      </AuthContext.Provider>
   );
}

