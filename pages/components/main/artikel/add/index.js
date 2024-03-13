/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const index = () => {
  const [listJenis, setListJenis] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const animatedComponents = makeAnimated();

  const getListArea = async () => {
    await axios
      .get(`/data/exploreKuliner.json`)
      .then((res) => {
        setListJenis(res.data.jenis_artikel);
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  useEffect(() => {
    getListArea();
  }, []);

  return (
    <section className="flex justify-center items-center px-[8vw] pb-[8vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-10 sm:pt-0">
      <div className="w-full lg:w-3/4 rounded-[2vw] sm:rounded-lg shadow-lg p-[4vw] sm:p-8">
        <p className="text-[4vw] sm:text-2xl font-semibold my-[3vw] sm:my-6">
          Tambah Artikel
        </p>
        <form action="">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-[48%] pb-[2vw] sm:pb-4">
              <label
                htmlFor="judul"
                className="text-[3vw] sm:text-lg font-normal"
              >
                Judul Artikel <span className="text-red">*</span>
              </label>
              <input
                type="text"
                name="judul"
                placeholder="Judul"
                className="w-full mt-[1vw] sm:mt-2 py-[0.8vw] px-[3vw] sm:px-3 sm:py-2 rounded-[1vw] sm:rounded-md bg-primary outline outline-mediumGray focus:outline-secondary outline-2 text-[3vw] sm:text-base"
                required
              />
            </div>
            <div className="w-full md:w-[48%] pb-[2vw] sm:pb-4">
              <label
                htmlFor="deskripsi"
                className="text-[3vw] sm:text-lg font-normal"
              >
                Deskripsi
              </label>
              <input
                type="text"
                name="deskripsi"
                placeholder="Deskripsi"
                className="w-full mt-[1vw] sm:mt-2 py-[0.8vw] px-[3vw] sm:px-3 sm:py-2 rounded-[1vw] sm:rounded-md bg-primary outline outline-mediumGray focus:outline-secondary outline-2 text-[3vw] sm:text-base"
                required
              />
            </div>
            <div className="w-full md:w-[48%] pb-[2vw] sm:pb-4">
              <div className="pb-[1vw] sm:pb-2">
                <label
                  htmlFor="jenis_artikel"
                  className="text-[3vw] sm:text-lg font-normal"
                >
                  Jenis Artikel <span className="text-red">*</span>
                </label>
              </div>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={listJenis.map((item) => ({
                  label: item.nama,
                  value: item.nama,
                }))}
                className="text-[3vw] sm:text-base"
              />
            </div>
            <div className="w-full md:w-[48%] pb-[2vw] sm:pb-4 flex flex-col">
              <label
                htmlFor="image"
                className="text-[3vw] sm:text-lg font-normal"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full mt-[1vw] sm:mt-2 py-[0.8vw] px-[3vw] sm:px-3 sm:py-2 rounded-[1vw] sm:rounded-md bg-primary outline outline-mediumGray focus:outline-secondary outline-2 text-[3vw] sm:text-base"
                required
              />
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="mt-[2vw] w-[50%] sm:mt-3 object-cover rounded-md"
                />
              )}
            </div>
            <div className="w-full md:w-[48%] pb-[2vw] sm:pb-4">
              <label
                htmlFor="tag"
                className="text-[3vw] sm:text-lg font-normal"
              >
                Tag <span className="text-red">*</span>
              </label>
              <input
                type="text"
                name="tag"
                placeholder="Tag"
                className="w-full mt-[1vw] sm:mt-2 py-[0.8vw] px-[3vw] sm:px-3 sm:py-2 rounded-[1vw] sm:rounded-md bg-primary outline outline-mediumGray focus:outline-secondary outline-2 text-[3vw] sm:text-base"
                required
              />
            </div>
            <div className="w-full md:w-[48%] pb-[2vw] sm:pb-4">
              <label
                htmlFor="author"
                className="text-[3vw] sm:text-lg font-normal"
              >
                Author
              </label>
              <input
                type="text"
                name="author"
                placeholder="Author"
                className="w-full mt-[1vw] sm:mt-2 py-[0.8vw] px-[3vw] sm:px-3 sm:py-2 rounded-[1vw] sm:rounded-md bg-primary outline outline-mediumGray focus:outline-secondary outline-2 text-[3vw] sm:text-base"
                required
              />
            </div>
            <div className="w-full pb-[2vw] sm:pb-4">
              <label
                htmlFor="content"
                className="text-[3vw] sm:text-lg font-normal"
              >
                Content
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[4vw] sm:gap-6">
            <button className="px-[6vw] sm:px-8 py-[1.3vw] sm:py-2 rounded-[2vw] sm:rounded-lg text-[3vw] sm:text-base text-secondary outline outline-2 my-[3vw] sm:my-4">
              Draft
            </button>
            <button className="bg-secondary px-[6vw] sm:px-8 py-[1.3vw] sm:py-2 rounded-[2vw] sm:rounded-lg text-[3vw] sm:text-base text-primary my-[3vw] sm:my-4">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default index;
