import React, {useState} from "react";

function getDate() { 
     const today = new Date(); 
     const month = today. getMonth() + 1; 
     const year = today. getFullYear(); 
     const date = today
     return `${date}/${month}/${year}`;
 }
export default function News() {
    const [currentData, setCurrentDate] = useState(getDate())
    console.log(currentData.split(' '));
    return (
        <div className="news_section layout_padding">
            <div className="container">
                <h1 className="news_taital">News {currentData}</h1>
                <h1 className="news_taital"> </h1>
                <p className="news_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
                <div className="news_section_2 layout_padding">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="box_main_1">
                                <div className="zoomout frame"><img alt='' src="https://cdn.mos.cms.futurecdn.net/kbTYPZZHgDCnu46t3WqJmX-650-80.jpg.webp" /></div>
                                <div className="padding_15">
                                    <h2 className="speed_text">Speed cycle</h2>
                                    <div className="post_text">Post by : Den <span className='span4'>20-12-2019</span></div>
                                    <p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="box_main_1">
                                <div className="zoomout frame"><img alt='' src="assets/images/img-7.png" /></div>
                                <div className="padding_15">
                                    <h2 className="speed_text">Speed cycle</h2>
                                    <div className="post_text">Post by : Den <span className='span4'>20-12-2019</span></div>
                                    <p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="box_main_1">
                                <div className="zoomout frame"><img alt='' src="assets/images/img-8.png" /></div>
                                <div className="padding_15">
                                    <h2 className="speed_text">Jaump cycle</h2>
                                    <div className="post_text">Post by : Den <span className='span4'>20-12-2019</span></div>
                                    <p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}