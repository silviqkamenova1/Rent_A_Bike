import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import OurCycles from './components/OurCycles/OurCycles';
import AboutStore from './components/AboutStore/AboutStore';
import Customers from './components/Customer/Customers';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
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
               <Banner />
            </div>

            <OurCycles />
            <AboutStore />
            <Customers />
            <News />
            <Contact />

            <Footer />

            <Copyright />

         </body>
      </>
   );
}

