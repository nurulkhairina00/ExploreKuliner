import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import CardRestoran from "../layout/CardRestoran";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RestoranPopuler = () => {
  const [data, setData] = useState([]);
  const swiperRef = useRef();

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper)
      swiperRef.current.swiper.slidePrev();
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper)
      swiperRef.current.swiper.slideNext();
  };

  const getRestoran = async () => {
    await axios
      .get(`/data/exploreKuliner.json`)
      .then((res) => {
        setData(res.data.restoran);
      })
      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    getRestoran();
  }, []);

  return (
    <section className="sm:px-8 md:px-16 lg:px-28 xl:px-36 sm:py-12 sm:p-0">
      {/* Judul Restoran Populer*/}
      <div className="p-[8vw] text-black sm:p-0">
        <h2 className=" font-bold text-[6vw] sm:text-3xl pb-[2vw] sm:pb-5">
          Restoran Populer
        </h2>
        <p className="font-normal text-[3vw] sm:text-lg pb-[2vw] sm:pb-5">
          Resto yang sering dibicarkan di areamu, orang-orang pada makan disini.
        </p>
      </div>

      {/* Card Restoran Populer */}
      <div className="ps-[8vw] sm:ps-0 sm:py-5 relative">
        <button
          onClick={slidePrev}
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 bg-white p-2 rounded-full z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="sm:px-5">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            className="mySwiper"
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Navigation, Pagination]}
            ref={swiperRef}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              641: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1250: {
                slidesPerView: 4,
              },
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <CardRestoran data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          onClick={slideNext}
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-0 bg-white p-2 rounded-full z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default RestoranPopuler;
