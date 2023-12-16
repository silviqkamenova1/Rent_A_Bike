import './Catalog.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import CatalogPots from './CatalogPosts';


export default function Catalog() {

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const [bikes, setBikes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(2);
    const totalPages = Math.ceil(bikes.length / postPerPage); // Set the total number of pages

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:3030/data/bikes");
            setBikes(res.data);

        };
        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPOst = indexOfLastPost - postPerPage;
    const currentPosts = bikes.slice(indexOfFirstPOst, indexOfLastPost);

    return (
        <div className="cycle_section layout_padding" id="body-bg">
            <CatalogPots bikes={currentPosts} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}