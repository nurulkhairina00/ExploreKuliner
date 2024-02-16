/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import ModalFotoRestoran from "./ModalFotoRestoran";

const FotoRestoran = (props) => {
  const { data } = props;
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(!showModal);

  return (
    <div className="flex w-full pb-[3vw] md:pb-5">
      {data?.fotoRestoran?.length > 0 ? (
        <>
          <div className="w-4/6 xl:w-3/4 h-[40vw] md:h-60 lg:h-96 rounded-lg shadow-lg me-[2vw] sm:me-3 lg:mx-4">
            <img
              src={data.fotoRestoran[0].image}
              alt="image"
              className="w-full h-full object-cover rounded-[2vw] sm:rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/3 xl:w-1/4 flex flex-col gap-[1.5vw] sm:gap=2 lg:gap-4">
            <img
              src={data.fotoRestoran[1].image}
              alt="image"
              className="w-full object-cover h-[19.3vw] md:h-[112px] lg:h-[184px] rounded-[2vw] sm:rounded-lg shadow-lg"
            />

            <div className="relative h-[19.3vw] md:h-[112px] lg:h-[184px]">
              <img
                src={data.fotoRestoran[2].image}
                alt="image"
                className="w-full h-full object-cover rounded-[2vw] sm:rounded-lg shadow-lg"
              />
              <div className="absolute bottom-[1vw] right-[1vw] md:bottom-2 md:right-2 lg:bottom-3 lg:right-3">
                <button
                  className="bg-white text-black text-[1.7vw] px-[2vw] py-[0.7vw] md:text-[8px] md:px-2 md:py-1 lg:text-xs lg:px-4 lg:py-2 rounded-full font-semibold"
                  onClick={handleOpenModal}
                >
                  Lihat Semua Foto
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      {showModal && (
        <ModalFotoRestoran
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

export default FotoRestoran;
