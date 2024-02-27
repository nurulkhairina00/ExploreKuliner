/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

const Daftar = () => {
  const handleBack = () => Router.back();

  return (
    <>
      <Head>
        <title>Explore Kuliner</title>
      </Head>
      <div className="w-full h-screen bg-primary">
        <div className="flex">
          {/* Image */}
          <div className="relative w-1/2 lg:w-3/5 hidden md:block">
            <img
              src="/images/bg-register.jpg"
              className="w-full h-screen object-cover"
              alt="Daftar"
            />
            <div className="cursor-pointer" onClick={handleBack}>
              <svg
                className="absolute left-8 top-6"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.1065 29.8667L21.8553 41.6118L19.2121 44.2513L2.96094 28.0001L19.2121 11.7451L21.8553 14.3883L10.1065 26.1334H52.2671V29.8667H10.1065Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Form Daftar */}
          <div className="w-full h-screen md:w-1/2 flex flex-col justify-center items-center">
            <div
              className="cursor-pointer md:hidden w-5/6 lg:w-2/3 p-[6vw]"
              onClick={handleBack}
            >
              <svg
                className="absolute left-[8vw] top-[5vw]"
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

            <div className="w-5/6 lg:w-2/3 p-[6vw] sm:p-7 rounded-[2vw] sm:rounded-lg shadow-lg">
              <h2 className="text-secondary text-[6vw] sm:text-3xl font-bold pb-[2vw] sm:pb-5">
                ExploreKuliner
              </h2>
              <p className="text-black text-[5vw] sm:text-2xl font-semibold">
                Daftarkan Akun Anda
              </p>
              <p className="text-black text-[3vw] sm:text-sm pb-[2vw] sm:pb-5">
                Daftar dengan alamat email, no hp dan kata sandi.
              </p>
              <form action="">
                <div className="pb-[2vw] sm:pb-3">
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
                    className="w-full sm:mt-1 p-[2vw] sm:p-2 rounded-[2vw] sm:rounded-lg bg-mediumGray focus:outline-secondary text-[3vw] sm:text-sm"
                  />
                </div>
                <div className="pb-[2vw] sm:pb-3">
                  <label
                    htmlFor="no_hp"
                    className="text-[3vw] sm:text-sm font-normal"
                  >
                    No Handphone
                  </label>
                  <input
                    type="number"
                    name="no_hp"
                    placeholder="+62"
                    className="w-full sm:mt-1 p-[2vw] sm:p-2 rounded-[2vw] sm:rounded-lg bg-mediumGray focus:outline-secondary text-[3vw] sm:text-sm"
                  />
                </div>
                <div className="pb-[6vw] sm:pb-5">
                  <label
                    htmlFor="katasandi"
                    className="text-[3vw] sm:text-sm font-normal"
                  >
                    Kata Sandi
                  </label>
                  <input
                    type="password"
                    name="katasandi"
                    placeholder="********"
                    className="w-full sm:mt-1 p-[2vw] sm:p-2 rounded-[2vw] sm:rounded-lg bg-mediumGray focus:outline-secondary text-[3vw] sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-semibold text-white p-[2vw] sm:p-2 rounded-full bg-secondary text-[3vw] sm:text-sm"
                >
                  Daftar
                </button>
              </form>
              <p className="text-black text-[3vw] sm:text-sm text-center py-[4vw] sm:py-5">
                Atau masuk dengan
              </p>
              <button
                type="button"
                className="w-full text-[3vw] sm:text-sm font-semibold text-black p-[2vw] sm:p-2 rounded-full bg-mediumGray flex justify-center"
              >
                <img
                  src="/logo/icon-google.svg"
                  alt="google"
                  className="me-[2vw] sm:me-2 w-[4vw] h-[4vw] sm:w-[24px] sm:h-[24px]"
                />
                Google
              </button>
              <p className="text-[3vw] sm:text-sm text-center pt-[7vw] sm:pt-7">
                <span className="text-black">Sudah memiliki akun?</span>
                <Link href="/login-reviewer">
                  <span className="text-secondary font-bold cursor-pointer">
                    {" "}
                    Masuk
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Daftar;
