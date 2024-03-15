/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Rating from "../Rating";
import Pagination from "./Pagination";

const HasilFilter = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const getRestoran = async () => {
    await axios
      .get(`/data/exploreKuliner.json`)
      .then((res) => {
        setData(res.data.restoran);
      })
      .catch((error) => {
        throw error;
      });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = data?.slice(startIndex, endIndex);

  const handlePageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    getRestoran();
  }, []);

  return (
    <div className="w-full xl:w-3/4 sm:px-4 relative pb-[20vw] sm:pb-28 mt-[-22vw] sm:mt-[-200px] xl:mt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5vw] sm:gap-4 cursor-pointer">
        {displayedData.map((item) => (
          <Link href={`/restoran/detail/${item.id}`} key={item.id}>
            <div className="flex flex-row shadow-md hover:shadow-xl rounded-[2vw] sm:rounded-lg">
              <div className="w-1/3 relative shadow-lg rounded-[2vw] sm:rounded-lg">
                <img
                  src={item.image}
                  alt={item.nama_resto.split(" ").join("-")}
                  className="rounded-sm object-cover  w-full h-full -z-10"
                />
              </div>
              <div className="w-2/3 p-[2vw] sm:px-4 sm:py-2">
                <p className="text-black text-[3.5vw] sm:text-base font-semibold sm:pb-1">
                  {item.nama_resto}
                </p>
                <div className="flex">
                  <Rating initialRating={item.rating} />
                </div>
                <p className="text-black text-[3vw] sm:text-sm font-semibold py-[1vw] sm:py-2">
                  Asia Indonesia
                </p>
                <p className="text-secondary text-[3vw] sm:text-sm font-bold ">
                  Restoran Buka
                </p>
                <p className="text-gray text-[3vw] sm:text-sm font-semibold sm:py-1">
                  Sampai 22.00 WIB
                </p>
                <div className="flex pt-[1vw] sm:pt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3%"
                    viewBox="0 0 384 512"
                    className="sm:w-[10px] me-2 my-auto"
                  >
                    <path
                      fill="#d86141"
                      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                    />
                  </svg>
                  <p className="text-black text-[3vw] sm:text-sm">
                    {item.alamat}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        totalItems={data?.length || 0}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HasilFilter;
