import React from "react";

export default function Contact() {
    return(
        <div className="contact_section layout_padding">
        <div className="container">
           <div className="contact_main">
              <h1 className="request_text">A Call Back</h1>
              <form action="/action_page.php">
                 <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Name" name="Name"/>
                 </div>
                 <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Email" name="Name"/>
                 </div>
                 <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Phone Numbar" name="Email"/>
                 </div>
                 <div className="form-group">
                    <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                 </div>
              </form>
              <div className="send_btn"><a href="/send">SEND</a></div>
           </div>
        </div>
     </div>
    )
}