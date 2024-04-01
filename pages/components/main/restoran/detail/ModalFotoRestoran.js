/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const ModalFotoRestoran = (props) => {
  const { showModal, setShowModal, data } = props;
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  let fotoRestoran = [];

  fotoRestoran = fotoRestoran.concat(data.fotoRestoran);
  let imageUlasan = data.ulasanCustomer.map((item) => item.imageUlasan);
  imageUlasan.forEach((images) => {
    fotoRestoran = fotoRestoran.concat(images);
  });

  const handleCloseModal = () => {
    setShowModal(!showModal);
    setSelectedImageIndex(null);
  };

  const handleOpenDetail = (index) => {
    setSelectedImageIndex(index);
    setShowModalDetail(!showModalDetail);
  };

  const handleCloseDetail = () => {
    setSelectedImageIndex(null);
    setShowModalDetail(false);
    setShowModal(false);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? fotoRestoran.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === fotoRestoran.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    console.log("showModalDetail", showModalDetail);
  }, [showModalDetail]);

  return (
    <>
      <div className="h-full w-full fixed left-0 top-0 flex flex-col justify-center items-center bg-black bg-opacity-70 z-20">
        <div className="w-[90%] xl:w-1/2 bg-white rounded-[2vw] sm:rounded-lg shadow-lg max-h-[48rem] overflow-hidden">
          <div className="p-[4vw] sm:p-4">
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
            <div className="w-full p-[4vw] sm:p-4">
              <h6 className="text-black font-semibold text-[4.5vw] sm:text-3xl text-center pb-[3vw] sm:pb-6">
                Foto Restoran {data.nama_resto}
              </h6>
              <div className="overflow-y-auto max-h-[34rem]">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {fotoRestoran.map((item, index) => (
                    <img
                      key={index}
                      src={item}
                      alt={`gambar-resto-${index + 1}`}
                      className={`w-full h-[25vw] sm:h-48 rounded-[2vw] sm:rounded-lg cursor-pointer`}
                      onClick={() => handleOpenDetail(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-mediumGray"></div>
          </div>
        </div>
      </div>

      {showModalDetail && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000000] z-50 overflow-y-hidden">
          <div
            className="flex justify-end absolute top-6 right-6"
            onClick={handleCloseDetail}
          >
            <div className="w-[6vw] h-[6vw] sm:w-11 sm:h-11 border-white border-2 rounded-full flex justify-center items-center cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col text-white">
            <button className="text-white text-xl" onClick={handlePrevImage}>
              {"<"}
            </button>
          </div>
          <div className="relative">
            <div className="bg-black p-4">
              <p className="text-center text-white">1/2</p>
            </div>

            <img
              src={fotoRestoran[selectedImageIndex]}
              alt={`detail-gambar-resto-${selectedImageIndex + 1}`}
              className="w-full h-[38rem]"
            />
          </div>
          <div className="flex flex-col text-white">
            <button className="atext-white text-xl" onClick={handleNextImage}>
              {">"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalFotoRestoran;
