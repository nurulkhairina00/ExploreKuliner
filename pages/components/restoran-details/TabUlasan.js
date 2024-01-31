/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Rating from "../layout/Rating";
import Pagination from "./Pagination";

const TabUlasan = (props) => {
  const { data } = props;
  const [showReply, setShowReply] = useState({});

  const handleOpenBalas = (index) => {
    setShowReply((prevState) => ({
      ...Object.fromEntries(Object.keys(prevState).map((key) => [key, false])),
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="my-10 py-8 px-4 bg-white rounded-lg shadow-lg">
      <h6 className="text-2xl text-black font-bold">
        Review {data.nama_resto}
      </h6>
      <div className="flex items-center gap-3">
        <h4 className="text-5xl font-bold text-black py-6">{data.rating}</h4>
        <div className="py-6 items-center">
          <Rating initialRating={data.rating} display="none" />
          <p className="text-black text-base">{data.ulasan}</p>
        </div>
      </div>
      {data.ulasanCustomer.map((item, index) => (
        <div key={index}>
          <div className="w-full flex p-4">
            <div className="w-[10%]">
              <img
                src={item.image}
                alt="foto-profile"
                className="w-16 h-16 rounded-full object-cover mr-10"
              />
            </div>
            <div className="w-[90%]">
              <h3 className="text-black text-base font-semibold">
                {item.nama}
              </h3>
              <Rating initialRating={item.rating} />
              <p className="text-sm text-black text-justify py-1">
                {item.komentar}
              </p>
              <small className="text-gray text-justify">
                Pesanan : {item.pesanan}
              </small>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
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
                    <span className="text-black">{item.bagus}</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
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
                    <span className="text-black">{item.buruk}</span>
                  </button>
                  <button
                    className="ms-3 text-black font-medium"
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
                    className="w-full rounded-lg p-4"
                  ></textarea>
                  <button className="px-6 py-2 text-base rounded-full shadow-lg bg-secondary text-white absolute bottom-5 right-5">
                    Kirim
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="border-t-2 border-mediumGray"></div>
        </div>
      ))}
      <Pagination />
    </div>
  );
};

export default TabUlasan;
