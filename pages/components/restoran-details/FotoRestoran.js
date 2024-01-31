/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import ModalFotoRestoran from "./ModalFotoRestoran";

const FotoRestoran = (props) => {
  const { data } = props;
  const [showModal, setShowModal] = useState(false);
  console.log(data);
  const handleOpenModal = () => setShowModal(!showModal);

  return (
    <div className="flex w-full pb-5">
      {data?.fotoRestoran?.length > 0 ? (
        <>
          <div className="w-3/4 h-96 rounded-lg shadow-lg mx-4">
            <img
              src={data.fotoRestoran[0].image}
              alt="image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/4 flex flex-col gap-4">
            <img
              src={data.fotoRestoran[1].image}
              alt="image"
              className="h-[184px] w-full object-cover rounded-lg shadow-lg"
            />

            <div className="relative h-[184px]">
              <img
                src={data.fotoRestoran[2].image}
                alt="image"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-3 right-3">
                <button
                  className="bg-white text-black text-xs px-4 py-2 rounded-full font-semibold"
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
          showModal={showModal}
          setShowModal={setShowModal}
          data={data}
        />
      )}
    </div>
  );
};

export default FotoRestoran;
