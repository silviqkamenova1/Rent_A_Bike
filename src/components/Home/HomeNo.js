import React from "react";

export default function Banner() {
    return (
        <div className="banner_section layout_padding">
        <div id="main_slider" className="carousel slide" data-ride="carousel">
           <div className="carousel-inner">
              <div className="carousel-item active">
                 <div className="container">
                    <div className="row">
                       <div className="col-md-7">
                          <div className="best_text">Best</div>
                          <div className="image_1"><img src="assets/images/img-1.png"/></div>
                       </div>
                       <div className="col-md-5">
                          <h1 className="banner_taital">New Model Cycle</h1>
                          <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content </p>
                          <div className="contact_bt"><a href="contact.html">Shop Now</a></div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="carousel-item">
                 <div className="container">
                    <div className="row">
                       <div className="col-md-7">
                          <div className="best_text">Best</div>
                          <div className="image_1"><img src="assets/images/img-1.png"/></div>
                       </div>
                       <div className="col-md-5">
                          <h1 className="banner_taital">New Model Cycle</h1>
                          <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content </p>
                          <div className="contact_bt"><a href="contact.html">Shop Now</a></div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="carousel-item">
                 <div className="container">
                    <div className="row">
                       <div className="col-md-7">
                          <div className="best_text">Best</div>
                          <div className="image_1"><img src="assets/images/img-1.png"/></div>
                       </div>
                       <div className="col-md-5">
                          <h1 className="banner_taital">New Model Cycle</h1>
                          <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content </p>
                          <div className="contact_bt"><a href="contact.html">Shop Now</a></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
           <i className="fa fa-angle-left"></i>
           </a>
           <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
           <i className="fa fa-angle-right"></i>
           </a>
        </div>
     </div>
    );
}