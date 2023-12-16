import {  useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { bikeServiceFactory } from "../../services/bikeService";
import { BikeContext, useBikeContext } from "../../contexts/BikeCntext";
import Validation from "./editValidation";


export default function Edit() {
   const { onBikeEditSubmit } = useBikeContext()
   const { bikeId } = useParams()// use it to make a request with useEffect
   const bikeService = useService(bikeServiceFactory)
   const [values, setValues] = useState({
      _id:'', 
      frame: '',
      type: '',
      size: '',
      year: '',
      price: '',
      image: '',
      description: '',
   });

   useEffect(() => {
      bikeService.getOne(bikeId)
         .then(result => {
            setValues(result)
         });
   }, [bikeId]);

   const [errors, setErrors] = useState({});
  
   const changeHandler = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: '' }); // Clear the error when the input changes
   };
  
   const validateForm = () => {
      const validationErrors = Validation(values);
      setErrors(validationErrors);
      return Object.keys(validationErrors).length === 0;
   };
  
   const onSubmit = (e) => {
      e.preventDefault();
      const isValid = validateForm();
  
      if (isValid) {
         onBikeEditSubmit(values)
         console.log('Form submitted:', values);
      } else {
         console.log('Form validation failed');
      }
   };

   return (
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text">EDIT</h1>

               <form action="POST" onSubmit={onSubmit}>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Frame" name="frame" value={values.frame} onChange={changeHandler} />
                     {errors.frame && <p style={{ color: "red" }}>{errors.frame}</p>}
                  </div>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Type" name="type" value={values.type} onChange={changeHandler} />
                     {errors.type && <p style={{ color: "red" }}>{errors.type}</p>}
                  </div>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Size" name="size" value={values.size} onChange={changeHandler} />
                     {errors.size && <p style={{ color: "red" }}>{errors.size}</p>}
                  </div>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Year" name="year" value={values.year} onChange={changeHandler} />
                     {errors.year && <p style={{ color: "red" }}>{errors.year}</p>}

                  </div>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Price" name="price" value={values.price} onChange={changeHandler} />
                     {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}

                  </div>
                  <div className="form-group">
                     <input type="text" className="email-bt" placeholder="Image" name="image" value={values.image} onChange={changeHandler} />
                     {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}

                  </div>
                  <div className="form-group">
                     <textarea className="massage-bt" placeholder="Description" rows="5" id="comment" name="description" value={values.description} onChange={changeHandler}></textarea>
                     {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
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