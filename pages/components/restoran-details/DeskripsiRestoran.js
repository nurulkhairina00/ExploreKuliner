/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Rating from "../layout/Rating";
import ModalUlasan from "./ModalUlasan";

const DeskripsiRestoran = (props) => {
  const { data } = props;
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(!showModal);

  return (
    <div className="w-3/4 ms-4 me-8">
      <div className="pb-8">
        <h3 className="text-2xl font-semibold text-black pb-3">
          {data.nama_resto}
        </h3>
        <div className="flex">
          <Rating initialRating={data.rating} />
          <p className="text-secondary text-sm font-semibold ms-3">
            ({data.ulasan})
          </p>
        </div>
        <p className="text-black text-base font-medium pt-4">Jenis Makanan</p>
        <p className="text-secondary text-sm">{data.jenis_makanan}</p>

        <div className="flex py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="me-2"
          >
            <path
              fill="#3B7850"
              d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"
            />
          </svg>
          <p className="text-black text-sm justify-center items-center">
            Sabtu : 10.00 - 22.00 Wib
          </p>
        </div>
      </div>

      <div className="pb-6 text-black">
        <p className="font-semibold text-3xl pb-4">Tentang</p>
        <p className="text-base text-justify">{data.deskripsi}</p>
      </div>

      <div className="flex bg-white rounded-lg shadow-lg py-4 px-8 my-6">
        <div className="w-1/2 my-auto">
          <h3 className="text-black text-3xl font-semibold">
            Yuk, memberi ulasan
          </h3>
          <p className="text-black text-base py-2">
            Tulis ulasan untuk restoran ini.
          </p>
          <button
            className="w-full px-4 py-2 bg-secondary text-primary text-base rounded-full mt-8"
            onClick={handleOpenModal}
          >
            Tulis Ulasan
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="/images/ulasan-rating.png"
            alt="ulasan-rating"
            width="60%"
            className="float-right"
          />
        </div>
      </div>

      {showModal && (
        <ModalUlasan
          showModal={showModal}
          setShowModal={setShowModal}
          data={data}
        />
      )}
    </div>
  );
};

export default DeskripsiRestoran;
