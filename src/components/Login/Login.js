import React from "react";

export default function Login() {
    return(
        <div className="contact_section layout_padding">
        <div className="container">
           <div className="contact_main">
              <h1 className="request_text">Login</h1>
              <form action="/action_page.php">
                 <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Username" name="username"/>
                 </div>
                 <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Email" name="email"/>
                 </div>
                 <div className="form-group">
                    <input type="text" className="email-bt" placeholder="First name" name="name"/>
                 </div>
                 <div className="form-group">
                    <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                 </div>
              </form>
              <div className="send_btn"><a href="/send">Login</a></div>
           </div>
        </div>
     </div>
    )
}