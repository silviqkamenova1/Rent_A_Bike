import { CatalogItem } from "./CatalogItem/CatalogItem";


export default function CatalogPots({
    bikes,
}) {

    return(
        <div className="container">
        <h1 className="cycle_taital">Our cycle</h1>

        {bikes.map((x) =>  <CatalogItem key={x.id} {...x} />)}

        {bikes.length === 0 && (<h1 className="cycle_taital">No bikes added</h1>)}

    </div>
    )
}