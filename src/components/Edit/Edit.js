import {  useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { bikeServiceFactory } from "../../services/bikeService";
import { BikeContext, useBikeContext } from "../../contexts/BikeCntext";


export default function Edit() {
   const { onBikeEditSubmit } = useBikeContext()
   const { bikeId } = useParams()// use it to make a request with useEffect
   const bikeService = useService(bikeServiceFactory)
   const { values, changeHandler, onSubmit, changeValues } = useForm({
      _id:'', 
      frame: '',
      type: '',
      size: '',
      year: '',
      price: '',
      image: '',
      description: '',
   }, onBikeEditSubmit);

   useEffect(() => {
      bikeService.getOne(bikeId)
         .then(result => {
            changeValues(result)
         });
   }, [bikeId]);

   return (
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text">EDIT</h1>

               <form action="POST" onSubmit={onSubmit}>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Frame" name="frame" value={values.frame} onChange={changeHandler} />
                  </div>
                  <div className="form-group">

                     <input type="text" className="email-bt" placeholder="Type" name="type" value={values.type} onChange={changeHandler} />
                  </div>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Size" name="size" value={values.size} onChange={changeHandler} />
                  </div>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Year" name="year" value={values.year} onChange={changeHandler} />
                  </div>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Price" name="price" value={values.price} onChange={changeHandler} />
                  </div>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Image" name="image" value={values.image} onChange={changeHandler} />
                  </div>
                  <div className="form-group">
                     <textarea className="massage-bt" placeholder="Description" rows="5" id="comment" name="description" value={values.description} onChange={changeHandler}></textarea>
                  </div>

                  <div className="container_send">
                            <input className="send_btn" type="submit" value="EDIT" />
                  </div>
               </form>
            </div>
         </div>
      </div >
   );
}