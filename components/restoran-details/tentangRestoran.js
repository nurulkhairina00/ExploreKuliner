/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import axios from "axios";
import FotoRestoran from "./fotoRestoran";
import DeskripsiRestoran from "./deskripsiRestoran";

const tentang = () => {
  const [data, setData] = useState({});

  const getDetailRestoran = async () => {
    await axios
      .get(`/data/exploreKuliner.json`)
      .then((res) => {
        console.log(res.data.detailRestoran);
        setData(res.data.detailRestoran);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getDetailRestoran();
  }, []);

  return (
    <section className="flex flex-col p-[5vw] pt-[30vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-10 sm:pt-36">
      <FotoRestoran />
      <DeskripsiRestoran data={data} />
      <div className="flex w-full pt-5">
        <div className="w-3/4 ms-4 me-8">
          <div className="flex mb-4">
            <button
              id="menu"
              className="bg-secondary px-4 py-2 text-primary rounded-s-lg w-full"
            >
              Menu
            </button>
            <button
              id="ulasan"
              className="bg-secondary px-4 py-2 text-primary rounded-e-lg w-full"
            >
              Ulasan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default tentang;
