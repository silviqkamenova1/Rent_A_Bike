import './Details.css';

import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { bikeServiceFactory } from "../../services/bikeService";
import { useAuthContext } from "../../contexts/AuthContext";
import { useService } from "../../hooks/useService";
import { useBikeContext } from "../../contexts/BikeContext";

export default function Details() {
   const navigate = useNavigate();
   const { userId, isAuthenticated } = useAuthContext();
   const { deleteBike } = useBikeContext();
   const { bikeId } = useParams();
   const [bike, setBike] = useState({});
   const bikeService = useService(bikeServiceFactory);

   useEffect(() => {
      bikeService.getOne(bikeId)
         .then(result => {
            setBike(result);
         });
   }, [bikeId]);

   const isOwner = bike._ownerId === userId;

   const onDelete = async () => {
      //eslint-disable-next-line no-restricted-globals
      const result = confirm(`Are you sure you want to delete ${bike.frame} ?`);

      if (result) {
         await bikeService.delete(bike._id);

         deleteBike(bike._id);

         navigate('/catalog');
      }
   };

   return (
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text dtls">DETAILS</h1>
               <div className='details-border'>
                  <div className="box_main form_pic">
                     <div className="image_2 "><img className='bikePic' alt='' src={bike.image} /></div>
                  </div>
                  <div className="form-group">
                     <input className="email-bt frame" placeholder="Frame" value={bike.frame} />
                  </div>

                  <div id="details-description">
                     <p className='details-p'><strong className='bold'>Size:</strong> {bike.size}</p>
                     <p className='details-p'><strong className='bold'>Year:</strong> {bike.year}</p>
                     <p className='details-p'><strong className='bold'>Price:</strong> {bike.price}</p>
                     <p className='details-p'><strong className='bold'>Description:</strong> {bike.description}</p>
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
                     {isOwner && (
                        <>

                           <div className="send_btn"><Link to={`/catalog/${bike._id}/edit`}>EDIT</Link></div>
                           <div className="send_btn"><Link to="/send" onClick={onDelete}>DELETE</Link></div>
                        </>
                     )}
                     {(isAuthenticated && !isOwner) && (

                        <div className="send_btn"><a href="/send">RENT</a></div>

                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}


{/* <div class="animalPic">
<img src="${petDetails.image}">
</div>

<div class="animalInfo">
<h1>Name: ${petDetails.name}</h1>
<h3>Breed: ${petDetails.breed}</h3>
<h4>Age: ${petDetails.age}</h4>
<h4>Weight: ${petDetails.weight}</h4>
<h4 class="donation">Donation: ${counter}</h4>
</div> */}