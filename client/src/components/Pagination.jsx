import React from "react";

function Pagination({ totalPosts, postPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-around flex-wrap" >
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(page);
            }}
            className={page == currentPage ? `font-bold border border-black bg-[#474bff] text-white m-4 font-inherit cursor-pointer flex items-center justify-center h-10 py-2 px-4 text-lg uppercase rounded-lg transition-all hover:bg-white hover:text-[#474bff] ` : `m-4 border-white border font-inherit cursor-pointer flex items-center justify-center h-10 py-2 px-4 font-medium text-lg uppercase rounded-lg transition-all hover:bg-white hover:text-black`}>
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
