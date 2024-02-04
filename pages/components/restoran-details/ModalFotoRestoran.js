/* eslint-disable @next/next/no-img-element */
import React from "react";

const ModalFotoRestoran = (props) => {
  const { showModal, setShowModal, data } = props;

  const handleCloseModal = () => setShowModal(!showModal);

  return (
    <div className="h-full w-full fixed left-0 top-0 flex flex-col justify-center items-center bg-black bg-opacity-70 z-10">
      <div className="w-[90%] xl:w-1/2 bg-white rounded-[2vw] sm:rounded-lg shadow-lg h-[90%] overflow-hidden">
        <div className="p-[3vw] sm:p-4">
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
          <div className="w-full p-[2vw] sm:p-4">
            <h6 className="text-black font-semibold text-[4.5vw] sm:text-3xl text-center pb-[3vw] sm:pb-6">
              Foto Restoran {data.nama_resto}
            </h6>
            <div className="h-full overflow-y-auto max-h-[38rem]">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data.fotoRestoran.map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    alt={`gambar-resto-${index + 1}`}
                    className="w-full h-[25vw] sm:h-48 rounded-[2vw] sm:rounded-lg cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-mediumGray"></div>
        </div>
      </div>
    </div>
  );
};

export default ModalFotoRestoran;
