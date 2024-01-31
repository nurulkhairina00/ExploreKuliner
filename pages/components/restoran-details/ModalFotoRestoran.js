/* eslint-disable @next/next/no-img-element */
import React from "react";

const ModalFotoRestoran = (props) => {
  const { showModal, setShowModal, data } = props;

  const handleCloseModal = () => setShowModal(!showModal);

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 z-10 overflow-y-auto">
      <div className="w-1/2 bg-white rounded-lg shadow-lg">
        <div className="p-4">
          <div className="flex justify-end pb-3" onClick={handleCloseModal}>
            <div className="w-[6vw] h-[6vw] sm:w-11 sm:h-11 border-gray border-2 rounded-full flex justify-center items-center cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                  fill="#8F8F9D"
                />
              </svg>
            </div>
          </div>
          <div className="border-t border-mediumGray"></div>
          <div className="w-full p-4">
            <h6 className="text-black font-semibold text-3xl text-center pb-3">
              Foto Restoran {data.nama_resto}
            </h6>
            {data.fotoRestoran.map((item, index) => (
              <div className="flex" key={index}>
                <img
                  src={item.image}
                  alt={`gambar-resto-${index + 1}`}
                  className="w-1/3 h-56 rounded-[2vw] sm:rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="border-t border-mediumGray"></div>
        </div>
      </div>
    </div>
  );
};

export default ModalFotoRestoran;
