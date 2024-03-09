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
    { id: "dinein", label: "Dine In" },
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
        <div className="grid grid-cols-2 gap-3">
          {["Bintang 4", "Bintang 4.5"].map((rating) => (
            <button
              key={rating}
              className={` border-gray border-[1px] px-3 py-1 text-sm rounded-lg ${
                selectedRating === rating ? "bg-black text-white" : ""
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
      <div className="py-6">
        <p className="text-gray text-base font-semibold pb-4">Jarak Resto</p>
        <div className="grid grid-cols-2 2xl:grid-cols-3 gap-3">
          {["Semua", "0-3 km", "3-5 km", "5-10 km", "10-15 km", "> 15 km"].map(
            (distance) => (
              <button
                key={distance}
                className={`border-gray border-[1px] px-3 py-1 text-sm rounded-lg ${
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
        <p className="text-gray text-base font-semibold pb-4">Kategori Resto</p>
        <div className="grid grid-cols-2">
          {listCategory.map((kategori) => (
            <div className="flex items-center pb-3 space-x-2" key={kategori.id}>
              <input
                type="checkbox"
                id={kategori.nama}
                name={kategori.nama}
                value={kategori.nama}
                className="rounded"
                checked={selectedCategory.includes(kategori.nama)}
                onChange={() => handleCategory(kategori.nama)}
              />
              <label htmlFor={kategori.nama} className="text-sm">
                {kategori.nama}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rentang Harga */}
      <hr className="text-gray" />
      <div className="py-6">
        <p className="text-gray text-base font-semibold pb-4">Rentang Harga</p>
        {rentangPrice.map((price) => (
          <div className="flex items-center pb-3 space-x-2" key={price.id}>
            <input
              type="checkbox"
              id={price.id}
              name={price.id}
              value={price.id}
              className="rounded"
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
          <div key={other.id} className="flex items-center pb-3 space-x-2">
            <input
              type="checkbox"
              id={other.id}
              name={other.id}
              value={other.id}
              className="rounded"
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
