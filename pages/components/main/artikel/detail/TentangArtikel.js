/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import Komentar from "./Komentar";
import Tautan from "./Tautan";

const TentangArtikel = (props) => {
  const { isLoggedIn } = props;
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const getDetailArtikel = async () => {
    await axios
      .get(`/data/exploreKuliner.json`)
      .then((res) => {
        let result = res.data.artikel.find((item) => item.id === Number(id));
        setData(result);
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleBookmark = () => {
    if (!isLoggedIn) {
      Swal.fire({
        title: "Silahkan login terlebih dahulu",
        icon: "info",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      setIsBookmarked(!isBookmarked);
      Swal.fire({
        title: "Success!",
        text: "Berhasil menyimpan artikel",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  useEffect(() => {
    getDetailArtikel();
  }, []);

  return (
    <section className="flex flex-col px-[8vw] pb-[8vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-10 sm:pt-0">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full lg:w-3/4 h-[40vw] md:h-72 lg:h-96 rounded-[2vw] sm:rounded-lg shadow-lg relative">
          <img
            src={data?.image}
            alt="cover-artikel"
            className="w-full h-full object-cover rounded-[2vw] sm:rounded-lg shadow-lg"
          />
          <div
            className="absolute top-[2vw] right-[2vw] sm:top-3 sm:right-3 cursor-pointer"
            onClick={handleBookmark}
          >
            {isBookmarked ? (
              <div className="w-[8vw] h-[8vw] sm:w-12 sm:h-12 bg-white flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5vw"
                  height="5vw"
                  viewBox="0 0 24 24"
                  className="sm:w-8 sm:h-8 absolute top-[1.5vw] right-[1.5vw] sm:top-[8px] sm:right-[8px]"
                >
                  <path
                    fill="black"
                    d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"
                  />
                </svg>
              </div>
            ) : (
              <div className="w-[8vw] h-[8vw] sm:w-12 sm:h-12 flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5vw"
                  height="5vw"
                  viewBox="0 0 24 24"
                  className="sm:w-8 sm:h-8 absolute top-[1.5vw] right-[1.5vw] sm:top-[8px] sm:right-[8px]"
                >
                  <path
                    fill="white"
                    d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className="w-full sm:w-3/4 lg:w-1/2">
          <h4 className="text-[6vw] sm:text-4xl font-bold py-[4vw] sm:py-8 text-center leading-normal">
            {data.judul}
          </h4>
          <p className="text-[3.5vw] sm:text-base text-gray text-center">
            {data.deskripsi}
          </p>
          <div className="w-full flex p-[4vw] sm:p-4 justify-center items-center gap-1">
            <div className="w-[16%] xl:w-[8%]">
              <img
                src="/images/kategori2.jpg"
                alt="foto-profile"
                className="w-[10vw] h-[10vw] md:w-12 md:h-12 rounded-full object-cover"
              />
            </div>
            <div className="text-start">
              <p className="text-[3.5vw] sm:text-base font-semibold">
                By {data.author}
              </p>
              <p className="text-[3vw] sm:text-sm">
                {moment(data.publish_date).format("DD MMMM YYYY")} - 09.13 Wib
              </p>
            </div>
          </div>
          <div className="w-full py-[4vw] sm:py-8">
            <p className="font-semibold text-[4vw] sm:text-lg py-[3vw] sm:py-4">
              1. Kopi Nalar
            </p>
            <img
              src="/images/kategori1.jpg"
              alt="cover-artikel"
              className="w-full h-96 object-cover rounded-[2vw] sm:rounded-lg shadow-lg"
            />
            <p className="text-[2.5vw] sm:text-xs text-center py-2">
              Ruangan indoor kapi nalar dengan suasana yang sangat nyaman untuk
              nugas
            </p>
            <div className="">
              <p className="text-justify text-[3.5vw] sm:text-base">
                Coffee shop Jakarta Selatan terbaik pertama adalah Kopi Nalar,
                yang berlokasi di Petogogan, Jakarta Selatan. Kopi Nalar
                mempunyai suasana yang homey, cozy, dan warm. Coffee shop satu
                ini cocok untuk kamu yang membutuhkan suasana nyaman dan
                ketenangan, apalagi setelah lelah dengan tugas kampus ataupun
                pekerjaan kantor.
                <br />
                <br />
                Ada juga bagian outdoor yang mengusung konsep glass house,
                sehingga terlihat cantik apalagi ketika golden hour maka
                pencahayaan yang maksimal akan mempercantik selfie-mu.
                <br />
                <br />
                Menu kopi dari Kopi Nalar adalah beberapa jenis kopi seperti
                Espresso, Americano, Cappuccino, dan masih banyak jenis yang
                lain. Kalo untuk makanannya menu yang disajikan cenderung
                makan-makanan light bites seperti french fries dan aneka dessert
                untuk menikmati kopi.
                <br />
                <br />
                Untuk alamatnya adalah: Jl. Prof. Joko Sutono SH No.7,
                RT.14/RW.6, Petogogan, Kec. Kby. Baru, Kota Jakarta Selatan,
                Daerah Khusus Ibukota Jakarta 12160.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-3/4 lg:w-1/2 flex gap-[2vw] sm:gap-2 py-[2vw] sm:py-2">
          <p className="text-[4vw] sm:text-base font-semibold">Tags</p>
          {data?.tags?.map((item, index) => (
            <div
              className="bg-secondary text-white px-[2vw] py-[1vw] sm:px-4 sm:py-1 rounded-[2vw] sm:rounded-lg"
              key={index}
            >
              <p className="text-[3.5vw] sm:text-base">{item}</p>
            </div>
          ))}
        </div>
        <Tautan {...{ data }} />
        <Komentar />
      </div>
    </section>
  );
};

export default TentangArtikel;
