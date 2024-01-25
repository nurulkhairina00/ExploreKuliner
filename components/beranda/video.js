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
    <div className="p-4 sm:px-12 md:px-16 lg:px-24">
      <h2 className="text-black font-bold text-2xl sm:text-3xl">
        Video Makanan
      </h2>

      {/* Card Video Makanan */}
      <div className="py-14 relative">
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
        <div className="px-5">
          <Swiper
            spaceBetween={30}
            slidesPerView={"auto"}
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
              200: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
              1450: {
                slidesPerView: 6,
              },
            }}
          >
            {videoTiktok.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white w-48 h-80 rounded-lg shadow-lg">
                  <p className="p-4">ExploreKuliner</p>
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
    </div>
  );
};

export default Video;
