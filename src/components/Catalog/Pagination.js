
export default function Pagination ({ currentPage, totalPages, onPageChange }) {
    const renderPageItems = () => {
      const pageItems = [];
  
      for (let i = 1; i <= totalPages; i++) {
        const isActive = i === currentPage;
        const pageItemClass = isActive ? 'page-item active' : 'page-item';
  
        pageItems.push(
          <li key={i} className={pageItemClass}>
            {isActive ? (
              <span className="page-link">{i}</span>
            ) : (
              <a href="#" className="page-link" onClick={() => onPageChange(i)}>
                {i}
              </a>
            )}
          </li>
        );
      }
  
      return pageItems;
    };
  
    return (
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item ">
            <span className="page-link" onClick={() => onPageChange(currentPage - 1)}>Previous</span>
          </li>
          {renderPageItems()}
          <li className="page-item">
            <a href="#" className="page-link" onClick={() => onPageChange(currentPage + 1)}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  };
// export default function Pagination({
//     bikesPerPage,
//     totalBikes,
//     setCurrentPage,
//     currentPage
// }) {

//     const pageNumbers = [];
//     for(let i = 1; i <= Math.ceil(totalBikes / bikesPerPage); i++){
//         pageNumbers.push(i)
//     }
//     return(
       
//             <div className="pagi-nation">
//                 {pageNumbers.map((page, index) => {
//                     return <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? 'active' : ''}>{page}</button>
//                 })}
//             </div>
      
//     )
// }