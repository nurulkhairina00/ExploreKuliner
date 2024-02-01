/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import axios from "axios";
import FotoRestoran from "./FotoRestoran";
import DeskripsiRestoran from "./DeskripsiRestoran";
import LokasiRestoran from "./LokasiRestoran";
import TabMenu from "./TabMenu";
import TabUlasan from "./TabUlasan";
import RestoranTerdekat from "./RestoranTerdekat";

const TentangRestoran = () => {
  const [data, setData] = useState({});
  const [activeTab, setActiveTab] = useState("menu");

  const getDetailRestoran = async () => {
    await axios
      .get(`/data/exploreKuliner.json`)
      .then((res) => {
        setData(res.data.detailRestoran);
      })
      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    getDetailRestoran();
  }, []);

  return (
    <section className="flex flex-col p-[5vw] pt-[25vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-10 sm:pt-36">
      <FotoRestoran data={data} />
      <div className="flex flex-col lg:flex-row w-full pt-[2vw] sm:pt-5">
        <DeskripsiRestoran data={data} />
        <LokasiRestoran data={data} />
      </div>
      <div className="flex flex-col lg:flex-row w-full pt-[10vw] sm:pt-5">
        <div className="w-full lg:w-4/6 xl:w-3/4 lg:ms-4 lg:me-8">
          <div className="flex mb-4">
            <button
              id="menu"
              className={`p-[2vw] sm:px-4 sm:py-2 rounded-s-[2vw] sm:rounded-s-lg w-full font-semibold text-[3vw] sm:text-xl ${
                activeTab === "menu"
                  ? "bg-secondary text-primary"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab("menu")}
            >
              Menu
            </button>
            <button
              id="ulasan"
              className={`p-[2vw] sm:px-4 sm:py-2 rounded-e-[2vw] sm:rounded-e-lg w-full font-semibold text-[3vw] sm:text-xl ${
                activeTab === "ulasan"
                  ? "bg-secondary text-primary"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab("ulasan")}
            >
              Ulasan
            </button>
          </div>
          {activeTab === "menu" ? (
            <TabMenu data={data} />
          ) : (
            <TabUlasan data={data} />
          )}
        </div>
        <div className="w-full lg:w-1/3 xl:w-1/4 mt-4 lg:mt-0">
          <RestoranTerdekat />
        </div>
      </div>
    </section>
  );
};

export default TentangRestoran;
