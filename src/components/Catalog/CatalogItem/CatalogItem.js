import { Link } from "react-router-dom";
import '../Catalog.css';

export const CatalogItem = ({
    _id,
    frame,
    price,
    description,
    image,
    size,
}) => {

    return (
        <div className="cycle_section_2 catalog-border">
            <div className="row" >
                <div className="col-md-6">
                    <div className="box_main">
                        <h6 className="number_text">{size}</h6>
                        <div className="image_2 " ><img className="pic" alt='' src={image} /></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="cycles_text" id="frame">{frame}</h1>
                    <p className="lorem_text">{description}</p>
                    <div className="btn_main">
                        <div className="buy_bt"><Link to={`/catalog/${_id}`}>Details</Link></div>
                        <h4 className="price_text">Price <span className='span2'>$</span> <span className='span3'>{price}</span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};