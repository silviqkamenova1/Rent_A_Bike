import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bikeServiceFactory } from "../../services/bikeService";

export default function Details() {
   const { bikeId } = useParams();
   const [bike, setBike] = useState({})
   const bikeService = bikeServiceFactory()

   useEffect(() => {
      bikeService.getOne(bikeId)
         .then(result => {
            setBike(result)
         })
   }, [bikeId])
   return (
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text">DETAILS</h1>
               <div className="box_main form_pic">
                  <div className="image_2"><img alt='' src={bike.image} /></div>
               </div>
               <div className="form-group">
                  <input type="text" className="email-bt" placeholder="Model" value={bike.model} />
               </div>
               <div className="form-group">
                  <input type="text" className="email-bt" placeholder="Frame" value={bike.frame} />
               </div>
               <div className="form-group">
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
               </div>

               <div className="container_send">
                  <div className="send_btn"><a href="/send">EDIT</a></div>
                  <div className="send_btn"><a href="/send">DELETE</a></div>
                  <div className="send_btn"><a href="/send">RENT</a></div>
               </div>
            </div>
         </div>
      </div>
   );
}