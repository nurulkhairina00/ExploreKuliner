import React, { useState, useEffect } from "react";
import axios from "axios";

const FilterRestoranMobile = () => {
  const [open, setOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedDistance, setSelectedDistance] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedOther, setSelectedOther] = useState([]);
  const [category, setCategory] = useState([]);

  const rentangPrice = [
    { id: "$", label: "Dibawah Rp. 20.000" },
    { id: "$$", label: "Rp. 20.000 sampai Rp.40.000" },
    { id: "$$$", label: "Rp. 40.000 sampai Rp.100.000" },
    { id: "$$$$", label: "Diatas Rp.100.000" },
  ];

  const otherOption = [
    { id: "bukasekarang", label: "Buka Sekarang" },
    { id: "pickup", label: "Pickup Only" },
  ];

  const handleOpen = () => setOpen(!open);

  const handleRating = (rating) => setSelectedRating(rating);

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
    if (selectedOther.includes(other)) {
      setSelectedOther(selectedOther.filter((item) => item !== other));
    } else {
      setSelectedOther([...selectedOther, other]);
    }
  };

  const handleClose = () => {
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

  const getCategory = async () => {
    await axios
      .get(`/data/exploreKuliner.json`)
      .then((res) => {
        setCategory(res.data.kategori);
      })
      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <section className="flex px-[8vw] pb-[4vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-4 sm:pt-0 xl:hidden relative">
      <div className="w-full px-0 sm:px-4">
        <button
          className="items-center border-gray border-[1px] px-[3vw] py-[0.2vw] sm:px-4 sm:py-[2px] text-[2.5vw] sm:text-sm rounded-full text-black"
          onClick={handleOpen}
        >
          <div className="flex gap-[1vw] sm:gap-1 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3.5vw"
              height="3.5vw"
              viewBox="0 0 24 24"
              className="sm:w-5 sm:h-5"
            >
              <g fill="none" stroke="#333333" strokeLinecap="round">
                <path d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9" />
                <circle cx="5" cy="14" r="2" />
                <circle cx="12" cy="9" r="2" />
                <circle cx="19" cy="15" r="2" />
              </g>
            </svg>
            <span className="text-[3vw] sm:text-base">Filter</span>
          </div>
        </button>

        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-20">
            <div
              className={`xl:hidden  absolute w-2/3 sm:w-1/2 h-screen p-[6vw] sm:p-6 bg-white z-10 top-0 duration-300 overflow-auto ${
                open ? "left-0" : "left-[-100%]"
              } `}
            >
              <div className="flex justify-between items-center pb-3 gap-7 text-[4vw] sm:text-lg">
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
                <div className="flex flex-wrap gap-[2vw] sm:gap-3">
                  {["Semua", 1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      className={`flex items-center border-gray border-[1px] px-[2.5vw] py-[0.5vw] sm:px-4 sm:py-1 text-[2.5vw] sm:text-base rounded-full ${
                        selectedRating === rating ? "bg-black text-white" : ""
                      }`}
                      onClick={() => handleRating(rating)}
                    >
                      {rating !== "Semua" && (
                        <svg
                          width="3vw"
                          height="3vw"
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sm:w-4 sm:h-4"
                        >
                          <path
                            d="M6.82502 1.67301C6.8938 1.56285 6.99232 1.47145 7.11076 1.40793C7.2292 1.3444 7.36342 1.31097 7.50002 1.31097C7.63662 1.31097 7.77084 1.3444 7.88928 1.40793C8.00772 1.47145 8.10624 1.56285 8.17502 1.67301L9.9219 4.47184L13.3144 5.15784C13.4478 5.18491 13.5714 5.24415 13.6726 5.32966C13.7739 5.41516 13.8494 5.52395 13.8916 5.64517C13.9337 5.7664 13.9411 5.89582 13.913 6.02055C13.8849 6.14527 13.8222 6.26094 13.7313 6.35601L11.4188 8.77159L11.7688 11.9945C11.7826 12.1214 11.7605 12.2495 11.7047 12.3659C11.6489 12.4824 11.5613 12.5831 11.4507 12.6581C11.3402 12.7331 11.2104 12.7797 11.0745 12.7932C10.9387 12.8068 10.8013 12.7868 10.6763 12.7353L7.50002 11.4287L4.32377 12.7353C4.19872 12.7868 4.06139 12.8068 3.92549 12.7932C3.7896 12.7797 3.65989 12.7331 3.54932 12.6581C3.43875 12.5831 3.35119 12.4824 3.29538 12.3659C3.23957 12.2495 3.21746 12.1214 3.23127 11.9945L3.58127 8.77159L1.26877 6.35659C1.17766 6.26153 1.11487 6.14582 1.08665 6.02101C1.05844 5.89621 1.0658 5.76669 1.10799 5.64537C1.15018 5.52405 1.22572 5.41518 1.32709 5.32964C1.42845 5.24409 1.55209 5.18485 1.68565 5.15784L5.07815 4.47184L6.82502 1.67301Z"
                            fill="#FFA011"
                          />
                        </svg>
                      )}
                      <span
                        className={`${
                          rating !== "Semua" && "ms-[1vw] sm:ms-2"
                        }`}
                      >
                        {rating}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Jarak */}
              <hr className="text-gray" />
              <div className="py-[4vw] sm:py-6">
                <p className="text-gray text-[3vw] sm:text-base font-semibold pb-[3vw] sm:pb-4">
                  Jarak
                </p>
                <div className="flex flex-wrap gap-[2vw] sm:gap-3">
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
                      className={`border-gray border-[1px] px-[2.5vw] py-[0.5vw] sm:px-4 sm:py-1 text-[2.5vw] sm:text-base rounded-full ${
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
                  Kategori
                </p>
                {category.map((kategori) => (
                  <div
                    className="flex items-center pb-[2vw] sm:pb-3"
                    key={kategori.id}
                  >
                    <input
                      type="checkbox"
                      id={kategori.nama}
                      name={kategori.nama}
                      value={kategori.nama}
                      className="rounded-3 me-[2vw] sm:me-2 w-[3vw] h-[3vw] sm:w-4 sm:h-4"
                      checked={selectedCategory.includes(kategori.nama)}
                      onChange={() => handleCategory(kategori.nama)}
                    />
                    <label
                      htmlFor={kategori.nama}
                      className="text-[2.5vw] sm:text-base"
                    >
                      {kategori.nama}
                    </label>
                  </div>
                ))}
              </div>

              {/* Rentang Harga */}
              <hr className="text-gray" />
              <div className="py-[4vw] sm:py-6">
                <p className="text-gray text-[3vw] sm:text-base font-semibold pb-[3vw] sm:pb-4">
                  Rentang Harga
                </p>
                {rentangPrice.map((price) => (
                  <div
                    className="flex items-center pb-[2vw] sm:pb-3"
                    key={price.id}
                  >
                    <input
                      type="checkbox"
                      id={price.id}
                      name={price.id}
                      value={price.id}
                      className="rounded-3 me-[2vw] sm:me-2 w-[3vw] h-[3vw] sm:w-4 sm:h-4"
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
              <div className="pt-[4vw] py-[12vw] sm:pt-6 sm:py-14">
                <p className="text-gray text-[3vw] sm:text-base font-semibold pb-[3vw] sm:pb-4">
                  Lainnya
                </p>
                {otherOption.map((other) => (
                  <div
                    key={other.id}
                    className="flex items-center pb-[2vw] sm:pb-3"
                  >
                    <input
                      type="checkbox"
                      id={other.id}
                      name={other.id}
                      value={other.id}
                      className="rounded-3 me-[2vw] sm:me-2 w-[3vw] h-[3vw] sm:w-4 sm:h-4"
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
              <div className="flex items-center justify-center gap-[2vw] sm:gap-4 fixed bottom-0 left-0 w-2/3 sm:w-1/2 p-[6vw] sm:p-6 bg-white">
                <button
                  className="w-1/3 py-[0.5vw] sm:py-1 rounded-full text-secondary border-secondary border-[0.5vw] sm:border-2 text-[3vw] sm:text-base"
                  onClick={handleClose}
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
