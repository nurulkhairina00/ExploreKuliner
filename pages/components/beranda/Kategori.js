/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Kategori = () => {
  const swiperRef = useRef();
  const [data, setData] = useState([]);

  // navigation prev
  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // navigation next
  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const getDataKategori = async () => {
    await axios
      .get(`/data/exploreKuliner.json`)
      .then((res) => {
        setData(res.data.kategori);
      })
      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    getDataKategori();
  }, []);

  return (
    <section className="p-[5vw] sm:px-8 md:px-16 lg:px-28 xl:px-36 sm:pt-24 sm:py-12">
      <h2 className="text-black font-bold text-[6vw] sm:text-3xl pb-[12vw] sm:pb-9">
        Kategori
      </h2>
      {/* Tampilan Kategori Mobile */}
      <div className="flex flex-wrap justify-center items-center gap-[3.5vw] sm:hidden">
        {data.map((item) => (
          <div
            className="w-[15vw] h-[14vw] pt-[7vw] pb-[2.5vw] mb-[9vw] bg-white rounded-xl shadow-lg relative cursor-pointer"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.nama.split(" ").join("-")}
              className="w-[12vw] h-[12vw] sm:w-14 sm:h-14 rounded-full object-cover absolute -top-1/2 left-1/2 -translate-x-1/2 cursor-pointer"
            />
            <p className="text-black text-center font-bold text-[1.7vw] sm:pt-1 sm:text-[10px]">
              {item.nama}
            </p>
          </div>
        ))}
      </div>

      {/* Tampilan Kategori Tablet dan Desktop */}
      <div className="pb-10 relative hidden sm:block">
        <button
          onClick={slidePrev}
          className="absolute top-1/2  transform -translate-y-1/2 bg-secondary p-2 rounded-full hidden sm:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <div className="sm:px-14">
          <Swiper
            spaceBetween={30}
            slidesPerView={6}
            className="mySwiper"
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Navigation, Pagination, EffectCoverflow]}
            ref={swiperRef}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              930: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1430: {
                slidesPerView: 6,
              },
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} className="pt-20 relative">
                <div className="w-36 h-32 p-4 bg-white rounded-3xl shadow-lg relative hover:border-b-[3px] hover:border-b-secondary">
                  <img
                    src={item.image}
                    alt={item.nama.split(" ").join("-")}
                    className="rounded-full w-[7rem] h-[7rem] object-cover absolute -top-1/2 left-1/2 -translate-x-1/2"
                  />
                  <p className="text-base text-black pt-12 text-center font-semibold cursor-pointer">
                    {item.nama}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          onClick={slideNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-secondary p-2 rounded-full hidden sm:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Kategori;
