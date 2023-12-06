import { Link } from "react-router-dom";


export default function SearchElement({
    _id,
    frame,
    type,
    price,
    image,

}) {

    return (
        <div className="fruit">
            <img src={image} alt="example1" />
            <h3 className="title">{frame}</h3>
            <p className="description"><strong>{type}</strong></p>
            <p className="description"><strong>$ {price}</strong></p>
            <Link className="details-btn" to={`/catalog/${_id}`}>More Info</Link>
        </div>

    );
}