/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const ModalFotoRestoran = (props) => {
  const { showModal, setShowModal, data } = props;
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isOpenBottom, setisOpenBottom] = useState(true);

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

  const toggleIconBottom = () => {
    setisOpenBottom(!isOpenBottom);
  };

  return (
    <>
      <div className="h-svh w-full fixed left-0 top-0 flex flex-col justify-center items-center bg-black bg-opacity-70 z-20">
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
        <div className="fixed top-0 left-0 w-full h-screen bg-[#000000] z-50 flex flex-col">
          <div className="p-[6vw] sm:p-8 ">
            <svg
              width="5vw"
              height="5vw"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-6 sm:h-6 absolute top-[4vw] sm:top-6 right-[4vw] sm:right-6"
              onClick={handleCloseDetail}
            >
              <path
                d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex justify-center w-[5vw] sm:w-10 lg:w-14 xl:w-24">
              <button onClick={handlePrevImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4vw"
                  height="4vw"
                  viewBox="0 0 20 20"
                  className="sm:w-6 sm:h-6"
                >
                  <path fill="white" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z" />
                </svg>
              </button>
            </div>
            <div className="relative w-full xl:w-1/2 flex">
              <div className="w-full bg-white">
                <div className="bg-black p-[2vw] sm:p-4">
                  <p className="text-center text-white  text-[3.5vw] sm:text-lg">
                    {selectedImageIndex + 1} / {fotoRestoran.length}
                  </p>
                </div>
                <img
                  src={fotoRestoran[selectedImageIndex]}
                  alt={`detail-gambar-resto-${selectedImageIndex + 1}`}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
            </div>
            <div className="flex justify-center w-[5vw] sm:w-10 lg:w-14 xl:w-24">
              <button onClick={handleNextImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4vw"
                  height="4vw"
                  viewBox="0 0 20 20"
                  className="sm:w-6 sm:h-6"
                >
                  <path
                    fill="white"
                    d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {isOpenBottom && (
            <div className="relative">
              <div className="h-40 bg-white bottom-0"></div>
              <div
                className="absolute top-10 right-3"
                onClick={toggleIconBottom}
              >
                <svg
                  width="5vw"
                  height="5vw"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-6 sm:h-6 cursor-pointer"
                >
                  <path
                    d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ModalFotoRestoran;
