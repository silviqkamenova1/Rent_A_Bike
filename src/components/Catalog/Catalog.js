import React from "react";
import { CatalogItem } from "./CatalogItem/CatalogItem";
import { Link } from "react-router-dom";

export default function Catalog({
    bikes
}) {
    return (
        <div className="cycle_section layout_padding">
            <div className="container">
                <h1 className="cycle_taital">Our cycle</h1>
                {bikes.map(x => <CatalogItem key={x._id} {...x}/>)}
                {/* <div className="read_btn_main">
                    <div className="read_bt"><a href="/readMore">Read More</a></div>
                </div> */}
                {bikes.length === 0 && (<h1 className="cycle_taital">No bikes added</h1>)}


            </div>
        </div>
    );
}