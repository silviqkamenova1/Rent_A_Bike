
import { Link } from "react-router-dom";

export default function NewsDetails2() {
    return (
        <div className="contact_section layout_padding">
        <div className="container">
           <div className="contact_main">
              <h1 className="request_text dtls">DETAILS</h1>
              <div className='details-border'>
                 <div className="box_main form_pic">
                    <div className="image_2 "><img className='bikePic' alt='' src='' /></div>
                 </div>
                 <div className="form-group">
                    <input className="email-bt frame" placeholder="Ultima Multipath is the first ebike made from recycled plastic and alloy" value='' />
                 </div>

                 <div id="details-description">
                    <p className='details-p'><strong className='bold'>Type:</strong> </p>
                   
                 </div>
                 {/* <div className="form-group">
                 <input type="text" className="email-bt" placeholder="Size" value={bike.size} />
              </div>
              <div className="form-group">
                 <input type="text" className="email-bt" placeholder="Year" value={bike.year} />
              </div>
              <div className="form-group">
                 <input type="text" className="email-bt" placeholder="Price" value={bike.price} />
              </div>
              <div className="form-group">
                 <input type="text" className="email-bt" placeholder="Image" value={bike.image} />
              </div>
              <div className="form-group">
                 <textarea className="massage-bt" placeholder="Description" rows="5" id="comment" value={bike.description}></textarea>
              </div> */}

                 <div className="container_send">
  
                    {/* {(isAuthenticated && !isOwner) && ( */}

                       <div className="send_btn"><Link id='rentBtn' href="javascript:void(0)" >RENT</Link></div>

                    {/* )} */}
                 </div>
              </div>
           </div>
        </div>
     </div>
    );
}