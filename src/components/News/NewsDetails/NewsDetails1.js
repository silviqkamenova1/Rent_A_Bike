import { AuthContext } from '../../../contexts/AuthContext';

import { useState,useContext, useEffect } from 'react';
import './NewsDetails.css';

export default function NewsDetails1() {
    const [likes, setLikes] = useState(parseInt(localStorage.getItem('likes'), 10) || 0);
    const [liked, setLiked] = useState(JSON.parse(localStorage.getItem('liked')) || false);

    const [isActive, setIsActive] = useState(JSON.parse(localStorage.getItem('isActive')) || true);
    const { userId, isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        // Save state to localStorage whenever it changes
        localStorage.setItem('likes', likes);
        localStorage.setItem('liked', JSON.stringify(liked));
        localStorage.setItem('isActive', JSON.stringify(isActive));
      }, [likes, liked, isActive]);

    const handleClick = () => {
        // Disable the button after click
        setLikes(likes + 1);
        setLiked(true);
        setIsActive(false);

    };
    return (
        <div className="col-sm-4 offset-sm-4" >
            <div className="box_main_1 box-news">
                <div className='imgNews'><img alt='' src="https://images.immediate.co.uk/production/volatile/sites/21/2023/12/focusparalane8.9profile-5fc5ebb.jpg?webp=true&quality=90&resize=620%2C413" /></div>
                <div className="padding_15">
                    <h1 className='speed_text1'>New Focus Paralane targets fast endurance riders with lighter, stiffer and more aero frame</h1>
                    <h2 className="speed_text2">Latest version of German brand's endurance road bike also gains an integrated stem and top tube mounts</h2>
                    <div className="post_text1">Post by : Jack Evans <span className='span4'>December 6, 2023 at 1:00 pm</span></div>
                    <p className="long_text1">Focus has unveiled a new version of its Paralane endurance road bike, claiming a revised frame design saves weight and increases stiffness while retaining all-day comfort.

                        The second-generation Paralane targets riders who want to travel far, but without sacrificing comfort and practicality for speed.

                        Focus has added top tube mounts and increased stack height, while retaining the Paralane's clearance for 35mm-wide tyres (or 33mm with mudguards). While the German brand doesn't make any performance claims about the Paralane, it says it uses similarly aerodynamic tube shapes as its Izalco Max race bike.

                        The Paralane remains competitively priced compared to the best endurance road bikes. The top-of-the-range Paralane 8.9 with Ultegra Di2 R8170 costs £5,199 / €5,299 / AU$6,999 (US pricing is to be confirmed).
                    </p>
                    {isAuthenticated && (
                    <div className="like-button-container">
                        <button
                            className={`like-button ${liked ? 'liked' : ''}`}
                            onClick={handleClick} 
                            disabled={!isActive} // Set the 'disabled' attribute based on the 'isActive' state
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