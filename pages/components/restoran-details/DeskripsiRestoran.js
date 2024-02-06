/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Rating from "../layout/Rating";
import ModalUlasan from "./ModalUlasan";

const DeskripsiRestoran = (props) => {
  const { data } = props;
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(!showModal);

  return (
    <div className="w-full lg:w-4/6 xl:w-3/4 lg:ms-4 lg:me-8">
      <div className="pb-[2vw] sm:pb-8">
        <h3 className="text-[5vw] sm:text-2xl font-semibold text-black sm:pb-3">
          {data.nama_resto}
        </h3>
        <div className="flex">
          <Rating initialRating={data.rating} />
          <p className="text-secondary text-[3vw] sm:text-sm font-semibold ms-[1vw] sm:ms-3">
            ({data.ulasan})
          </p>
        </div>
        <p className="text-black text-[3.5vw] sm:text-base font-medium pt-[2vw] sm:pt-4">
          Jenis Makanan
        </p>
        <p className="text-secondary text-[3vw] sm:text-sm">
          {data.jenis_makanan}
        </p>

        <div className="flex py-[2vw] sm:py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4vw"
            height="4vw"
            viewBox="0 0 24 24"
            className="sm:w-6 sm:h-6 mr-[1vw] sm:mr-2"
          >
            <path
              fill="#3B7850"
              d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"
            />
          </svg>
          <p className="text-black text-[3vw] sm:text-sm justify-center items-center">
            Sabtu : 10.00 - 22.00 Wib
          </p>
        </div>
      </div>

      <div className="pb-[2vw] sm:pb-6 text-black">
        <p className="font-semibold text-[6vw] sm:text-3xl pb-[2vw] sm:pb-4">
          Tentang
        </p>
        <p className="text-[3.5vw] sm:text-base text-justify">
          {data.deskripsi}
        </p>
      </div>

      <div className="flex bg-white rounded-lg shadow-lg py-[3vw] sm:py-4 px-[3vw] md:px-8 my-[4vw] md:my-6">
        <div className="w-1/2 my-auto">
          <h3 className="text-black text-[4vw] sm:text-2xl md:text-2xl xl:text-3xl font-semibold">
            Yuk, memberi ulasan
          </h3>
          <p className="text-black text-[3.5vw] sm:text-base sm:py-2">
            Tulis ulasan untuk restoran ini.
          </p>
          <button
            className="w-full p-[1vw] sm:px-4 sm:py-2 bg-secondary text-primary text-[3.5vw] sm:text-base rounded-full mt-[3vw] sm:mt-8"
            onClick={handleOpenModal}
          >
            Tulis Ulasan
          </button>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <img
            src="/images/ulasan-rating.png"
            alt="ulasan-rating"
            className="w-[40vw] md:w-[80%] lg:w-[60%]"
          />
        </div>
      </div>

      {showModal && (
        <ModalUlasan
          {...{
            showModal,
            setShowModal,
            data,
          }}
        />
      )}
    </div>
  );
};

export default DeskripsiRestoran;
