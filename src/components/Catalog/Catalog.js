import './Catalog.css'
import { CatalogItem } from "./CatalogItem/CatalogItem";
import { useContext } from "react";
import { BikeContext, useBikeContext } from "../../contexts/BikeCntext";
export default function Catalog() {
    const { bikes } = useBikeContext()
    return (
        <div className="cycle_section layout_padding" id="body-bg">
            <div className="container">
                <h1 className="cycle_taital">Our cycle</h1>
         
                {bikes.map(x => <CatalogItem key={x._id} {...x}/>)}

                {bikes.length === 0 && (<h1 className="cycle_taital">No bikes added</h1>)}

            </div>
        </div>
    );
}