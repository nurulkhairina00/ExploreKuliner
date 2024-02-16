import React from "react";

const Pagination = () => {
  return (
    <div className="flex pt-[8vw] sm:pt-10 gap-[2vw] sm:gap-3 justify-center">
      <button className="p-[2vw] text-[4vw] rounded-[1.5vw] sm:p-2 sm:text-lg sm:rounded-lg text-black font-semibold bg-mediumGray">
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
      <button className="p-[2vw] text-[4vw] rounded-[1.5vw] sm:p-2 sm:text-lg sm:rounded-lg text-black font-semibold bg-mediumGray">
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
      <button className="px-[3vw] text-[3.5vw] rounded-[1.5vw] sm:px-4 sm:py-1 sm:text-lg sm:rounded-lg text-white font-semibold bg-secondary">
        1
      </button>
      <button className="px-[3vw] text-[3.5vw] rounded-[1.5vw] sm:px-3 sm:py-1 sm:text-lg sm:rounded-lg text-secondary font-semibold border-secondary border-[0.5vw] sm:border-2">
        2
      </button>
      ...
      <button className="px-[3vw] text-[3.5vw] rounded-[1.5vw] sm:px-3 sm:py-1 sm:text-lg sm:rounded-lg text-secondary font-semibold border-secondary border-[0.5vw] sm:border-2">
        5
      </button>
      <button className="p-[2vw] text-[3.5vw] rounded-[1.5vw] sm:p-2 sm:text-lg sm:rounded-lg text-black font-semibold bg-secondary">
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
      <button className="p-[2vw] text-[4vw] rounded-[1.5vw] sm:p-2 sm:text-lg sm:rounded-lg text-black font-semibold bg-secondary">
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
