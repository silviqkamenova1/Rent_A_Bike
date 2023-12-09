import { CatalogItem } from "./CatalogItem/CatalogItem";
import './Catalog.css'
export default function Catalog({
    bikes,
}) {
    //const { bikes } = useBikeContext()
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