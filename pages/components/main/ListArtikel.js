/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { getListArtikel } from "../../actions/artikelAction";
import CardArtikel from "./CardArtikel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ListArtikel = () => {
  const { getListArtikelResult, getListArtikelLoading, getListArtikelError } =
    useSelector((state) => state.artikelReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListArtikel());
  }, [dispatch]);

  return (
    <section className="p-[8vw] sm:px-8 md:px-16 lg:px-28 xl:px-36 sm:pt-12 sm:pb-20 sm:p-0">
      {/* Judul Artikel */}
      <div className="text-black">
        <div className="flex justify-between items-center pb-[2vw] sm:pb-5">
          <h2 className="font-bold text-[6vw] sm:text-3xl">Artikel</h2>
          <Link href="/artikel">
            <p className="text-[3.5vw] sm:text-lg font-medium text-secondary cursor-pointer">
              Lihat Semua
            </p>
          </Link>
        </div>
        <div className="pb-[2vw] sm:pb-5">
          <p className="text-[3.5vw] sm:text-lg font-normal">
            Berbagai rekomendasi tempat dan menu terbaik.
          </p>
        </div>
      </div>

      {/* Card Artikel */}
      {getListArtikelResult ? (
        <div className="sm:py-5 relative">
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
              // ref={swiperRef}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                641: {
                  slidesPerView: 2,
                },
                1000: {
                  slidesPerView: 3,
                },
                1600: {
                  slidesPerView: 4,
                },
              }}
            >
              {getListArtikelResult?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link href={`/artikel/detail/${item.id}`}>
                    <CardArtikel data={item} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : getListArtikelLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getListArtikelError ? getListArtikelError : "Data Kosong"}</p>
      )}
    </section>
  );
};

export default ListArtikel;
