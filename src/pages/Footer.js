import React from "react";

export default function Footer() {
    return(
        <div className="footer_section layout_padding">
        <div className="container-fluid">
           <div className="row">
              <div className="col-lg-8 col-sm-12 padding_0">
                 <div className="map_main">
                    <div className="map-responsive">
                      <iframe title="frame" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="400" frameborder="0" className='iframe1' allowfullscreen=""></iframe>
                    </div>
                 </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                 <div className="call_text"><a href="https://www.google.com/maps/place/%D0%B1%D1%83%D0%BB.+%E2%80%9E%D0%A1%D0%B0%D0%BD+%D0%A1%D1%82%D0%B5%D1%84%D0%B0%D0%BD%D0%BE%E2%80%9C+49,+8000+%D0%96%D0%B8%D0%BB%D0%B8%D1%89%D0%B5%D0%BD+%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81+%D0%92%D1%8A%D0%B7%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D0%B5,+%D0%91%D1%83%D1%80%D0%B3%D0%B0%D1%81/@42.5014082,27.460733,17z/data=!3m1!4b1!4m6!3m5!1s0x40a69497f91834c3:0x24d94737a2e6af78!8m2!3d42.5014082!4d27.4633133!16s%2Fg%2F11csdv9shx?entry=ttu"><img alt='' src="assets/images/map-icon.png"/><span className="padding_left_0">Page when looking at its layou</span></a></div>
                 <div className="call_text"><a href="/call"><img alt='' src="assets/images/call-icon.png"/><span className="padding_left_0">Call Now  +359 123467890</span></a></div>
                 <div className="call_text"><a href="/email"><img alt='' src="assets/images/mail-icon.png"/><span className="padding_left_0">rentAbike@gmail.com</span></a></div>
                 <div className="social_icon">
                    <ul>
                       <li><a href="/fb"><img alt='' src="assets/images/fb-icon1.png"/></a></li>
                       <li><a href="/twitter"><img alt='' src="assets/images/twitter-icon.png"/></a></li>
                       <li><a href="https://www.linkedin.com/in/silviya-georgieva-15a324255/"><img alt='' src="assets/images/linkedin-icon.png"/></a></li>
                       <li><a href="https://www.instagram.com/silviqkamenova/"><img alt='' src="assets/images/instagram-icon.png"/></a></li>
                    </ul>
                 </div>
                 <input type="text" className="email_text" placeholder="Enter Your Email" name="Enter Your Email"/>
                 <div className="subscribe_bt"><a href="/subscribe">Subscribe</a></div>
              </div>
           </div>
        </div>
     </div>
    )
}