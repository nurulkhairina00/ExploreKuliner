/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Rating from "../../Rating";
import Pagination from "./PaginationUlasan";

const TabUlasan = (props) => {
  const { data } = props;
  const [showReply, setShowReply] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = data?.ulasanCustomer?.slice(startIndex, endIndex);

  const handlePageChange = (page) => setCurrentPage(page);

  const handleOpenBalas = (index) => {
    setShowReply((prevState) => ({
      ...Object.fromEntries(Object.keys(prevState).map((key) => [key, false])),
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="my-[5vw] sm:my-10 py-[8vw] sm:py-8 px-[2vw] sm:px-4 bg-white rounded-[2vw] sm:rounded-lg shadow-lg">
      <h6 className="text-[4vw] sm:text-2xl text-black font-bold">
        Review {data.nama_resto}
      </h6>
      <div className="flex items-center gap-3">
        <h4 className="text-[8vw] sm:text-5xl font-bold text-black py-[2vw] sm:py-6">
          {data.rating}
        </h4>
        <div className="py-[2vw] sm:py-6 items-center">
          <Rating initialRating={data.rating} display="none" />
          <p className="text-black text-[3.5vw] sm:text-lg">{data.ulasan}</p>
        </div>
      </div>
      {displayedData.map((item, index) => (
        <div key={index}>
          <div className="w-full flex p-[4vw] sm:p-4">
            <div className="w-[16%] xl:w-[10%]">
              <img
                src={item.image}
                alt="foto-profile"
                className="w-[9vw] h-[9vw] md:w-16 md:h-16 rounded-full object-cover mr-10"
              />
            </div>
            <div className="w-[84%] lg:w-[90%]">
              <h3 className="text-black text-[3.5vw] sm:text-base font-semibold">
                {item.nama}
              </h3>
              <Rating initialRating={item.rating} />
              <p className="text-[3.5vw] sm:text-base text-black text-justify sm:py-1">
                {item.komentar}
              </p>
              <small className="text-[3vw] sm:text-sm text-gray text-justify">
                Pesanan : {item.pesanan}
              </small>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4vw"
                      height="4vw"
                      viewBox="0 0 24 24"
                      className="sm:w-[20px] sm:h-[20px]"
                    >
                      <path
                        fill="none"
                        stroke="#8F8F9D"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1za4 4 0 0 0 4-4V6a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1-2 2h-7a3 3 0 0 1-3-3"
                      />
                    </svg>
                    <span className="text-[3.5vw] sm:text-base text-black">
                      {item.bagus}
                    </span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4vw"
                      height="4vw"
                      viewBox="0 0 24 24"
                      className="sm:w-[20px] sm:h-[20px]"
                    >
                      <path
                        fill="none"
                        stroke="#8F8F9D"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 13V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1za4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2-2l-1-5a2 3 0 0 0-2-2h-7a3 3 0 0 0-3 3"
                      />
                    </svg>
                    <span className="text-[3.5vw] sm:text-base text-black">
                      {item.buruk}
                    </span>
                  </button>
                  <button
                    className="ms-[1.5vw] sm:ms-3 text-[3.5vw] sm:text-base text-black font-medium"
                    onClick={() => handleOpenBalas(index)}
                  >
                    {showReply[index] ? "Tutup" : "Balas"}
                  </button>
                </div>
              </div>
              {showReply[index] && (
                <div className="w-full pt-4 relative">
                  <textarea
                    name="ulasan"
                    id="ulasan"
                    cols="30"
                    rows="4"
                    placeholder="Berikan komentar anda"
                    className="w-full rounded-[2vw] sm:rounded-lg p-[3vw] sm:p-4 text-[3.5vw] sm:text-base"
                  ></textarea>
                  <button className="px-[4vw] py-[1vw] sm:px-6 sm:py-2 text-[3.5vw] sm:text-base rounded-full shadow-lg bg-secondary text-white absolute bottom-5 right-5">
                    Kirim
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="border-t-2 border-mediumGray"></div>
        </div>
      ))}
      <Pagination
        totalItems={data?.ulasanCustomer?.length || 0}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TabUlasan;
