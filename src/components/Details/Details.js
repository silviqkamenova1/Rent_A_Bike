import './Details.css';

import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { bikeServiceFactory } from "../../services/bikeService";
import { AuthContext } from "../../contexts/AuthContext";
import { useService } from "../../hooks/useService";
import { BikeContext } from '../../contexts/BikeCntext';

export default function Details() {
   const { bikeId } = useParams();
   const { userId, isAuthenticated } = useContext(AuthContext);
   const [bike, setBike] = useState({});
   
   const { deleteBike } = useContext(BikeContext);
   
   const [likeBtn, setLikeBtn] = useState(false)
   const bikeService = useService(bikeServiceFactory);
   const navigate = useNavigate();

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

   const onRent = async () => {
      setLikeBtn(!likeBtn)
      document.getElementById('rentBtn').textContent = "You already rent this bike!"
   }

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
                     <input className="email-bt frame-details" placeholder="Frame" value={bike.frame} />
                  </div>

                  <div id="details-description">
                     <p className='details-p'><strong className='bold'>Type:</strong> {bike.type}</p>
                     <p className='details-p'><strong className='bold'>Size:</strong> {bike.size}</p>
                     <p className='details-p'><strong className='bold'>Year:</strong> {bike.year}</p>
                     <p className='details-p'><strong className='bold'>Price:</strong> <strong>$</strong> {bike.price}</p>
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
                           <div className="send_btn"><Link to="javascript:void(0)" onClick={onDelete}>DELETE</Link></div>
                        </>
                     )}
                     {(isAuthenticated && !isOwner) && (

                        <div className="send_btn"><Link id='rentBtn' href="javascript:void(0)" onClick={onRent}>RENT</Link></div>

                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}


