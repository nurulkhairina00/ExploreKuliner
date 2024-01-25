import React from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

const Login = () => {
  const handleBack = () => Router.back();
  return (
    <>
      <Head>
        <title>Explore Kuliner</title>
      </Head>
      <div className="w-full h-screen bg-primary">
        <div className="flex">
          {/* Image */}
          <div className="relative w-1/2 lg:w-3/5 hidden md:flex">
            <img
              src="/images/bg-login.jpg"
              className="w-full h-screen object-cover"
              alt="login"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1065 29.8667L21.8553 41.6118L19.2121 44.2513L2.96094 28.0001L19.2121 11.7451L21.8553 14.3883L10.1065 26.1334H52.2671V29.8667H10.1065Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Form Login */}
          <div className="w-full h-screen md:w-1/2 flex justify-center items-center">
            <div className="w-5/6 lg:w-2/3 bg-white p-7 rounded-lg shadow-lg">
              <h1 className="text-secondary text-3xl font-bold pb-5">
                ExploreKuliner
              </h1>
              <p className=" text-black text-2xl font-semibold">Masuk</p>
              <p className="text-black text-sm pb-5">
                Masuk dengan alamat email dan kata sandi.
              </p>
              <form>
                <div className="pb-3">
                  <label htmlFor="email" className="text-sm font-normal">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="mail@gmail.com"
                    className="w-full mt-1 p-2 rounded-lg bg-mediumGray focus:outline-secondary"
                  />
                </div>
                <div className="pb-3">
                  <label htmlFor="katasandi" className="text-sm font-normal">
                    Kata Sandi
                  </label>
                  <input
                    type="password"
                    name="katasandi"
                    placeholder="********"
                    className="w-full mt-1 p-2 rounded-lg bg-mediumGray focus:outline-secondary"
                  />
                </div>
                <div className="flex justify-between pb-6">
                  <div className="flex justify-center items-center">
                    <input
                      type="checkbox"
                      id="ingatkan"
                      name="ingatkan"
                      value="ingatkan"
                      className="rounded-3 me-2"
                    />
                    <label htmlFor="ingatkan" className="text-sm">
                      Ingatkan saya
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-secondary font-normal text-end"
                  >
                    Lupa kata sandi?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full font-semibold text-white p-2 rounded-full bg-secondary"
                >
                  Masuk
                </button>
              </form>
              <p className=" text-black text-sm text-center py-5">
                Atau masuk dengan
              </p>
              <button
                type="button"
                className="w-full text-sm font-semibold text-black p-2 rounded-full bg-mediumGray flex justify-center items-center"
              >
                <img
                  src="/logo/icon-google.svg"
                  alt="google"
                  width={24}
                  height={24}
                  className="me-2"
                />
                Google
              </button>
              <p className="text-sm text-center pt-7">
                <span className="text-black">Belum punya akun?</span>
                <Link href="/register">
                  <span className="text-secondary font-bold cursor-pointer">
                    {" "}
                    Daftar
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

export default Login;
