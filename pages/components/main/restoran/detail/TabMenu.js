/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Pagination from "./PaginationMenu";

const TabMenu = (props) => {
  const { data } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = data?.menu?.slice(startIndex, endIndex);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="my-[5vw] sm:my-10 py-[8vw] sm:py-8 px-[2vw] sm:px-4 bg-white rounded-[2vw] sm:rounded-lg shadow-lg">
      <div className="flex justify-between items-center pb-[5vw] sm:pb-10">
        <h6 className="text-[4vw] sm:text-2xl text-black font-bold">
          Menu {data.nama_resto}
        </h6>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3vw"
            height="3vw"
            viewBox="0 0 24 24"
            className="sm:w-[16px] sm:h-[16px] mr-[0.5vw] sm:mr-1"
          >
            <path
              fill="#d86141"
              fillRule="evenodd"
              d="M12 1.25a.75.75 0 0 1 .75.75v10.973l1.68-1.961a.75.75 0 1 1 1.14.976l-3 3.5a.75.75 0 0 1-1.14 0l-3-3.5a.75.75 0 1 1 1.14-.976l1.68 1.96V2a.75.75 0 0 1 .75-.75M6.996 8.252a.75.75 0 0 1 .008 1.5c-1.093.006-1.868.034-2.457.142c-.566.105-.895.272-1.138.515c-.277.277-.457.666-.556 1.4c-.101.755-.103 1.756-.103 3.191v1c0 1.436.002 2.437.103 3.192c.099.734.28 1.122.556 1.4c.277.276.665.456 1.4.555c.754.102 1.756.103 3.191.103h8c1.435 0 2.436-.001 3.192-.103c.734-.099 1.122-.279 1.399-.556c.277-.277.457-.665.556-1.399c.101-.755.103-1.756.103-3.192v-1c0-1.435-.002-2.436-.103-3.192c-.099-.733-.28-1.122-.556-1.399c-.244-.243-.572-.41-1.138-.515c-.589-.108-1.364-.136-2.457-.142a.75.75 0 1 1 .008-1.5c1.082.006 1.983.032 2.72.167c.758.14 1.403.405 1.928.93c.602.601.86 1.36.982 2.26c.116.866.116 1.969.116 3.336v1.11c0 1.368 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26c-.602.602-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-8.11c-1.367 0-2.47 0-3.337-.116c-.9-.121-1.658-.38-2.26-.982c-.602-.602-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-1.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.525-.524 1.17-.79 1.928-.929c.737-.135 1.638-.161 2.72-.167"
              clipRule="evenodd"
            />
          </svg>
          <a
            href=""
            className="text-secondary text-[3vw] sm:text-base font-semibold"
          >
            Download Menu
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3vw] sm:gap-4 cursor-pointer overflow-y-auto">
        {displayedData?.map((item, index) => (
          <div
            className="flex flex-row rounded-[2vw] sm:rounded-lg border-[0.5vw] sm:border-2"
            key={index}
          >
            <div className="w-2/3 p-[2vw] sm:p-2 xl:p-4">
              <p className="text-black text-[3.5vw] sm:text-base font-semibold sm:pb-1">
                {item.nama_menu}
              </p>
              <p className="text-secondary text-[3.5vw] sm:text-base font-semibold">
                Rp. {item.harga}
              </p>
            </div>
            <div className="w-1/3 p-[2vw] sm:p-2 xl:p-4">
              <img
                src={item.image}
                alt={item.nama_menu.split(" ").join("-")}
                className="rounded-[2vw] sm:rounded-lg object-cover w-full h-[20vw] sm:h-28 -z-10"
              />
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalItems={data?.menu?.length || 0}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TabMenu;
