import React from "react";

export default function Footer() {
    return(
        <div className="footer_section layout_padding">
        <div className="container-fluid">
           <div className="row">
              <div className="col-lg-8 col-sm-12 padding_0">
                 <div className="map_main">
                    <div className="map-responsive">
                      <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="400" frameborder="0" className='iframe1' allowfullscreen=""></iframe>
                    </div>
                 </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                 <div className="call_text"><a href="#"><img alt='' src="assets/images/map-icon.png"/><span className="padding_left_0">Page when looking at its layou</span></a></div>
                 <div className="call_text"><a href="#"><img alt='' src="assets/images/call-icon.png"/><span className="padding_left_0">Call Now  +01 123467890</span></a></div>
                 <div className="call_text"><a href="#"><img alt='' src="assets/images/mail-icon.png"/><span className="padding_left_0">demo@gmail.com</span></a></div>
                 <div className="social_icon">
                    <ul>
                       <li><a href="#"><img alt='' src="assets/images/fb-icon1.png"/></a></li>
                       <li><a href="#"><img alt='' src="assets/images/twitter-icon.png"/></a></li>
                       <li><a href="#"><img alt='' src="assets/images/linkedin-icon.png"/></a></li>
                       <li><a href="#"><img alt='' src="assets/images/instagram-icon.png"/></a></li>
                    </ul>
                 </div>
                 <input type="text" className="email_text" placeholder="Enter Your Email" name="Enter Your Email"/>
                 <div className="subscribe_bt"><a href="#">Subscribe</a></div>
              </div>
           </div>
        </div>
     </div>
    )
}