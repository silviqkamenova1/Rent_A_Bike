import React, { useState } from "react";
import { Link } from "react-router-dom";

// function getDate() { 
//      const today = new Date(); 
//      const month = today. getMonth() + 1; 
//      const year = today. getFullYear(); 
//      const date = today
//      return `${date}/${month}/${year}`;
//  }

// https://www.bikeradar.com/news/ultima-multipath/


export default function News() {
    // const [currentData, setCurrentDate] = useState(getDate())
    return (
        <div className="news_section layout_padding">
            <div className="container">
                <h1 className="news_taital">News</h1>
                <h1 className="news_taital"> </h1>
                <p className="news_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>

                <div className="news_section_2 layout_padding">
                    <div className="row">
                        <Link className="col-sm-4 " to={'/news-details1'}>
                            <div className="box_main_1">
                                <div className="zoomout frame"><img alt='' src="https://images.immediate.co.uk/production/volatile/sites/21/2023/12/focusparalane8.9profile-5fc5ebb.jpg?webp=true&quality=90&resize=620%2C413" /></div>
                                <div className="padding_15">
                                    <h2 className="speed_text">New Focus Paralane targets fast endurance riders with lighter, stiffer and more aero frame</h2>
                                    <div className="post_text">Post by : Jack Evans <span className='span4'>December 6, 2023</span></div>
                                    <p className="long_text">Focus has unveiled a new version of its Paralane endurance road bike, claiming a revised frame design saves weight and increases stiffness while retaining all-day comfort.</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="col-sm-4" to={'/news-details2'}>
                            <div className="box_main_1">
                                <div className="zoomout frame"><img alt='' src="https://images.immediate.co.uk/production/volatile/sites/21/2023/04/Ultima-ABS-plastic-bike-1-of-18-e01e99a.jpg?webp=true&quality=90&resize=620%2C413" /></div>
                                <div className="padding_15">
                                    <h2 className="speed_text">Ultima Multipath is the first ebike made from recycled plastic and alloy</h2>
                                    <div className="post_text">Post by : Jack Evans <span className='span4'>April 25, 2023</span></div>
                                    <p className="long_text">The Ultima Multipath is claimed to be the first electric bike with a frameset made from recycled plastic and alloy. In partnership with car-body manufacturer Protoform, Ultima</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="col-sm-4 " to={'/news-details3'}>
                            <div className="box_main_1">
                                <div className="zoomout frame"><img alt='' src="assets/images/img-8.png" /></div>
                                <div className="padding_15">
                                    <h2 className="speed_text ">JTeam TotalEnergies to ride ENVE Melee road bike for next two seasons</h2>
                                    <div className="post_text">Post by : Stan Portus <span className='span4'>December 5, 2023</span></div>
                                    <p className="long_text">ENVE will provide Team TotalEnergies with its Melee road bike, wheels and components for the next two seasons. TotalEnergie previously used Specialized bikes, but ENVE will expand</p>

                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}