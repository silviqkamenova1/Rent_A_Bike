import './AddBike.css';

import { useEffect, useState } from "react";

import Validation from "./createValidation";
import { useForm } from "../../hooks/useForm";
import { useBikeContext } from '../../contexts/BikeCntext';


export default function AddBike({
   onCerateBikeSubmit
}) {
   const [values, setValues] = useState({
      frame: '',
      type: '',
      size: '',
      year: '',
      price: '',
      image: '',
      description: '',
   });
  
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
         // Proceed with form submission logic
         onCerateBikeSubmit(values)
         console.log('Form submitted:', values);
      } else {
         console.log('Form validation failed');
      }
   };

   // const handelClick = (e) => {
   //    onSubmit(e),
   //       Validation();
   // };


   return (

      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text">Add Bike</h1>
               <form method="POST" onSubmit={onSubmit} >
                  <div className="form-group">
                     <input value={values.frame} onChange={changeHandler} type="text" className="email-bt" placeholder="Frame" name="frame" />
                     {errors.frame && <p style={{ color: "red" }}>{errors.frame}</p>}
                  </div>
                  <div className="form-group">
                     <input value={values.type} onChange={changeHandler} type="text" className="email-bt" placeholder="Type" name="type" />
                     {errors.type && <p style={{ color: "red" }}>{errors.type}</p>}
                  </div>
                  <div className="form-group">
                     <input value={values.size} onChange={changeHandler} type="text" className="email-bt" placeholder="Size" name="size" />
                     {errors.size && <p style={{ color: "red" }}>{errors.size}</p>}
                  </div>
                  <div className="form-group">
                     <input value={values.year} onChange={changeHandler} type="text" className="email-bt" placeholder="Year" name="year" />
                     {errors.year && <p style={{ color: "red" }}>{errors.year}</p>}
                  </div>
                  <div className="form-group">
                     <input value={values.price} onChange={changeHandler} type="text" className="email-bt" placeholder="Price" name="price" />
                     {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
                  </div>
                  <div className="form-group">
                     <input value={values.image} onChange={changeHandler} type="text" className="email-bt" placeholder="Image" name="image" />
                     {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
                  </div>
                  <div className="form-group">
                     <input value={values.description} onChange={changeHandler} type="text" className="email-bt" placeholder="Description" name="description" />
                     {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
                  </div>
                  <div className="container_send" >
                     <input className="send_btn" type="submit" value="Add Bike" />
                  </div>
               </form>

            </div>
         </div>
      </div>

   );
};