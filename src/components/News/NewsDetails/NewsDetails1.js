
import { Link } from "react-router-dom";

export default function NewsDetails1() {
    return (
        <Link className="col-sm-4" to={'/news-details1'}>
            <div className="box_main_1">
                <div className="zoomout frame"><img alt='' src="https://cdn.mos.cms.futurecdn.net/kbTYPZZHgDCnu46t3WqJmX-650-80.jpg.webp" /></div>
                <div className="padding_15">
                    <h2 className="speed_text">Nooo</h2>
                    <div className="post_text">Post by : Den <span className='span4'>20-12-2019</span></div>
                    <p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
                </div>
            </div>
        </Link>
    );
}