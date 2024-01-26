import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Video = () => {
  const videoTiktok = [
    { id: 1, id_tiktok: "7217331640790551809" },
    { id: 2, id_tiktok: "7212845793315802395" },
    { id: 3, id_tiktok: "7271436975314341125" },
    { id: 4, id_tiktok: "7146880316253277466" },
    { id: 5, id_tiktok: "7148839509914881307" },
    { id: 6, id_tiktok: "7269729612328865030" },
    { id: 7, id_tiktok: "7197629527638527259" },
  ];

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
    <section className="sm:px-8 md:px-16 lg:px-28 xl:px-36 sm:py-12 sm:p-0">
      {/* Judul Restoran Populer*/}
      <div className="p-[5vw] text-black sm:p-0">
        <h2 className=" font-bold text-[6vw] sm:text-3xl pb-[2vw] sm:pb-5">
          Video Makanan
        </h2>
        <p className="font-normal text-[3vw] sm:text-lg pb-[2vw] sm:pb-5">
          Video tentang suasana dan makanan resto.
        </p>
      </div>

      {/* Card Video Makanan */}
      <div className="px-[5vw] sm:px-0 sm:py-5 relative">
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
            spaceBetween={30}
            slidesPerView={"auto"}
            className="mySwiper"
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Navigation, Pagination, EffectCoverflow]}
            ref={swiperRef}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 5,
              },
              1510: {
                slidesPerView: 6,
              },
            }}
          >
            {videoTiktok.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white w-[27vw] h-[45vw] md:w-48 md:h-80 rounded-lg shadow-lg">
                  <p className="p-[2.5vw] sm:p-4 text-[3vw] sm:text-base lg:text-lg">
                    ExploreKuliner
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          onClick={slideNext}
          className="hidden sm:block absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full z-10"
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

export default Video;
