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
    <nav className="w-full bg-white fixed shadow-md p-[5vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:py-7 z-10">
      <div className="flex justify-between">
        <Link href="/">
          <h6 className=" text-[4vw] sm:text-xl text-secondary font-bold cursor-pointer">
            ExploreKuliner
          </h6>
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
          showModal={showModal}
          setShowModal={setShowModal}
          type={type}
        />
      )}
    </nav>
  );
};

export default Navbar;
