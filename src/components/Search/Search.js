import './Search.css'


export default function Search() {
    return (
        <section id="search" className='border'>
            <div className="form">
                <h2>Search</h2>
                <form className="search-form">
                    <input type="text" name="search" id="search-input" />
                    <button className="button-list">Search</button>
                </form>
            </div>
            <h4>Results:</h4>
            <div className="search-result">
                <div class="fruit">
                    <img src="https://www.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600nw-1498702814.jpg" alt="example1" />
                    <h3 class="title">Name</h3>
                    <p class="description">$Price</p>
                    <a class="details-btn" href="">More Info</a>
                </div>
                <div class="fruit">
                    <img src="https://www.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600nw-1498702814.jpg" alt="example1" />
                    <h3 class="title">Name</h3>
                    <p class="description">$Price</p>
                    <a class="details-btn" href="">More Info</a>
                </div>
                <p className="no-result">No result.</p>

            </div>
        </section>
    );
};