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
                        <Link className="col-sm-4" to={'/news-details1'}>
                            <div className="box_main_1">
                                <div className="zoomout frame"><img alt='' src="https://images.immediate.co.uk/production/volatile/sites/21/2023/12/focusparalane8.9profile-5fc5ebb.jpg?webp=true&quality=90&resize=620%2C413" /></div>
                                <div className="padding_15">
                                    <h2 className="speed_text">Nooo</h2>
                                    <div className="post_text">Post by : Den <span className='span4'>20-12-2019</span></div>
                                    <p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
                                </div>
                            </div>
                        </Link>
                        <Link className="col-sm-4" to={'/news-details2'}>
                            <div className="box_main_1">
                                <div className="zoomout frame"><img alt='' src="https://images.immediate.co.uk/production/volatile/sites/21/2023/04/Ultima-ABS-plastic-bike-1-of-18-e01e99a.jpg?webp=true&quality=90&resize=620%2C413" /></div>
                                <div className="padding_15">
                                    <h2 className="speed_text">Speed cycle</h2>
                                    <div className="post_text">Post by : Den <span className='span4'>20-12-2019</span></div>
                                    <p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
                                </div>
                            </div>
                        </Link>
                        <Link className="col-sm-4" to={'/news-details3'}>
                            <div className="box_main_1">
                                <div className="zoomout frame"><img alt='' src="assets/images/img-8.png" /></div>
                                <div className="padding_15">
                                    <h2 className="speed_text">Jaump cycle</h2>
                                    <div className="post_text">Post by : Den <span className='span4'>20-12-2019</span></div>
                                    <p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>

                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}