import { useState } from "react";


export default function AddBike ({
   onCerateBikeSubmit,
})  {
   const [values, setValues] = useState({
      frame: '',
      model: '',
      spokes: '',
      sizes: '',
      year: '',
      price: '',
      image: '',
      description: '',
   });

   const onChangeHandler = (e) => {
      setValues(state => ({ ...state, [e.target.name]: e.target.value }));
   };

   const onSubmit = (e) => {
      e.preventDefault();
      onCerateBikeSubmit(values);
   };

   return (

      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text">Add Bike</h1>
               <form action="/action_page.php" onSubmit={onSubmit}>
                  <div className="form-group">
                     <input value={values.frame} onChange={onChangeHandler} type="text" className="email-bt" placeholder="Frame" name="frame" />
                  </div>
                  <div className="form-group">
                     <input value={values.model} onChange={onChangeHandler} type="text" className="email-bt" placeholder="Model" name="model" />
                  </div>
                  <div className="form-group">
                     <input value={values.spokes} onChange={onChangeHandler} type="text" className="email-bt" placeholder="Spokes" name="spokes" />
                  </div>
                  <div className="form-group">
                     <input value={values.sizes} onChange={onChangeHandler} type="text" className="email-bt" placeholder="Sizes" name="sizes" />
                  </div>
                  <div className="form-group">
                     <input value={values.year} onChange={onChangeHandler} type="text" className="email-bt" placeholder="Year" name="year" />
                  </div>
                  <div className="form-group">
                     <input value={values.price} onChange={onChangeHandler} type="text" className="email-bt" placeholder="Price" name="price" />
                  </div>
                  <div className="form-group">
                     <input value={values.image} onChange={onChangeHandler} type="text" className="email-bt" placeholder="Image" name="image" />
                  </div>
                  <div className="form-group">
                     <input value={values.description} onChange={onChangeHandler} type="text" className="email-bt" placeholder="Description" name="description" />
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