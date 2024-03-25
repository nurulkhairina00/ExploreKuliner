/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import moment from "moment";
import Pagination from "../restoran/detail/PaginationMenu";

const ArtikelPublish = (props) => {
  const { ListArtikel } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = ListArtikel.slice(startIndex, endIndex);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div className="py-[2vw] sm:py-2">
        <div className="flex pb-[2vw] sm:pb-4">
          <div className="border-l-[2vw] sm:border-l-8 border-secondary me-[2vw] sm:me-2"></div>
          <p className="text-[4vw] sm:text-2xl font-semibold my-1">
            Artikel Publish
          </p>
        </div>
        <hr className="border-mediumGray border-dashed border-[1px]" />
      </div>
      <div className="w-full sm:px-4 relative py-[4vw] sm:py-4">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-[5vw] sm:gap-4 cursor-pointer">
          {displayedData?.map((item) => (
            <Link href={`/artikel/detail/${item.id}`} key={item.id}>
              <div className="flex flex-row shadow-md hover:shadow-xl rounded-[2vw] sm:rounded-lg">
                <div className="w-1/3 relative shadow-lg rounded-[2vw] sm:rounded-lg">
                  <img
                    src={item.image}
                    alt={item.judul.split(" ").join("-")}
                    className="rounded-sm object-cover w-full h-full -z-10"
                  />
                </div>
                <div className="w-2/3 p-[2vw] sm:px-4 sm:py-2">
                  <p className="text-gray font-medium text-[3.5vw] sm:text-sm">
                    {item.kategori}
                  </p>
                  <h6 className="text-black font-semibold pb-[2vw] text-[3.5vw] sm:pb-2 sm:text-base lg:text-lg">
                    {item.judul}
                  </h6>
                  <p className="text-[3vw] sm:text-xs font-semibold sm:mb-1">
                    {moment(item.publish_date).format("DD MMMM YYYY")}
                  </p>
                  <p className="text-gray text-[3.5vw] sm:text-xs lg:text-sm line-clamp-2">
                    {item.deskripsi}
                  </p>
                  <p className="text-black font-medium text-[3vw] pt-[3vw] sm:text-sm sm:pt-5">
                    By {item.author}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {ListArtikel.length > itemsPerPage && (
          <Pagination
            totalItems={ListArtikel?.length || 0}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};

export default ArtikelPublish;
