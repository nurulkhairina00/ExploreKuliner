/* eslint-disable @next/next/no-img-element */
import React from "react";
import { kategoriRestoran } from "../../public/data";
import Rating from "./rating";

const HasilFilter = () => {
  return (
    <div className=" w-3/4 px-4 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {kategoriRestoran.map((item) => (
          <div className="flex flex-row shadow-lg rounded-lg" key={item.id}>
            <div className="w-1/3 relative shadow-lg rounded-lg">
              <img
                src={item.image}
                alt={item.nama_resto.split(" ").join("-")}
                className="rounded-sm object-cover w-full h-full -z-10"
              />
            </div>
            <div className="w-2/3 px-4 py-2">
              <p className="text-black text-sm font-semibold pb-1">
                {item.nama_resto}
              </p>
              <div className="flex">
                <Rating initialRating={item.rating} />
              </div>
              <p className="text-black text-xs font-semibold py-2">
                Asia Indonesia
              </p>
              <p className="text-secondary text-xs font-bold ">Restoran Buka</p>
              <p className="text-gray text-xs font-semibold py-1">
                Sampai 22.00 WIB
              </p>
              <div className="flex pt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3%"
                  viewBox="0 0 384 512"
                  className="sm:w-[10px] me-2 my-auto"
                >
                  <path
                    fill="#3B7850"
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  />
                </svg>
                <p className="text-black text-[3vw] sm:text-xs lg:text-xs">
                  {item.alamat}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-white p-5 rounded-lg absolute bottom-0 inset-x-0 flex justify-between items-center">
        <button className="px-6 py-2 border-secondary border-2 text-secondary text-lg rounded-xl">
          Sebelumnya
        </button>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-lg rounded-lg text-black font-semibold">
            1
          </button>
          <button className="px-4 py-2 text-lg rounded-lg text-black font-semibold">
            2
          </button>
          <button className="px-4 py-2 text-lg rounded-lg text-black font-semibold">
            3
          </button>
          <button className="px-4 py-2 text-lg rounded-lg text-black font-semibold">
            4
          </button>
          <button className="px-4 py-2 text-lg rounded-lg text-black font-semibold">
            5
          </button>
        </div>
        <button className="px-6 py-2 bg-secondary text-primary text-lg rounded-xl">
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default HasilFilter;
