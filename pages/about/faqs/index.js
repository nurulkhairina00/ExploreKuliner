/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Breadcrumb from "../../components/main/Breadcrumb";

const index = () => {
  const breadcrumbData = [
    {
      label: "Faqs",
      link: "/faqs",
    },
  ];

  const [listQuestion, setListQuestion] = useState([
    {
      id: 1,
      question: "Apa itu Explore Kuliner?",
      answer:
        "Explore Kuliner adalah wadah bagi pecinta kuliner yang suka berpetualang atau bingung mencari rekomendasi tempat kulineran untuk menemukan tempat terbaik yang mereka cari. Saat ini baru di sekitaran JABODETABEK. Pengunjung bisa Review, Komentar, memberikan Reactions, juga bisa menulis artikel.",
    },
    {
      id: 2,
      question: "Bagaimana cara membuat akun di Explore Kuliner?",
      answer:
        "Bisa dengan cara klik menu “DAFTAR” di halaman Home, dan isi formulir yang dibutuhkan. Setelah diverifikasi, maka kamu sudah memiliki akun di Explore Kuliner.",
    },
    {
      id: 3,
      question: "Apa saja informasi resto yang ditawarkan?",
      answer:
        "Mulai dari Jam Operasional, Menu Makanan, Ulasan, Foto, Deskripsi, dan Kontak. Kami berusaha untuk memberikan informasi selengkap-lengkapnya. Jangan lupa untuk Review restoran terkait, jika kamu sudah pernah kesana.",
    },
    {
      id: 4,
      question: "Apakah bisa menulis artikel sendiri di Explore Kuliner?",
      answer:
        "Tentu bisa. Kamu bisa menulis artikel sendiri di Explore Kuliner dengan akun yang telah dibuat, nantinya setiap tulisan akan dimoderasi oleh admin agar layak tayang. Tujuannya agar informasi yang diberikan tetap valid dan bermanfaat, menghindari user yang hanya ingin melakukan “SPAM”.",
    },
    {
      id: 5,
      question: "Bagaimana caranya untuk bekerja sama dengan Explore Kuliner?",
      answer:
        "Silahkan ke halaman “Hubungi Kami” dan ikuti saja instruksi yang ada.",
    },
  ]);

  const [accordionStatus, setAccordionStatus] = useState(
    Array(listQuestion.length).fill(false)
  );

  const toggleAccordion = (index) => {
    const updatedAccordionStatus = accordionStatus.map((status, i) =>
      index === i ? !status : false
    );
    setAccordionStatus(updatedAccordionStatus);
  };

  return (
    <>
      <Breadcrumb data={breadcrumbData} />
      <section className="flex justify-center items-center px-[8vw] pb-[8vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-10 sm:pt-0">
        <div className="w-full lg:w-3/4 rounded-[2vw] sm:rounded-lg shadow-lg p-[4vw] sm:p-8">
          <p className="text-[4vw] sm:text-2xl font-bold text-center mt-[2vw] sm:mt-4 mb-[4vw] sm:mb-8">
            FAQs (Frequently Asked Questions)
          </p>
          {listQuestion.map((item, index) => (
            <div
              key={item.id}
              className="rounded-[2vw] sm:rounded-lg shadow-md mb-[2vw] sm:mb-4"
            >
              <div
                className="flex justify-between items-center p-[3vw] sm:p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <p className="text-[3vw] sm:text-lg font-semibold">
                  {item.question}
                </p>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5vw"
                    height="5vw"
                    viewBox="0 0 24 24"
                    className={`sm:w-8 sm:h-8 transform transition-transform duration-300 ${
                      accordionStatus[index] ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fill="none"
                      stroke="#333333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m17 14l-5-5m0 0l-5 5"
                    />
                  </svg>
                </div>
              </div>
              {accordionStatus[index] && (
                <div className="px-[3vw] sm:px-4 pb-[3vw] sm:pb-4">
                  <p className="text-justify text-[3vw] sm:text-lg">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default index;
