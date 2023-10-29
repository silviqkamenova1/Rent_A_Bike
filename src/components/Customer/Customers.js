import React from "react";

export default function Customers() {
    return (
        <div className="client_section layout_padding">
        <div id="my_slider" className="carousel slide" data-ride="carousel">
           <div className="carousel-inner">
              <div className="carousel-item active">
                 <div className="container">
                    <div className="client_main">
                       <h1 className="client_taital">Says Customers</h1>
                       <div className="client_section_2">
                          <div className="client_left">
                             <div><img alt='' src="assets/images/client-img.png" className="client_img"/></div>
                          </div>
                          <div className="client_right">
                             <div className="quote_icon"><img alt='' src="assets/images/quote-icon.png"/></div>
                             <p className="client_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                             <h3 className="client_name">Channery</h3>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="carousel-item">
                 <div className="container">
                    <div className="client_main">
                       <h1 className="client_taital">Says Customers</h1>
                       <div className="client_section_2">
                          <div className="client_left">
                             <div><img alt='' src="assets/images/client-img.png" className="client_img"/></div>
                          </div>
                          <div className="client_right">
                             <div className="quote_icon"><img alt='' src="assets/images/quote-icon.png"/></div>
                             <p className="client_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                             <h3 className="client_name">Channery</h3>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="carousel-item">
                 <div className="container">
                    <div className="client_main">
                       <h1 className="client_taital">Says Customers</h1>
                       <div className="client_section_2">
                          <div className="client_left">
                             <div><img alt='' src="assets/images/client-img.png" className="client_img"/></div>
                          </div>
                          <div className="client_right">
                             <div className="quote_icon"><img alt='' src="assets/images/quote-icon.png"/></div>
                             <p className="client_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                             <h3 className="client_name">Channery</h3>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
              <i className="fa fa-angle-left"></i>
           </a>
           <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
             <i className="fa fa-angle-right"></i>
           </a>
        </div>
     </div>
    )
}