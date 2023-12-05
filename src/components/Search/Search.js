import './Search.css';
import SearchElement from './SearchElement/SearchElement';

export default function Search({
    bikes
}) {
 
    return (
        <section id="search" className='border '>
                <div className="form">
                    <h2>Search</h2>
                    <form className="search-form">
                        <input type="text" name="search" id="search-input" />
                        <button className="button-list">Search</button>
                    </form>
                </div>
                <h4>Results:</h4>
                

                <div className="search-result">
                {bikes.map(x => <SearchElement key={x._id} {...x}/>)}
                    {/* <div class="fruit">
                        <img src="https://www.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600nw-1498702814.jpg" alt="example1" />
                        <h3 class="title">Cube</h3>
                        <p class="description"><strong>Road bike</strong></p>
                        <p class="description"><strong>$ 200</strong></p>
                        <a class="details-btn" href="">More Info</a>
                    </div>
                    <div class="fruit">
                        <img src="https://www.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600nw-1498702814.jpg" alt="example1" />
                        <h3 class="title">Name</h3>
                        <p class="description">$Price</p>
                        <a class="details-btn" href="">More Info</a>
                    </div> */}
                    

                </div>
              
                {bikes.length == 0 && (<p className="no-result">No result.</p>)}
            
        </section>
    );
};