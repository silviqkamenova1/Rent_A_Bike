//import { useBikeContext } from "../../contexts/";
import { useForm } from "../../hooks/useForm";

import './AddBike.css'

export default function AddBike ({
   onCerateBikeSubmit
})  {
   //const { onCerateBikeSubmit } = useBikeContext()
   const {values, changeHandler, onSubmit} = useForm({
      frame: '',
      type: '',
      size: '',
      year: '',
      price: '',
      image: '',
      description: '',
   },onCerateBikeSubmit);

   return (

      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text">Add Bike</h1>
               <form method="POST" onSubmit={onSubmit}>
                
                  <div className="form-group">
                     <input value={values.frame} onChange={changeHandler} type="text" className="email-bt" placeholder="Frame" name="frame" />
                  </div>
                  <div className="form-group">
                     <input value={values.type} onChange={changeHandler} type="text" className="email-bt" placeholder="Type" name="type" />
                  </div>
                  <div className="form-group">
                     <input value={values.size} onChange={changeHandler} type="text" className="email-bt" placeholder="Size" name="size" />
                  </div>
                  {/* <div className="form-group">
                     <input value={values.spokes} onChange={changeHandler} type="text" className="email-bt" placeholder="Spokes" name="spokes" />
                  </div> */}
                  <div className="form-group">
                     <input value={values.year} onChange={changeHandler} type="text" className="email-bt" placeholder="Year" name="year" />
                  </div>
                  <div className="form-group">
                     <input value={values.price} onChange={changeHandler} type="text" className="email-bt" placeholder="Price" name="price" />
                  </div>
                  <div className="form-group">
                     <input value={values.image} onChange={changeHandler} type="text" className="email-bt" placeholder="Image" name="image" />
                  </div>
                  <div className="form-group">
                     <input value={values.description} onChange={changeHandler} type="text" className="email-bt" placeholder="Description" name="description" />
                  </div>
                  <div className="container_send">

                     <input className="send_btn" type="submit" value="Add Bike"/>
                  </div>
               </form>
               
            </div>
         </div>
      </div>

   );
};