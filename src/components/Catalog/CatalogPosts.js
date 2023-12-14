import { useState } from "react";
import { CatalogItem } from "./CatalogItem/CatalogItem";
import { useBikeContext } from "../../contexts/BikeCntext";


export default function CatalogPots({
    bikes,
    loading
}) {
    // const { bikes } = useBikeContext()
    if(loading){
        return <h1 className="cycle_taital">Loading...</h1>
    }
    return(
        <div className="container">
        <h1 className="cycle_taital">Our cycle</h1>

        {/* {bikes.map(x => <CatalogItem key={x._id} {...x} />)} */}

        {bikes.map((x) =>  <CatalogItem key={x.id} {...x} />)}

        {bikes.length === 0 && (<h1 className="cycle_taital">No bikes added</h1>)}

        {/* <Pagination
            currentPage={currentPage}
            totalSize={bikes.length}
            sizePerPage={itemsPerPage}
            changeCurrentPage={handlePageChange}
            numberOfPagesNextToActivePage={2}
            theme="bootstrap"
        /> */}
    </div>
    )
}