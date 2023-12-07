import './AddBike.css';

import { useEffect, useState } from "react";

import Validation from "./createValidation";
import { useForm } from "../../hooks/useForm";


export default function AddBike ({
   onCerateBikeSubmit
})  {
   //const { onCerateBikeSubmit } = useBikeContext()
   const {values, changeHandler, onSubmit } = useForm({
      frame: '',
      type: '',
      size: '',
      year: '',
      price: '',
      image: '',
      description: '',
   },onCerateBikeSubmit);

   const [formErrors, setformErrors] = useState({});
    //const { isDirty, isValid } = formState
   function handleValidation(ev){
      ev.preventDefault();
      setformErrors(Validation(values))
   }

   const handelSubmit = (ev) => {
      ev.preventDefault()
      onSubmit(ev);
      handleValidation(ev);
   }
   useEffect(() => {
      if(Object.keys(formErrors).length === 0 && onSubmit){
      }
  }, [])
// 46 row add noValidate
   return (

      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text">Add Bike</h1>
               <form method="POST" onSubmit={handelSubmit} >
               {Object.keys(formErrors).length === 0 && onSubmit ? <p>successful</p>: <p>unsuccessful</p>}
                  <div className="form-group">
                     <input value={values.frame} onChange={changeHandler} type="text" className="email-bt" placeholder="Frame" name="frame" />
                     {formErrors.frame && <p style={{color:"red"}}>{formErrors.frame}</p>}
                  </div>
                  <div className="form-group">
                     <input value={values.type} onChange={changeHandler} type="text" className="email-bt" placeholder="Type" name="type" />
                     {formErrors.type && <p style={{color:"red"}}>{formErrors.type}</p>}
                  </div>
                  <div className="form-group">
                     <input value={values.size} onChange={changeHandler} type="text" className="email-bt" placeholder="Size" name="size" />
                     {formErrors.size && <p style={{color:"red"}}>{formErrors.size}</p>}
                  </div>
                  <div className="form-group">
                     <input value={values.year} onChange={changeHandler} type="text" className="email-bt" placeholder="Year" name="year" />
                     {formErrors.year && <p style={{color:"red"}}>{formErrors.year}</p>}
                  </div>
                  <div className="form-group">
                     <input value={values.price} onChange={changeHandler} type="text" className="email-bt" placeholder="Price" name="price" />
                     {formErrors.price && <p style={{color:"red"}}>{formErrors.price}</p>}
                  </div>
                  <div className="form-group">
                     <input value={values.image} onChange={changeHandler} type="text" className="email-bt" placeholder="Image" name="image" />
                     {formErrors.image && <p style={{color:"red"}}>{formErrors.image}</p>}
                  </div>
                  <div className="form-group">
                     <input value={values.description} onChange={changeHandler} type="text" className="email-bt" placeholder="Description" name="description" />
                     {formErrors.description && <p style={{color:"red"}}>{formErrors.description}</p>}
                  </div>
                  <div className="container_send">
                     <input className="send_btn" type="submit" value="Add Bike" />
                  </div>
               </form>
               
            </div>
         </div>
      </div>

   );
};