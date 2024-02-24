import React from "react";

const Pagination = (props) => {
  const { totalItems, itemsPerPage, currentPage, onPageChange } = props;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevPage = () => onPageChange(currentPage - 1);

  const handleNextPage = () => onPageChange(currentPage + 1);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 3;

    let startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
    let endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

    if (endPage - startPage + 1 < maxPageButtons)
      startPage = Math.max(endPage - maxPageButtons + 1, 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-[3vw] text-[3.5vw] rounded-[1.5vw] sm:px-4 sm:py-1 sm:text-lg sm:rounded-lg ${
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
    <div className="flex pt-[8vw] sm:pt-10 gap-[2vw] sm:gap-3 justify-center">
      <button
        className={`p-[2vw] text-[4vw] rounded-[1.5vw] sm:p-2 sm:text-lg sm:rounded-lg text-black font-semibold ${
          currentPage === 1 ? "bg-mediumGray" : "bg-secondary"
        }`}
        onClick={() => onPageChange(1)}
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
            fill="#ffffff"
            d="m4.836 12l6.207 6.207l1.414-1.414L7.664 12l4.793-4.793l-1.414-1.414zm5.65 0l6.207 6.207l1.414-1.414L13.314 12l4.793-4.793l-1.414-1.414z"
          />
        </svg>
      </button>
      <button
        className={`p-[2vw] text-[4vw] rounded-[1.5vw] sm:p-2 sm:text-lg sm:rounded-lg text-black font-semibold ${
          currentPage === 1 ? "bg-mediumGray" : "bg-secondary"
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
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m14 7l-5 5l5 5"
          />
        </svg>
      </button>

      {renderPageNumbers()}

      <button
        className={`p-[2vw] text-[3.5vw] rounded-[1.5vw] sm:p-2 sm:text-lg sm:rounded-lg text-black font-semibold ${
          currentPage === totalPages ? "bg-mediumGray" : "bg-secondary"
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
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m10 17l5-5l-5-5"
          />
        </svg>
      </button>
      <button
        className={`p-[2vw] text-[4vw] rounded-[1.5vw] sm:p-2 sm:text-lg sm:rounded-lg text-black font-semibold ${
          currentPage === totalPages ? "bg-mediumGray" : "bg-secondary"
        }`}
        onClick={() => onPageChange(totalPages)}
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
            fill="#ffffff"
            d="m19.164 12l-6.207-6.207l-1.414 1.414L16.336 12l-4.793 4.793l1.414 1.414zm-5.65 0L7.307 5.793L5.893 7.207L10.686 12l-4.793 4.793l1.414 1.414z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
