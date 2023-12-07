import { useEffect, useState } from 'react';
import './Search.css';
import SearchElement from './SearchElement/SearchElement';

export default function Search() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
  
      return fetch("http://localhost:3030/data/bikes")
  
        .then((res) => res.json())
  
        .then((d) => setData(d));
  
    };
  
    useEffect(() => {
  
      fetchData();
  
    }, []);
  
    const [query, setQuery] = useState("");
  
    const search_parameters = Object.keys(Object.assign({}, ...data));
    
    function search(data) {
  
      const result = data.filter((data) =>
  
        search_parameters.some((parameter) =>
        //console.log(typeof String(data[parameter]))
        String(data[parameter]).toLowerCase().includes(query)
  
        )
  
      );
      return result;
    }
    return (
        <section id="search" className='border '>
                <div className="form">
                    <h2>Search</h2>
                    <form className="search-form">
                        <input type="search" name="search" id="search-input" onChange={(e) => setQuery(e.target.value)}/>
                        {/* <button className="button-list">Search</button> */}
                    </form>
                </div>
                <h4>Results:</h4>
                

                <div className="search-result">
                {search(data).map(x => <SearchElement key={x._id} {...x}/>)}
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
              
                {data.length === 0 && (<p className="no-result">No result.</p>)}
            
        </section>
    );
};