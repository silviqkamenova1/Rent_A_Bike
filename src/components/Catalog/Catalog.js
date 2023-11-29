import { useBikeContext } from "../../contexts/BikeContext";
import { CatalogItem } from "./CatalogItem/CatalogItem";
import './Catalog.css'
export default function Catalog() {
    const { bikes } = useBikeContext()
    return (
        <div className="cycle_section layout_padding" id="body-bg">
            <div className="container">
                <h1 className="cycle_taital">Our cycle</h1>
                {console.log(bikes[0])}
                {bikes.map(x => <CatalogItem key={x._id} {...x}/>)}
                {/* <div className="read_btn_main">
                    <div className="read_bt"><a href="/readMore">Read More</a></div>
                </div> */}
                {bikes.length === 0 && (<h1 className="cycle_taital">No bikes added</h1>)}


            </div>
        </div>
    );
}