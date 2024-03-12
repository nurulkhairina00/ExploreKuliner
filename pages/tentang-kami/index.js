import React from "react";
import Breadcrumb from "../components/main/Breadcrumb";

const index = () => {
  const breadcrumbData = [
    {
      label: "Tentang kami",
      link: "/tentang-kami",
    },
  ];

  return (
    <>
      <Breadcrumb data={breadcrumbData} />
      <section className="flex justify-center items-center px-[8vw] pb-[8vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-10 sm:pt-0">
        <div className="w-full lg:w-3/4 rounded-[2vw] sm:rounded-lg shadow-lg p-[4vw] sm:p-8">
          <p className="text-[4vw] sm:text-2xl font-bold text-center my-[2vw] sm:my-4">
            Tentang kami
          </p>
          <p className="text-[3.5vw] sm:text-xl font-semibold my-[4vw] sm:my-8 text-center">
            Berpetualang bersama ExploreKuliner.id
          </p>
          <p className="text-center text-[3vw] sm:text-lg mb-[2vw] sm:mb-4">
            ExploreKuliner.id lahir dari semangat untuk menghadirkan yang
            terbaik bagi pecinta kuliner. Dibuat oleh tim yang hobi berpetualang
            mencari tempat tongkrongan dan kulineran, kami menghadirkan
            rekomendasi terbaik dari berbagai sudut kota di <b>JABODETABEK</b>.
          </p>
          <p className="text-center text-[3vw] sm:text-lg mb-[2vw] sm:mb-4">
            Tujuan kami adalah untuk memberikan rekomendasi tempat makan dan
            nongkrong terbaik, yang mungkin belum ditemukan atau jarang
            terekspos agar dapat dinikmati oleh semua orang. Petualangan tidak
            hanya tentang perjalanan, namun juga menikmati setiap rasa yang ada.
          </p>
          <p className="text-center text-[3vw] sm:text-lg mb-[2vw] sm:mb-4">
            Rasakanlah perjalanan kuliner dari setiap orang bersama
            <span className="text-secondary font-bold">
              {" "}
              ExploreKuliner.id.
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default index;
