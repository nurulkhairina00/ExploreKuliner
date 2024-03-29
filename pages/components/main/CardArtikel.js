/* eslint-disable @next/next/no-img-element */
import React from "react";
import moment from "moment";
import Link from "next/link";

const CardArtikel = (props) => {
  const { data } = props;

  return (
    <Link href={`/artikel/detail/${data.id}`}>
      <div className="text-black bg-white rounded-[2vw] sm:rounded-xl shadow-lg cursor-pointer">
        <div className="relative overflow-hidden rounded-t-[2vw] rounded-b-none sm:rounded-t-lg sm:rounded-b-none">
          <img
            src={data.image}
            alt={data.judul.split(" ").join("-")}
            className="rounded-t-[2vw] w-full aspect-[16/10] rounded-b-none sm:rounded-t-lg sm:rounded-b-none relative transition-transform duration-300 hover:scale-110 ease-in-out"
          />
        </div>
        <div className="p-[4vw] sm:p-6">
          <p className="text-gray font-medium text-[3.5vw] sm:text-sm">
            {data.kategori}
          </p>
          <h6 className="text-black font-semibold pb-[2vw] text-[3.5vw] sm:pb-2 sm:text-base lg:text-lg">
            {data.judul}
          </h6>
          <p className="text-[3vw] sm:text-xs font-semibold sm:mb-1">
            {moment(data.publish_date).format("DD MMMM YYYY")}
          </p>
          <p className="text-gray text-[3.5vw] sm:text-xs lg:text-sm line-clamp-2">
            {data.deskripsi}
          </p>
          <p className="text-black font-medium text-[3vw] pt-[3vw] sm:text-sm sm:pt-5">
            By {data.author}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardArtikel;
