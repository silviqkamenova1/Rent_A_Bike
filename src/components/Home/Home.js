import React from 'react';
import Navigation from './Navigation';
import Banner from '../Banner/Banner';
import OurCycles from '../OurCycles/OurCycles';
import AboutStore from '../AboutStore/AboutStore';
import Customers from '../Customer/Customers';
import News from '../News/News';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Copyright from '../Copyright/Copyright';


export default function Home() {
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

