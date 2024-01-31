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
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getDetailRestoran();
  }, []);

  return (
    <section className="flex flex-col p-[5vw] pt-[30vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-10 sm:pt-36">
      <FotoRestoran data={data} />
      <div className="flex w-full pt-5">
        <DeskripsiRestoran data={data} />
        <LokasiRestoran data={data} />
      </div>
      <div className="flex w-full pt-5">
        <div className="w-3/4 ms-4 me-8">
          <div className="flex mb-4">
            <button
              id="menu"
              className={`px-4 py-2  rounded-s-lg w-full font-semibold ${
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
              className={` px-4 py-2  rounded-e-lg w-full font-semibold ${
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
        <div className="w-1/4">
          <RestoranTerdekat />
        </div>
      </div>
    </section>
  );
};

export default TentangRestoran;
