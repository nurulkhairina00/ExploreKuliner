/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Router from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

const index = () => {
  const [email, setEmail] = useState("");

  const handleBack = () => Router.back();

  const handleEmailChange = (value) => setEmail(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/${process.env.NEXT_PUBLIC_VER}/reset-password`,
      data: {
        email: email,
        host_url: `${process.env.NEXT_PUBLIC_APP_PATH}:${process.env.NEXT_PUBLIC_APP_PORT}/reset-password/`,
      },
    })
      .then((res) => {
        if (res.data.message == "EMAILNOTFOUND") {
          Swal.fire({
            title: `Sorry, Email tidak terdaftar`,
            text: "Silahkan inputkan email yang terdaftar pada database kami.",
            showConfirmButton: false,
            icon: "warning",
            timer: 3000,
          });
        } else {
          Swal.fire({
            title: "Success!",
            text: "Link untuk mengubah password telah dikirim ke email Anda. Silahkan check email Anda",
            showConfirmButton: false,
            icon: "success",
            timer: 3000,
          });
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <div className="w-full h-screen bg-primary">
      <div className="cursor-pointer" onClick={handleBack}>
        <svg
          className="absolute left-[8vw] top-[5vw] sm:left-8 sm:top-6 sm:w-14 h-14"
          width="8vw"
          height="8vw"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1065 29.8667L21.8553 41.6118L19.2121 44.2513L2.96094 28.0001L19.2121 11.7451L21.8553 14.3883L10.1065 26.1334H52.2671V29.8667H10.1065Z"
            fill="#d86141"
          />
        </svg>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-5/6 md:w-1/2 lg:w-1/3  p-[6vw] sm:p-8 rounded-[2vw] sm:rounded-lg shadow-lg">
          <h1 className="text-secondary text-[6vw] sm:text-3xl font-bold pb-[2vw] sm:pb-5">
            ExploreKuliner
          </h1>
          <p className=" text-black text-[5vw] sm:text-2xl font-semibold">
            Reset Password
          </p>
          <p className="text-black text-[3vw] sm:text-sm pb-[5vw] sm:pb-10">
            Masukkan alamat email akun anda dibawah ini. Kami akan mengirimkan
            instruksi pemulihan ke email tersebut.
          </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="pb-[6vw] sm:pb-10">
              <label
                htmlFor="email"
                className="text-[3vw] sm:text-sm font-normal"
              >
                Alamat Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="mail@gmail.com"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-[2vw] sm:rounded-lg bg-mediumGray focus:outline-secondary text-[3vw] sm:text-base"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full font-bold text-white p-[2vw] sm:px-2 sm:py-3 rounded-full bg-secondary text-[3vw] sm:text-lg"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
