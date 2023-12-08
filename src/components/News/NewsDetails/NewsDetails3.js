import { useState } from 'react';
import './NewsDetails.css';


export default function NewsDetails3() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    return (
        <div className="col-sm-4 offset-sm-4" to={'/news-details3'}>
            <div className="box_main_1 box-news">
                <div className="imgNews"><img alt='' src="assets/images/img-8.png" /></div>
                <div className="padding_15">
                    <h1 className='speed_text1'>Team TotalEnergies to ride ENVE Melee road bike for next two seasons</h1>
                    <h2 className="speed_text2">The team will also use ENVE wheels and components</h2>
                    <div className="post_text1">Post by : Stan Portus <span className='span4'>December 5, 2023 at 3:00 pm</span></div>
                    <p className="long_text1">ENVE will provide Team TotalEnergies with its Melee road bike, wheels and components for the next two seasons.

                        TotalEnergie previously used Specialized bikes, but ENVE will expand its presence in professional road cycling with the new partnership.

                        ENVE says it will continue to provide the WorldTour team UAE Team Emirates with its SES wheels and SES Aero One-Piece handlebar. Ivan Basso and Alberto Contador's project, Team Polti Kometa, will also remain on ENVE wheels. Before releasing the Custom Road in 2021, ENVE had focused on producing wheels and other components, such as handlebars, stems and forks.

                        The Melee, released in July 2022, was the brand's second bike. Unlike the Custom Road, which can be configured to your specific needs, ENVE chose to produce the Melee in a more conventional range of seven sizes.

                        The partnership between Team TotalEnergies and ENVE will be the first time the Melee has been raced in the professional peloton.

                        Team TotalEnergies manager Jean-René Bernaudeau says the team were already familiar with ENVE's wheels, but discussions with ENVE's engineers began in October.
                    </p>
                    <div className="like-button-container">
                        <button
                            className={`like-button ${liked ? 'liked' : ''}`}
                            onClick={() => {
                                setLikes(likes + 1);
                                setLiked(true);
                            }}>
                            {likes} Likes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}