import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { kategoriRestoran } from "../../public/data";
import CardResto from "../layout/cardRestoran";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RestoranBaru = () => {
  const swiperRef = useRef();

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper)
      swiperRef.current.swiper.slidePrev();
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper)
      swiperRef.current.swiper.slideNext();
  };

  return (
    <section className="sm:flex sm:px-8 md:px-16 lg:px-28 xl:px-36 sm:py-12 sm:p-0 bg-secondary">
      {/* Tampilan Judul Mobile */}
      <div className="sm:hidden p-[5vw]">
        <h2 className="text-primary font-bold text-[6vw] sm:text-3xl pb-[2vw] sm:pb-5">
          Restoran Baru
        </h2>
        <p className="text-[3vw] text-primary font-normal pb-[2vw] sm:text-lg sm:pb-5">
          Restoran baru buka, ayok datangi resto yang kamu mau.
        </p>
      </div>

      {/* Tampilan Judul Tablet dan Laptop */}
      <div className="w-1/4 hidden sm:block p-4">
        <h2 className="text-primary font-bold text-[6vw] sm:text-3xl pb-[2vw] sm:pb-5">
          Restoran Baru
        </h2>
        <p className="text-[3vw] text-primary font-normal pb-[2vw] sm:text-lg sm:pb-5">
          Restoran baru buka, ayok datangi resto yang kamu mau.
        </p>
      </div>

      {/* Card Restoran Baru */}
      <div className="w-full sm:w-3/4 ps-[5vw] sm:ps-0 sm:py-5 relative">
        <button
          onClick={slidePrev}
          className="hidden sm:block absolute bottom-3 bg-white p-2 rounded-full z-10"
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
            slidesPerView={3}
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
              1000: {
                slidesPerView: 2,
              },
              1250: {
                slidesPerView: 3,
              },
            }}
          >
            {kategoriRestoran.map((item) => (
              <SwiperSlide key={item.id}>
                <CardResto data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          onClick={slideNext}
          className="hidden sm:block absolute bottom-3 right-0 bg-white p-2 rounded-full z-10"
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

export default RestoranBaru;
