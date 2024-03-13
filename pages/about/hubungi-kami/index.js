/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Breadcrumb from "../../components/main/Breadcrumb";

const index = () => {
  const breadcrumbData = [
    {
      label: "Hubungi kami",
      link: "/hubungi-kami",
    },
  ];

  const [input, setInput] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });

  const handleChange = (value, name) => {
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <Breadcrumb data={breadcrumbData} />
      <section className="flex justify-center items-center px-[8vw] pb-[8vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-10 sm:pt-0">
        <div className="w-full lg:w-3/4 rounded-[2vw] sm:rounded-lg shadow-lg p-[4vw] sm:p-8">
          <p className="text-[4vw] sm:text-2xl font-bold text-center mt-[2vw] sm:mt-4 mb-[4vw] sm:mb-8">
            Hubungi Kami
          </p>
          <p className="text-justify text-[3vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
            Jika ingin menghubungi kami terkait pertanyaan, kerja sama dan hal
            lain, silahkan kirimkan email ke id.explirekuliner.id atau bisa
            mengisi formulir dibawah ini, kami akan membalasnya secepat
            mungkin..
          </p>
          <div className="w-full sm:w-3/4 mx-auto py-[2vw] sm:py-4">
            <form action="">
              <div className="pb-[2vw] sm:pb-4">
                <label
                  htmlFor="nama"
                  className="text-[3vw] sm:text-lg font-normal"
                >
                  Nama <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama Lengkap"
                  value={input.nama}
                  onChange={(e) => handleChange(e.target.value, "nama")}
                  className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-[2vw] sm:rounded-lg bg-mediumGray focus:outline-secondary text-[3vw] sm:text-base"
                  required
                />
              </div>
              <div className="pb-[2vw] sm:pb-4">
                <label
                  htmlFor="email"
                  className="text-[3vw] sm:text-lg font-normal"
                >
                  Alamat Email <span className="text-red">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="mail@gmail.com"
                  value={input.email}
                  onChange={(e) => handleChange(e.target.value, "email")}
                  className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-[2vw] sm:rounded-lg bg-mediumGray focus:outline-secondary text-[3vw] sm:text-base"
                  required
                />
              </div>
              <div className="pb-[2vw] sm:pb-4">
                <label
                  htmlFor="subjek"
                  className="text-[3vw] sm:text-lg font-normal"
                >
                  Subjek <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  name="subjek"
                  placeholder="Subjek"
                  value={input.subjek}
                  onChange={(e) => handleChange(e.target.value, "subjek")}
                  className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-[2vw] sm:rounded-lg bg-mediumGray focus:outline-secondary text-[3vw] sm:text-base"
                  required
                />
              </div>
              <div className="pb-[2vw] sm:pb-4">
                <label
                  htmlFor="pesan"
                  className="text-[3vw] sm:text-lg font-normal"
                >
                  Pesan <span className="text-red">*</span>
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  cols="20"
                  rows="4"
                  placeholder="Berikan pesan anda"
                  value={input.pesan}
                  onChange={(e) => handleChange(e.target.value, "pesan")}
                  className="bg-mediumGray w-full rounded-[2vw] sm:rounded-lg sm:mt-2 p-[3vw] sm:p-3 text-[3vw] sm:text-base focus:outline-secondary"
                />
              </div>
              <div className="flex justify-center items-center pt-[2vw] sm:pt-4">
                <button
                  type="submit"
                  className=" font-bold text-white px-[4vw] py-[1.5vw] sm:px-6 sm:py-2 rounded-[2vw] sm:rounded-lg bg-secondary text-[3vw] sm:text-lg"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
