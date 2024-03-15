import React, { useState, useEffect } from "react";
import axios from "axios";

const FilterRestoranMobile = () => {
  const [open, setOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedDistance, setSelectedDistance] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedOther, setSelectedOther] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [showPrice, setShowPrice] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const listPrice = [
    { id: "$", label: "Dibawah Rp. 20.000" },
    { id: "$$", label: "Rp. 20.000 sampai Rp.40.000" },
    { id: "$$$", label: "Rp. 40.000 sampai Rp.100.000" },
    { id: "$$$$", label: "Diatas Rp.100.000" },
  ];

  const otherOption = [
    { id: "dinein", label: "Dine In" },
    { id: "pickup", label: "Pickup Only" },
  ];

  const getCategory = async () => {
    await axios
      .get(`/data/exploreKuliner.json`)
      .then((res) => {
        setListCategory(res.data.kategori);
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleOpenFilter = () => setOpen(!open);

  const handleOpenPrice = () => {
    setShowCategory(false);
    setShowPrice(!showPrice);
  };

  const handleOpenCategory = () => {
    setShowPrice(false);
    setShowCategory(!showCategory);
  };

  const handleRating = (rating) => {
    setShowCategory(false);
    setShowPrice(false);
    setSelectedRating(rating);
  };

  const handleDistance = (distance) => setSelectedDistance(distance);

  const handleCategory = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((item) => item !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  const handlePrice = (price) => {
    if (selectedPrice.includes(price)) {
      setSelectedPrice(selectedPrice.filter((item) => item !== price));
    } else {
      setSelectedPrice([...selectedPrice, price]);
    }
  };

  const handleOther = (other) => {
    setShowCategory(false);
    setShowPrice(false);
    if (selectedOther.includes(other)) {
      setSelectedOther(selectedOther.filter((item) => item !== other));
    } else {
      setSelectedOther([...selectedOther, other]);
    }
  };

  const handleCloseFilter = () => {
    setSelectedRating(null);
    setSelectedDistance(null);
    setSelectedCategory([]);
    setSelectedPrice([]);
    setSelectedOther([]);
    setOpen(!open);
  };

  const handleSubmit = () => {
    setOpen(!open);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <section className="flex px-[8vw] py-[2vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-8 sm:pt-2 xl:hidden relative">
      <div
        className="w-full px-0 sm:px-4 overflow-x-auto overflow-y-hidden"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex flex-row gap-[1.5vw] sm:gap-2 mb-[24vw] sm:mb-48">
          <div className="text-black">
            <button
              className={`items-center border-gray border-[1px] px-[3vw] py-[0.2vw] sm:px-4 sm:py-[3px] text-[2.5vw] sm:text-sm rounded-full ${
                selectedRating !== null ||
                selectedDistance !== null ||
                selectedCategory.length > 0 ||
                selectedPrice.length > 0 ||
                selectedOther.length > 0
                  ? "bg-black text-white"
                  : ""
              }`}
              onClick={handleOpenFilter}
            >
              <div className="flex gap-[1vw] sm:gap-1 justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3vw"
                  height="3vw"
                  viewBox="0 0 24 24"
                  className="sm:w-5 sm:h-5"
                >
                  <g
                    fill="none"
                    stroke={
                      selectedRating !== null ||
                      selectedDistance !== null ||
                      selectedCategory.length > 0 ||
                      selectedPrice.length > 0 ||
                      selectedOther.length > 0
                        ? "white"
                        : "black"
                    }
                    strokeLinecap="round"
                  >
                    <path d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9" />
                    <circle cx="5" cy="14" r="2" />
                    <circle cx="12" cy="9" r="2" />
                    <circle cx="19" cy="15" r="2" />
                  </g>
                </svg>
                <span className="text-[3vw] sm:text-base">Filter</span>
              </div>
            </button>
          </div>
          <div className="text-black">
            <button
              className={` items-center border-gray border-[1px] px-[3vw] py-[0.2vw] sm:px-4 sm:py-[3px] text-[3vw] sm:text-base rounded-full whitespace-nowrap 
            ${
              selectedRating?.includes("Bintang 4.5")
                ? "bg-black text-white"
                : ""
            }
            `}
              onClick={() => handleRating("Bintang 4.5")}
            >
              Bintang 4.5
            </button>
          </div>
          <div className="relative inline-block">
            <button
              className={`items-center border-gray border-[1px] px-[3vw] py-[0.2vw] sm:px-4 sm:py-[3px] text-[2.5vw] sm:text-sm rounded-full text-black 4 whitespace-nowrap ${
                selectedCategory.length > 0 ? "bg-black text-white" : ""
              }`}
              onClick={handleOpenCategory}
            >
              <div className="flex justify-between items-center space-x-[2vw] sm:space-x-6">
                <span className="text-[3vw] sm:text-base">Kategori Resto</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3vw"
                  height="3vw"
                  viewBox="0 0 24 24"
                  className="sm:w-5 sm:h-5"
                >
                  <path
                    fill="none"
                    stroke={selectedCategory.length > 0 ? "white" : "black"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m7 10l5 5l5-5"
                  />
                </svg>
              </div>
            </button>
            {showCategory && (
              <div className="bg-white overflow-y-auto rounded p-[2vw] sm:p-4 absolute mt-[1vw] top-[100%] sm:mt-2 h-[22vw] sm:max-h-48 w-full z-10">
                {listCategory.map((category) => (
                  <div
                    className="flex items-center pb-[2vw] sm:pb-3 space-x-[1vw] sm:space-x-2"
                    key={category.id}
                  >
                    <input
                      type="checkbox"
                      id={category.id}
                      name={category.id}
                      value={category.id}
                      className="rounded w-[2vw] h-[2vw] sm:w-3 sm:h-3"
                      checked={selectedCategory.includes(category.nama)}
                      onChange={() => handleCategory(category.nama)}
                    />
                    <label
                      htmlFor={category.id}
                      className="text-[3vw] sm:text-base"
                    >
                      {category.nama}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative inline-block">
            <button
              className={`items-center border-gray border-[1px] px-[3vw] py-[0.2vw] sm:px-4 sm:py-[3px] rounded-full text-black whitespace-nowrap ${
                selectedPrice.length > 0 ? "bg-black text-white" : ""
              }`}
              onClick={handleOpenPrice}
            >
              <div
                className={`flex justify-between items-center  ${
                  showPrice
                    ? "space-x-[18vw] sm:space-x-28"
                    : "space-x-[2vw] sm:space-x-6"
                }`}
              >
                <span className="text-[3vw] sm:text-base">Rentang Harga</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3vw"
                  height="3vw"
                  viewBox="0 0 24 24"
                  className="sm:w-5 sm:h-5"
                >
                  <path
                    fill="none"
                    stroke={selectedPrice.length > 0 ? "white" : "black"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m7 10l5 5l5-5"
                  />
                </svg>
              </div>
            </button>
            {showPrice && (
              <div className="bg-white overflow-y-auto rounded p-[2vw] sm:p-4 absolute mt-[1vw] sm:mt-2 h-[22vw] sm:max-h-48 z-10">
                {listPrice.map((price) => (
                  <div
                    className="flex items-center pb-[2vw] sm:pb-3 space-x-[1vw] sm:space-x-2"
                    key={price.id}
                  >
                    <input
                      type="checkbox"
                      id={price.id}
                      name={price.id}
                      value={price.id}
                      className="rounded w-[2vw] h-[2vw] sm:w-3 sm:h-3"
                      checked={selectedPrice.includes(price.id)}
                      onChange={() => handlePrice(price.id)}
                    />
                    <label
                      htmlFor={price.id}
                      className="text-[3vw] sm:text-base"
                    >
                      {price.label}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="text-black">
            <button
              className={`items-center border-gray border-[1px] px-[3vw] py-[0.2vw] sm:px-4 sm:py-[3px] text-[3vw] sm:text-base rounded-full whitespace-nowrap ${
                selectedOther.includes("dinein") ? "bg-black text-white" : ""
              }`}
              onClick={() => handleOther("dinein")}
            >
              Dine In
            </button>
          </div>
          <div className="text-black">
            <button
              className={`items-center border-gray border-[1px] px-[3vw] py-[0.2vw] sm:px-4 sm:py-[3px] text-[3vw] sm:text-base rounded-full ${
                selectedOther.includes("pickup") ? "bg-black text-white" : ""
              }`}
              onClick={() => handleOther("pickup")}
            >
              Pickup
            </button>
          </div>
        </div>

        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-20">
            <div
              className={`xl:hidden  absolute w-2/3 sm:w-1/2 h-screen p-[6vw] sm:p-6 bg-white z-10 top-0 duration-300 overflow-auto ${
                open ? "left-0" : "left-[-100%]"
              } `}
            >
              <div className="flex justify-between items-center pb-[2vw] sm:pb-3 gap-7 text-[4vw] sm:text-lg">
                <h6 className="text-black text-[4vw] sm:text-lg font-medium">
                  Filter
                </h6>
              </div>

              {/* Rating Resto */}
              <hr className="text-gray" />
              <div className="py-[4vw] sm:py-6">
                <p className="text-gray text-[3vw] sm:text-base font-semibold pb-[3vw] sm:pb-4">
                  Rating Resto
                </p>
                <div className="grid grid-cols-2 gap-[2vw] sm:gap-3">
                  {["Bintang 4", "Bintang 4.5"].map((rating) => (
                    <button
                      key={rating}
                      className={`border-gray border-[1px] px-[2.5vw] py-[0.5vw] sm:px-3 md:px-4 sm:py-1 text-[2.5vw] sm:text-sm md:text-base rounded-[1vw] ${
                        selectedRating === rating
                          ? "bg-black text-white"
                          : "text-black"
                      }`}
                      onClick={() => handleRating(rating)}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>

              {/* Jarak */}
              <hr className="text-gray" />
              <div className="py-[4vw] sm:py-6">
                <p className="text-gray text-[3vw] sm:text-base font-semibold pb-[3vw] sm:pb-4">
                  Jarak Resto
                </p>
                <div className="grid grid-cols-3 gap-[2vw] sm:gap-3">
                  {[
                    "Semua",
                    "0-3 km",
                    "3-5 km",
                    "5-10 km",
                    "10-15 km",
                    "> 15 km",
                  ].map((distance) => (
                    <button
                      key={distance}
                      className={`border-gray border-[1px] px-[2.5vw] py-[0.5vw] sm:px-3 md:px-4 sm:py-1 text-[2.5vw] sm:text-sm md:text-base rounded-[1vw] ${
                        selectedDistance === distance
                          ? "bg-black text-white"
                          : ""
                      }`}
                      onClick={() => handleDistance(distance)}
                    >
                      {distance}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category */}
              <hr className="text-gray" />
              <div className="py-[4vw] sm:py-6">
                <p className="text-gray text-[3vw] sm:text-base font-semibold pb-[3vw] sm:pb-4">
                  Kategori Resto
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-3">
                  {listCategory.map((category) => (
                    <div
                      className="flex items-center pb-[2vw] sm:pb-3 space-x-[1vw] sm:space-x-2"
                      key={category.id}
                    >
                      <input
                        type="checkbox"
                        id={category.nama}
                        name={category.nama}
                        value={category.nama}
                        className="rounded w-[3vw] h-[3vw] sm:w-4 sm:h-4"
                        checked={selectedCategory.includes(category.nama)}
                        onChange={() => handleCategory(category.nama)}
                      />
                      <label
                        htmlFor={category.nama}
                        className="text-[2.5vw] sm:text-base"
                      >
                        {category.nama}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rentang Harga */}
              <hr className="text-gray" />
              <div className="py-[4vw] sm:py-6">
                <p className="text-gray text-[3vw] sm:text-base font-semibold pb-[3vw] sm:pb-4">
                  Rentang Harga
                </p>
                {listPrice.map((price) => (
                  <div
                    className="flex items-center pb-[2vw] sm:pb-3 space-x-[1vw] sm:space-x-2"
                    key={price.id}
                  >
                    <input
                      type="checkbox"
                      id={price.id}
                      name={price.id}
                      value={price.id}
                      className="rounded w-[3vw] h-[3vw] sm:w-4 sm:h-4"
                      checked={selectedPrice.includes(price.id)}
                      onChange={() => handlePrice(price.id)}
                    />
                    <label
                      htmlFor={price.id}
                      className="text-[2.5vw] sm:text-base"
                    >
                      {price.label}
                    </label>
                  </div>
                ))}
              </div>

              {/* Lainnya */}
              <hr className="text-gray" />
              <div
                className="pt-[4vw] py-[28vw] sm:pt-6 sm:py-14
              "
              >
                <p className="text-gray text-[3vw] sm:text-base font-semibold pb-[3vw] sm:pb-4">
                  Lainnya
                </p>
                {otherOption.map((other) => (
                  <div
                    key={other.id}
                    className="flex items-center pb-[2vw] sm:pb-3 space-x-[1vw] sm:space-x-2"
                  >
                    <input
                      type="checkbox"
                      id={other.id}
                      name={other.id}
                      value={other.id}
                      className="rounded w-[3vw] h-[3vw] sm:w-4 sm:h-4"
                      checked={selectedOther.includes(other.id)}
                      onChange={() => handleOther(other.id)}
                    />
                    <label
                      htmlFor={other.id}
                      className="text-[2.5vw] sm:text-base"
                    >
                      {other.label}
                    </label>
                  </div>
                ))}
              </div>

              {/* Button Terapkan */}
              <div className="flex items-center justify-center gap-[2vw] sm:gap-4 fixed bottom-0 left-0 w-2/3 sm:w-1/2 px-[6vw] py-[4vw] sm:p-6 bg-white">
                <button
                  className="w-1/3 py-[0.5vw] sm:py-1 rounded-full text-secondary border-secondary border-[0.5vw] sm:border-2 text-[3vw] sm:text-base"
                  onClick={handleCloseFilter}
                >
                  Batal
                </button>
                <button
                  className="w-1/3 bg-secondary py-[1vw] sm:py-2 rounded-full text-primary text-[3vw] sm:text-base"
                  onClick={handleSubmit}
                >
                  Terapkan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterRestoranMobile;
