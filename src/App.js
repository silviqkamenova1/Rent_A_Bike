import React from 'react';
// import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home  from './components/Home/Home';
import Navigation  from './components/Navigation/Navigation';
import AddCycle  from './components/AddCycle/AddCycle';
import AboutStore  from './components/AboutStore/AboutStore';
import Customers  from './components/Customer/Customers';
import News  from './components/News/News';
import Contact  from './components/Contact/Contact';
import Footer  from './components/Footer/Footer';
import Copyright  from './components/Copyright/Copyright';


import './App.css'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import OurCycles from './components/AddCycle/AddCycle';
import Catalog from './components/Catalog/Catalog';

export default function App() {

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
   //  })
   return (
      <>
         <body>
            <div className="header_section header_bg">
               <Navigation /> 
               <Routes>
                  <Route path='/' element= {<Home />} />
               </Routes>
            </div>
         <Routes>
            <Route path='/create' element= {<AddCycle />} />
            <Route path='/contact' element = { <Contact />} />
            <Route path='/about' element = { <AboutStore />} />
            <Route path='' element = { <Customers />} />
            <Route path='/news' element = { <News />} />
            <Route path='/login' element = { <Login />} />
            <Route path='/register' element = { <Register />} />
            <Route path='/news' element = { <Footer />} />
            <Route path='/news' element = { <Copyright />} />
            <Route path='/catalog' element = { <Catalog />} />

            {/* <Footer />
            <Copyright /> */}
         </Routes>
         </body>
      </>
   );
}

