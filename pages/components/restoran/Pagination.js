import React from "react";

const Pagination = () => {
  return (
    <div className="w-full bg-white p-[4vw] sm:p-4 rounded-lg absolute bottom-0 inset-x-0 flex justify-between items-center">
      <button className="px-[3vw] py-[1vw] text-[4vw] sm:px-6 sm:py-2 border-secondary border-[0.3vw] sm:border-2 text-secondary sm:text-lg rounded-xl">
        Sebelumnya
      </button>
      <div className="flex gap-3">
        <button className="px-[2vw] py-[1vw] text-[4vw] rounded-[1.5vw] sm:px-4 sm:py-2 sm:text-lg sm:rounded-lg text-black font-semibold ">
          1
        </button>
        <button className="px-[2vw] py-[1vw] text-[4vw] rounded-[1.5vw] sm:px-4 sm:py-2 sm:text-lg sm:rounded-lg text-black font-semibold ">
          2
        </button>
        <button className="px-[2vw] py-[1vw] text-[4vw] rounded-[1.5vw] sm:px-4 sm:py-2 sm:text-lg sm:rounded-lg text-black font-semibold ">
          3
        </button>
      </div>
      <button className="px-[3vw] py-[1vw] text-[4vw] sm:px-6 sm:py-2 bg-secondary text-primary sm:text-lg rounded-xl">
        Selanjutnya
      </button>
    </div>
  );
};

export default Pagination;
