import { AuthContext } from '../../../contexts/AuthContext';

import { useState,useContext } from 'react';
import './NewsDetails.css';
//import { Link } from "react-router-dom";

export default function NewsDetails2() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const [isActive, setIsActive] = useState(true);
    const { userId, isAuthenticated } = useContext(AuthContext);

    const handleClick = () => {
        // Disable the button after click
        setIsActive(false);

        // You can also perform other actions here if needed
        console.log('Button clicked!');
    };
    return (
        <div className="col-sm-4 offset-sm-4" id='news-container' >
            <div className="box_main_1 box-news">
                <div className="imgNews"><img alt='' src="https://images.immediate.co.uk/production/volatile/sites/21/2023/04/Ultima-ABS-plastic-bike-1-of-18-e01e99a.jpg?webp=true&quality=90&resize=620%2C413" /></div>
                <div className="padding_15">
                    <h1 className='speed_text1'>Ultima Multipath is the first ebike made from recycled plastic and alloy</h1>
                    <h2 className="speed_text2">Highly configurable 'smart' electric bike adjusts assistance level for you</h2>
                    <div className="post_text1">Post by :  Jack Evans <span className='span4'>April 25, 2023 at 11:28 am</span></div>
                    <p className="long_text1">The Ultima Multipath is claimed to be the first electric bike with a frameset made from recycled plastic and alloy.

                        In partnership with car-body manufacturer Protoform, Ultima has harnessed monocoque-injected technology first developed in Formula One racing.

                        This sees a resin injected into a mould to create a structure from a single piece of material. The lack of joins is intended to reduce weight and increase safety in case of a crash.Ultima claims the one-size-fits-all frame can accommodate riders between 140cm and 190cm tall.The Multipath uses the Valeo Smart eBike System. Valeo says this is the world’s first ebike system to combine an electric bike motor and adaptive automatic transmission.

                        The 48V mid-drive motor provides 130Nm of torque, according to Ultima.

                        Valeo says the transmission system, which sits in the bottom bracket, analyses data from the wheel speed, cadence, torque and gradient sensors with predictive software. It then adjusts the assist level, gear and cadence to best suit the rider’s behaviour and environment.</p>

                        {isAuthenticated && (
                    <div className="like-button-container">
                        <button
                            className={`like-button ${liked ? 'liked' : ''}`}
                            onClick={() => {
                                setLikes(likes + 1);
                                setLiked(true);
                                handleClick()
                            }} disabled={!isActive} // Set the 'disabled' attribute based on the 'isActive' state
                            style={{ cursor: isActive ? 'pointer' : 'not-allowed' }} // Optionally change the cursor style
                            >
                            {isActive ? `${likes} Likes` : 'You already liked it!'}
                        </button>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}