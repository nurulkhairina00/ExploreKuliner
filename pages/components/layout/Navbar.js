/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import ModalOption from "./ModalOption";
import Link from "next/link";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("");

  const handleOpenModal = (value) => {
    setType(value);
    setShowModal(!showModal);
  };

  return (
    <nav className="w-full bg-white fixed shadow-md p-[6vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:py-7 z-10">
      <div className="flex justify-between">
        <Link href="/">
          <img
            src="/logo/logo-explore-kuliner-v2.svg"
            alt="logo-explore-kuliner"
            className="w-[18vw] sm:w-24 cursor-pointer"
          />
        </Link>

        {/* Tampilan Masuk Tablet dan Desktop */}
        <div className="flex">
          {/* Daftar dan Masuk */}
          <button
            type="button"
            className="px-7 py-2 rounded-full bg-primary mx-2 hidden sm:block"
            onClick={() => handleOpenModal("daftar")}
          >
            <span className="text-secondary font-bold">Daftar</span>
          </button>

          <button
            type="button"
            className="px-7 py-[6px] rounded-full border-secondary border-2 mx-2 hidden sm:block"
            onClick={() => handleOpenModal("masuk")}
          >
            <span className="text-secondary font-bold">Masuk</span>
          </button>
        </div>
      </div>
      {showModal && (
        <ModalOption
          {...{
            showModal,
            setShowModal,
            type,
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
