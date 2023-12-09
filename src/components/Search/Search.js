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
          <input type="search" name="search" id="search-input" onChange={(e) => setQuery(e.target.value)} />

        </form>
      </div>
      <h4>Results:</h4>
      <div className="search-result">
        {search(data).map(x => <SearchElement key={x._id} {...x} />)}

      </div>

      {search(data).length === 0 && (<p className="no-result">No result.</p>)}

    </section>
  );
};