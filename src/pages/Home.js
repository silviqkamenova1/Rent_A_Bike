import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import OurCycles from './OurCycles';
import AboutStore from './AboutStore';
import Customers from './Customers';
import News from './News';
import Contact from './Contact';
import Footer from './Footer';


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

            <div className="copyright_section">
               <div className="container">
                  <p className="copyright_text">Copyright 2019 All Right Reserved By.<a href="https://html.design" /> Free  html Templates</p>
               </div>
            </div>

         </body>
      </>
   );
}

