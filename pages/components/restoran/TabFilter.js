import React, { useState, useEffect } from "react";
import axios from "axios";

const TabFilter = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedDistance, setSelectedDistance] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedOther, setSelectedOther] = useState([]);
  const [listCategory, setListCategory] = useState([]);

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

  const handleResetFilter = () => {
    setSelectedRating(null);
    setSelectedDistance(null);
    setSelectedCategory([]);
    setSelectedPrice([]);
    setSelectedOther([]);
  };

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

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="w-1/4 bg-white p-4 me-4 rounded-[2vw] sm:rounded-lg shadow-lg hidden xl:block relative">
      <div className="flex justify-between items-center pb-3">
        <h6 className="text-balck text-xl font-medium">Filter</h6>
        <p
          className="text-red text-sm font-semibold cursor-pointer"
          onClick={handleResetFilter}
        >
          Reset Filter
        </p>
      </div>

      {/* Rating Resto */}
      <hr className="text-gray" />
      <div className="py-6">
        <p className="text-gray text-base font-semibold pb-4">Rating Resto</p>
        <div className="flex flex-wrap gap-3">
          {["Semua", 1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              className={`flex items-center border-gray border-[1px] px-3 py-1 text-sm rounded-full ${
                selectedRating === rating ? "bg-black text-white" : ""
              }`}
              onClick={() => handleRating(rating)}
            >
              {rating !== "Semua" && (
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.82502 1.67301C6.8938 1.56285 6.99232 1.47145 7.11076 1.40793C7.2292 1.3444 7.36342 1.31097 7.50002 1.31097C7.63662 1.31097 7.77084 1.3444 7.88928 1.40793C8.00772 1.47145 8.10624 1.56285 8.17502 1.67301L9.9219 4.47184L13.3144 5.15784C13.4478 5.18491 13.5714 5.24415 13.6726 5.32966C13.7739 5.41516 13.8494 5.52395 13.8916 5.64517C13.9337 5.7664 13.9411 5.89582 13.913 6.02055C13.8849 6.14527 13.8222 6.26094 13.7313 6.35601L11.4188 8.77159L11.7688 11.9945C11.7826 12.1214 11.7605 12.2495 11.7047 12.3659C11.6489 12.4824 11.5613 12.5831 11.4507 12.6581C11.3402 12.7331 11.2104 12.7797 11.0745 12.7932C10.9387 12.8068 10.8013 12.7868 10.6763 12.7353L7.50002 11.4287L4.32377 12.7353C4.19872 12.7868 4.06139 12.8068 3.92549 12.7932C3.7896 12.7797 3.65989 12.7331 3.54932 12.6581C3.43875 12.5831 3.35119 12.4824 3.29538 12.3659C3.23957 12.2495 3.21746 12.1214 3.23127 11.9945L3.58127 8.77159L1.26877 6.35659C1.17766 6.26153 1.11487 6.14582 1.08665 6.02101C1.05844 5.89621 1.0658 5.76669 1.10799 5.64537C1.15018 5.52405 1.22572 5.41518 1.32709 5.32964C1.42845 5.24409 1.55209 5.18485 1.68565 5.15784L5.07815 4.47184L6.82502 1.67301Z"
                    fill="#FFA011"
                  />
                </svg>
              )}
              <span className={`${rating !== "Semua" && "ms-2"}`}>
                {rating}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Jarak */}
      <hr className="text-gray" />
      <div className="py-6">
        <p className="text-gray text-base font-semibold pb-4">Jarak</p>
        <div className="flex flex-wrap gap-3">
          {["Semua", "0-3 km", "3-5 km", "5-10 km", "10-15 km", "> 15 km"].map(
            (distance) => (
              <button
                key={distance}
                className={`border-gray border-[1px] px-3 py-1 text-sm rounded-full ${
                  selectedDistance === distance ? "bg-black text-white" : ""
                }`}
                onClick={() => handleDistance(distance)}
              >
                {distance}
              </button>
            )
          )}
        </div>
      </div>

      {/* Category */}
      <hr className="text-gray" />
      <div className="py-6">
        <p className="text-gray text-base font-semibold pb-4">Kategori</p>
        {listCategory.map((kategori) => (
          <div className="flex items-center pb-3" key={kategori.id}>
            <input
              type="checkbox"
              id={kategori.nama}
              name={kategori.nama}
              value={kategori.nama}
              className="rounded-3 me-2"
              checked={selectedCategory.includes(kategori.nama)}
              onChange={() => handleCategory(kategori.nama)}
            />
            <label htmlFor={kategori.nama} className="text-sm">
              {kategori.nama}
            </label>
          </div>
        ))}
      </div>

      {/* Rentang Harga */}
      <hr className="text-gray" />
      <div className="py-6">
        <p className="text-gray text-base font-semibold pb-4">Rentang Harga</p>
        {rentangPrice.map((price) => (
          <div className="flex items-center pb-3" key={price.id}>
            <input
              type="checkbox"
              id={price.id}
              name={price.id}
              value={price.id}
              className="rounded-3 me-2"
              checked={selectedPrice.includes(price.id)}
              onChange={() => handlePrice(price.id)}
            />
            <label htmlFor={price.id} className="text-sm">
              {price.label}
            </label>
          </div>
        ))}
      </div>

      {/* Lainnya */}
      <hr className="text-gray" />
      <div className="pt-6 py-16">
        <p className="text-gray text-base font-semibold pb-4">Lainnya</p>
        {otherOption.map((other) => (
          <div key={other.id} className="flex items-center pb-3">
            <input
              type="checkbox"
              id={other.id}
              name={other.id}
              value={other.id}
              className="rounded-3 me-2"
              checked={selectedOther.includes(other.id)}
              onChange={() => handleOther(other.id)}
            />
            <label htmlFor={other.id} className="text-sm">
              {other.label}
            </label>
          </div>
        ))}
      </div>

      {/* Button Terapkan */}
      <div className="px-4 absolute bottom-5 inset-x-0">
        <button className="w-full bg-secondary py-2 rounded-full text-primary">
          Terapkan
        </button>
      </div>
    </div>
  );
};

export default TabFilter;
