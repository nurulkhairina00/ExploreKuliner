/* eslint-disable @next/next/no-img-element */
import React from "react";

const FotoRestoran = () => {
  return (
    <div className="flex w-full pb-5">
      <div className="w-3/4 h-96 rounded-lg shadow-lg mx-4">
        <img
          src="/images/bg-register.jpg"
          alt="image"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-1/4 flex flex-col gap-4">
        <img
          src="/images/bg-login.jpg"
          alt="image"
          className="h-[184px] w-full object-cover rounded-lg shadow-lg"
        />

        <div className="relative h-[184px]">
          <img
            src="/images/kategori.jpg"
            alt="image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-3 right-3">
            <button className="bg-white text-black text-xs px-4 py-2 rounded-full font-semibold">
              Lihat Semua Foto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FotoRestoran;
