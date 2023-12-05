import { Link } from "react-router-dom";


export default function SearchElement({
    _id,
    model,
    type,
    price,
    image,

}) {

    return (
        <div className="fruit">
            <img src="https://www.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600nw-1498702814.jpg" alt="example1" />
            <h3 className="title">{model}</h3>
            <p className="description"><strong>{type}</strong></p>
            <p className="description"><strong>$ {price}</strong></p>
            <Link className="details-btn" to={`/catalog/${_id}`}>More Info</Link>
        </div>

    );
}