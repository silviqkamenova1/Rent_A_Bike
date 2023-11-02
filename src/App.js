import React from 'react';
import { useState, useEffect } from 'react';
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
            </div>
         <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/create' element= {<AddCycle />} />
            <Route path='/about' element = { <AboutStore />} />
            <Route path='' element = { <Customers />} />
            <Route path='/news' element = { <News />} />
            <Route path='/contact' element = { <Contact />} />
         </Routes>

            <Footer />
            <Copyright />
         </body>
      </>
   );
}

