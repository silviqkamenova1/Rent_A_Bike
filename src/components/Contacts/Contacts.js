import React, { useEffect, useState } from "react";
import './Contacts.css';
import { Link } from "react-router-dom";

export default function Contacts() {

   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      if (isVisible) {
         // Set a timeout to hide the popup after 3 seconds
         const timeoutId = setTimeout(() => {
            setIsVisible(false);
         }, 3000);

         // Clear the timeout on component unmount or if the popup is closed before the timeout
         return () => clearTimeout(timeoutId);
      }
   }, [isVisible]);

   const handlePopupClick = () => {
      // Show the popup on click
      setIsVisible(true);
      document.getElementById('subs-btn').style.display = 'none'
   };

   return (
      <div className="footer_section layout_padding contact">
         <div className="container-fluid">
            <div className="row font">
               <div className="col-lg-8 col-sm-12 padding_0">
                  <div className="map_main">
                     <div className="map-responsive ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.497001274995!2d27.46414287540942!3d42.50224512610787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69497a42e957f%3A0x19bb0076a32a92a1!2z0LHRg9C7LiDigJ7QodCw0L0g0KHRgtC10YTQsNC90L7igJwsINCR0YPRgNCz0LDRgQ!5e0!3m2!1sbg!2sbg!4v1701438504157!5m2!1sbg!2sbg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe></div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 info">

                  <div className="call_text map"><a href="https://www.google.com/maps/place/%D0%B1%D1%83%D0%BB.+%E2%80%9E%D0%A1%D0%B0%D0%BD+%D0%A1%D1%82%D0%B5%D1%84%D0%B0%D0%BD%D0%BE%E2%80%9C+49,+8000+%D0%96%D0%B8%D0%BB%D0%B8%D1%89%D0%B5%D0%BD+%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81+%D0%92%D1%8A%D0%B7%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D0%B5,+%D0%91%D1%83%D1%80%D0%B3%D0%B0%D1%81/@42.5014082,27.460733,17z/data=!3m1!4b1!4m6!3m5!1s0x40a69497f91834c3:0x24d94737a2e6af78!8m2!3d42.5014082!4d27.4633133!16s%2Fg%2F11csdv9shx?entry=ttu"><img alt='' src="assets/images/map-icon.png" /><span className="padding_left_0">str. San Stefano 49, Burgas</span></a></div>
                  <div className="call_text"><a href="/call"><img alt='' src="assets/images/call-icon.png" /><span className="padding_left_0">Call Now  +359 123467890</span></a></div>
                  <div className="call_text"><a href="/email"><img alt='' src="assets/images/mail-icon.png" /><span className="padding_left_0">rentAbike@gmail.com</span></a></div>
                  <div className="social_icon">
                     <ul>
                        <li><a href="/fb"><img alt='' src="assets/images/fb-icon1.png" /></a></li>
                        <li><a href="/twitter"><img alt='' src="assets/images/twitter-icon.png" /></a></li>
                        <li><a href="https://www.linkedin.com/in/silviya-georgieva-15a324255/"><img alt='' src="assets/images/linkedin-icon.png" /></a></li>
                        <li><a href="https://www.instagram.com/silviqkamenova/"><img alt='' src="assets/images/instagram-icon.png" /></a></li>
                     </ul>
                  </div>
                  <div id="subs-btn">
                     <input type="text" className="email_text" placeholder="Enter Your Email" name="Enter Your Email" />
                     <div onClick={handlePopupClick} className="subscribe_bt ">
                        <Link href="/subscribe">Subscribe</Link>
                        {isVisible && (
                           <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', background: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', zIndex: 9999 }}>
                              <p>Thanks for subscribing</p>
                           </div>
                        )}
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}