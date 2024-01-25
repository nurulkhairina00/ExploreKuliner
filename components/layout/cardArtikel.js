/* eslint-disable @next/next/no-img-element */
import React from "react";

const cardArtikel = (props) => {
  const { data } = props;

  return (
    <div className="text-black bg-white rounded-[2vw] sm:rounded-xl shadow-lg">
      <div className="relative overflow-hidden rounded-t-[2vw] rounded-b-none sm:rounded-t-lg sm:rounded-b-none">
        <img
          src={data.image}
          alt={data.judul.split(" ").join("-")}
          className="rounded-t-[2vw] rounded-b-none sm:rounded-t-lg sm:rounded-b-none relative transition-transform duration-300 hover:scale-110 ease-in-out"
        />
      </div>
      <div className="p-[2.5vw] sm:p-4">
        <p className="text-gray font-medium text-[3vw] sm:text-xs lg:text-sm">
          {data.kategori}
        </p>
        <h6 className="text-black font-semibold pb-[2vw] text-[3.5vw] sm:pb-2 sm:text-sm lg:text-base">
          {data.judul}
        </h6>
        <p className="text-gray text-[3vw] sm:text-[10px] lg:text-xs line-clamp-2">
          {data.deskripsi}
        </p>
        <p className="text-black font-medium text-xs pt-5">By {data.author}</p>
      </div>
    </div>
  );
};

export default cardArtikel;
