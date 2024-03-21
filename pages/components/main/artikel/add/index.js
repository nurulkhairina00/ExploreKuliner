/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import TinyEditor from "./TinyEditor";
import Swal from "sweetalert2";

const index = () => {
  const animatedComponents = makeAnimated();
  const [listJenis, setListJenis] = useState([]);
  const [selectedJenis, setSelectedJenis] = useState([]);
  const [input, setInput] = useState({
    judul: "",
    deskripsi: "",
    jenis_artikel: "",
    image: "",
    imagePreview: "",
    content: "",
    tag: "",
    author: "",
    status: false,
  });

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

  const handleInputChange = (value, name) => {
    setInput({ ...input, [name]: value });
  };

  const handleJenisChange = (selectedOptions) => {
    setSelectedJenis(selectedOptions);
  };

  const handleEditorChange = (newValue) => {
    setInput({ ...input, content: newValue });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file.size > 5242880) {
      Swal.fire({
        title: "Info",
        text: "Ukuran file harus kurang dari 5MB",
        icon: "info",
        showConfirmButton: false,
        timer: 3000,
      });
      return false;
    }

    if (!isFileImage(file)) {
      Swal.fire({
        title: "Info",
        text: "Jenis file harus berupa Image",
        icon: "info",
        showConfirmButton: false,
        timer: 3000,
      });
      return false;
    }

    setInput({
      ...input,
      image: file,
      imagePreview: URL.createObjectURL(file),
    });
  };

  const isFileImage = (file) => {
    return file && file["type"].split("/")[0] === "image";
  };

  const toggleSwitch = () => {
    setInput({ ...input, status: !input.status });
  };

  useEffect(() => {
    getListArea();
  }, []);

  useEffect(() => {
    setInput({
      ...input,
      jenis_artikel: selectedJenis.map((option) => option.value).join(", "),
    });
  }, [selectedJenis]);

  return (
    <section className="flex justify-center items-center px-[8vw] pb-[8vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-10 sm:pt-0">
      <div className="w-full lg:w-3/4 rounded-[2vw] sm:rounded-lg shadow-lg p-[4vw] sm:p-8">
        <p className="text-[4vw] sm:text-2xl font-semibold my-[3vw] sm:my-6">
          Tambah Artikel
        </p>
        <form action="">
          <div className="flex flex-wrap">
            <div className="w-full pb-[2vw] sm:pb-4">
              <label
                htmlFor="judul"
                className="text-[3.5vw] sm:text-lg font-normal"
              >
                Judul Artikel <span className="text-red">*</span>
              </label>
              <input
                type="text"
                name="judul"
                placeholder="Judul"
                className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:px-3 sm:py-2 rounded-[2vw] sm:rounded-md text-[3.5vw] sm:text-base bg-primary border-mediumGray border-2 focus:border-none"
                onChange={(e) => handleInputChange(e.target.value, "judul")}
              />
            </div>
            <div className="w-full pb-[2vw] sm:pb-4">
              <label
                htmlFor="deskripsi"
                className="text-[3.5vw] sm:text-lg font-normal"
              >
                Deskripsi <span className="text-red">*</span>
              </label>
              <input
                type="text"
                name="deskripsi"
                placeholder="Deskripsi"
                className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:px-3 sm:py-2 rounded-[2vw] sm:rounded-md text-[3.5vw] sm:text-base bg-primary border-mediumGray border-2 focus:border-none"
                onChange={(e) => handleInputChange(e.target.value, "deskripsi")}
              />
            </div>
            <div className="w-full pb-[2vw] sm:pb-4">
              <div className="pb-[1vw] sm:pb-2">
                <label
                  htmlFor="jenis_artikel"
                  className="text-[3.5vw] sm:text-lg font-normal"
                >
                  Jenis Artikel <span className="text-red">*</span>
                </label>
              </div>
              <Select
                className="text-[3.5vw] sm:text-base z-10"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={listJenis.map((item) => ({
                  label: item.nama,
                  value: item.nama,
                }))}
                onChange={handleJenisChange}
              />
            </div>
            <div className="w-full pb-[2vw] sm:pb-4 flex flex-col">
              <label
                htmlFor="image"
                className="text-[3.5vw] sm:text-lg font-normal"
              >
                Image <span className="text-red">*</span>
              </label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:px-3 sm:py-2 rounded-[1vw] sm:rounded-md text-[3.5vw] sm:text-base bg-primary border-mediumGray border-2 focus:border-none"
              />
              {input.imagePreview && (
                <img
                  src={input.imagePreview}
                  alt="Preview"
                  className="mt-[2vw] w-[50%] sm:mt-3 object-cover rounded-md"
                />
              )}
            </div>
            <div className="w-full pb-[2vw] sm:pb-4">
              <div className="pb-[1vw] sm:pb-2">
                <label
                  htmlFor="content"
                  className="text-[3.5vw] sm:text-lg font-normal"
                >
                  Content <span className="text-red">*</span>
                </label>
              </div>
              <TinyEditor
                editorValue={input.content}
                handleEditorChange={handleEditorChange}
              />
            </div>
            <div className="w-full pb-[2vw] sm:pb-4">
              <label
                htmlFor="tag"
                className="text-[3.5vw] sm:text-lg font-normal"
              >
                Tag <span className="text-red">*</span>
              </label>
              <input
                type="text"
                name="tag"
                placeholder="Tag"
                className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:px-3 sm:py-2 rounded-[2vw] sm:rounded-md text-[3.5vw] sm:text-base bg-primary border-mediumGray border-2 focus:border-none"
                onChange={(e) => handleInputChange(e.target.value, "tag")}
              />
            </div>
            <div className="w-full pb-[2vw] sm:pb-4">
              <label
                htmlFor="author"
                className="text-[3.5vw] sm:text-lg font-normal"
              >
                Author <span className="text-red">*</span>
              </label>
              <input
                type="text"
                name="author"
                placeholder="Author"
                className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:px-3 sm:py-2 rounded-[2vw] sm:rounded-md text-[3.5vw] sm:text-base bg-primary border-mediumGray border-2 focus:border-none"
                onChange={(e) => handleInputChange(e.target.value, "author")}
              />
            </div>
            <div className="w-full md:w-[48%] pb-[2vw] sm:pb-4">
              <p className="text-[3.5vw] sm:text-lg font-normal pb-[1vw] sm:pb-2">
                Status
              </p>
              <div className="flex items-center">
                <div
                  onClick={toggleSwitch}
                  className={`relative h-[4vw] sm:h-6 w-[8vw] sm:w-12 flex items-center justify-center rounded-full focus:outline-none transition-colors duration-300 ${
                    input.status ? "bg-secondary" : "bg-gray"
                  }`}
                >
                  <span
                    className={`absolute left-0 ${
                      input.status ? "ml-[4vw] sm:ml-6" : "ml-0"
                    } w-[4vw] sm:w-6 h-[4vw] sm:h-6 bg-white rounded-full shadow-md transform transition-transform duration-300`}
                  />
                </div>
                <span
                  className={`ml-2 text-[3.5vw] sm:text-lg ${
                    input.status ? "text-secondary" : "text-black"
                  }`}
                >
                  {input.status ? "Aktif" : "Tidak Aktif"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[4vw] sm:gap-6 pt-[3vw] sm:pt-8">
            <button className="px-[6vw] sm:px-8 py-[1.3vw] sm:py-2 rounded-[2vw] sm:rounded-lg text-[3.5vw] sm:text-base text-secondary border-[0.5vw] sm:border-2 my-[3vw] sm:my-4">
              Draft
            </button>
            <button className="bg-secondary px-[6vw] sm:px-8 py-[1.3vw] sm:py-2 rounded-[2vw] sm:rounded-lg text-[3.5vw] sm:text-base text-primary my-[3vw] sm:my-4">
              Publish
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default index;
