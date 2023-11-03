import React from "react";

export default function AddCycle() {
    return (
        <div className="contact_section layout_padding">
        <div className="container">
           <div className="contact_main">
              <h1 className="request_text">Add cycle</h1>
              <form action="/action_page.php">
                 <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Model" name="email"/>
                 </div>
                 <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Password" name="password"/>
                 </div>
                 <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Password" name="password"/>
                 </div>
                 <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Password" name="password"/>
                 </div>
                 <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Password" name="password"/>
                 </div>
              </form>
              <div className="send_btn"><a href="/send">Login</a></div>
           </div>
        </div>
     </div>
    );
}