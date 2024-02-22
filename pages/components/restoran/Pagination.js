import React from "react";

const Pagination = (props) => {
  const { totalItems, itemsPerPage, currentPage, onPageChange } = props;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;

    let startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
    let endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

    if (endPage - startPage + 1 < maxPageButtons)
      startPage = Math.max(endPage - maxPageButtons + 1, 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-[3vw] py-[0.5vw] text-[3.5vw] rounded-[1.5vw] sm:px-4 sm:py-1 sm:text-lg sm:rounded-lg ${
            currentPage === i
              ? "text-white bg-secondary"
              : "text-secondary border-[0.5vw] sm:border-2"
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="w-full bg-white p-[4vw] sm:p-4 rounded-lg absolute bottom-0 inset-x-0 flex justify-between items-center">
      <button
        className={`px-[3vw] py-[1vw] text-[3vw] sm:px-6 sm:py-2 sm:text-lg rounded-[2vw] sm:rounded-lg hidden sm:block ${
          currentPage === 1
            ? "border-secondary text-secondary border-[0.3vw] sm:border-2"
            : "bg-secondary text-primary"
        }`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Sebelumnya
      </button>
      <button
        className={`text-[3.5vw] rounded-[1.5vw] sm:hidden  ${
          currentPage === 1
            ? "border-secondary text-secondary border-[0.5vw] sm:border-2 px-[1.6vw] py-[1.1vw]"
            : "bg-secondary text-primary px-[2vw] py-[1.6vw]"
        }`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4vw"
          height="4vw"
          viewBox="0 0 24 24"
          className="sm:w-[24px] sm:h-[24px]"
        >
          <path
            fill="none"
            stroke={`${currentPage === 1 ? "#3B7850" : "#ffffff"}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m14 7l-5 5l5 5"
          />
        </svg>
      </button>
      <div className="flex gap-[2vw] sm:gap-3">{renderPageNumbers()}</div>
      <button
        className={`px-[3vw] py-[1vw] text-[3vw] rounded-[2vw] sm:px-6 sm:py-2 sm:text-lg sm:rounded-lg hidden sm:block ${
          currentPage === totalPages
            ? "border-secondary text-secondary border-[0.3vw] sm:border-2"
            : "bg-secondary text-primary"
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Selanjutnya
      </button>
      <button
        className={`text-[3.5vw] rounded-[1.5vw] sm:hidden ${
          currentPage === totalPages
            ? "border-secondary text-secondary border-[0.5vw] sm:border-2 px-[1.6vw] py-[1.1vw]"
            : "bg-secondary text-primary px-[2vw] py-[1.6vw]"
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4vw"
          height="4vw"
          viewBox="0 0 24 24"
          className="sm:w-[24px] sm:h-[24px]"
        >
          <path
            fill="none"
            stroke={`${currentPage === totalPages ? "#3B7850" : "#ffffff"}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m10 17l5-5l-5-5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
