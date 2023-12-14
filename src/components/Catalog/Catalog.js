import './Catalog.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import CatalogPots from './CatalogPosts';
// import { CatalogItem } from './CatalogItem/CatalogItem';
// import { useContext, useState, useEffect } from "react";
// import { BikeContext, useBikeContext } from "../../contexts/BikeCntext";


export default function Catalog() {
    // const [currentPage, setCurrentPage] = useState(2); // Set the initial current page
    const totalPages = 5; // Set the total number of pages
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
      // Add logic to update your data or perform other actions based on the new page
    };
  
    const [bikes, setBikes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(2);
    // const itemsPerPage = 2; // You can adjust this based on your preference

    useEffect(() => {
        // Fetch data from your API
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:3030/data/bikes");
            setBikes(res.data);
          
        }
        fetchPosts()
    }, []);

    // // Get currnet bikes
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPOst = indexOfLastPost - postPerPage;
    const currentPosts = bikes.slice(indexOfFirstPOst, indexOfLastPost);

    // // Change page
    // const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    return (
        <div className="cycle_section layout_padding" id="body-bg">
            <CatalogPots bikes={currentPosts}/>
                <Pagination
  currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}
                    // changeCurrentPage={handlePageChange}
                    // numberOfPagesNextToActivePage={2}
                    // theme="bootstrap"
                />
                
        </div>
    );
}