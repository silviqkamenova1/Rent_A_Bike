import React from "react";

export default function Register() {
   return (
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text">Register</h1>
               <form action="/action_page.php">
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Username" name="username" />
                  </div>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Email" name="email" />
                  </div>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Password" name="password" />
                  </div>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Repeat Password" name="repass" />
                  </div>
               </form>
               <div className="container_send">

                  <input className="send_btn" type="submit" value="Register" />
               </div>
            </div>
         </div>
      </div>
   );
}