/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

const Login = () => {
  let [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleBack = () => Router.back();

  const handleInputChange = (value, name) => {
    setInput({ ...input, [name]: value });
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: input.email,
      password: input.password,
    });

    if (result.error) {
      let errorMessage;
      if (
        result.error.includes("Email tidak terdaftar") ||
        result.error.includes("Request failed with status code 401")
      ) {
        errorMessage = "Email tidak terdaftar";
      } else if (result.error.includes("Password tidak sesuai")) {
        errorMessage = "Password tidak sesuai";
      } else if (
        result.error.includes(
          "Akun belum aktif, Mohon periksa email aktivasi Anda!"
        )
      ) {
        errorMessage = "Akun belum aktif, Mohon periksa email aktivasi Anda!";
      }

      Swal.fire({
        title: `Sorry, ${errorMessage}`,
        text: "Silahkan login kembali dengan email dan password Anda yang sesuai",
        icon: "warning",
        showConfirmButton: false,
        timer: 3000,
      });
      return false;
    }

    Router.push("/");
  };

  const handleLoginGoogle = () => {
    signIn(
      "google",
      { callbackUrl: "http://localhost:3000" },
      { prompt: "login" }
    );
  };

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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.1065 29.8667L21.8553 41.6118L19.2121 44.2513L2.96094 28.0001L19.2121 11.7451L21.8553 14.3883L10.1065 26.1334H52.2671V29.8667H10.1065Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Form Masuk */}
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
              <h1 className="text-secondary text-[6vw] sm:text-3xl font-bold pb-[2vw] sm:pb-5">
                ExploreKuliner
              </h1>
              <p className=" text-black text-[5vw] sm:text-2xl font-semibold">
                Masuk
              </p>
              <p className="text-black text-[3vw] sm:text-lg pb-[3vw] sm:pb-6">
                Masuk dengan alamat email dan kata sandi.
              </p>
              <form>
                <div className="pb-[2vw] sm:pb-4">
                  <label
                    htmlFor="email"
                    className="text-[3vw] sm:text-lg font-normal"
                  >
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="mail@gmail.com"
                    value={input.email}
                    onChange={(e) => handleInputChange(e.target.value, "email")}
                    className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-[2vw] sm:rounded-lg text-[3vw] sm:text-base bg-primary border-mediumGray border-2 focus:border-none"
                    required
                  />
                </div>
                <div className="pb-[2vw] sm:pb-4">
                  <label
                    htmlFor="password"
                    className="text-[3vw] sm:text-lg font-normal"
                  >
                    Kata Sandi
                  </label>
                  <div className="flex">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="********"
                      value={input.password}
                      onChange={(e) =>
                        handleInputChange(e.target.value, "password")
                      }
                      className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-l-[2vw] sm:rounded-l-lg text-[3vw] sm:text-base bg-primary border-mediumGray border-2 focus:border-none"
                      required
                    />
                    <input
                      type="image"
                      src={
                        showPassword
                          ? "/images/open-eye.png"
                          : "/images/closed-eye.png"
                      }
                      alt={showPassword ? "Open Eye" : "Closed Eye"}
                      className="w-[10vw] sm:w-12 mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-r-[2vw] sm:rounded-r-lg text-[3vw] sm:text-base cursor-pointer bg-primary border-mediumGray border-2 focus:border-none"
                      onClick={(e) => handleShowPassword(e)}
                    />
                  </div>
                </div>
                <div className="flex justify-between pb-[6vw] sm:pb-6">
                  <div className="flex justify-center items-center">
                    <input
                      type="checkbox"
                      id="ingatkan"
                      name="ingatkan"
                      value="ingatkan"
                      className="rounded-3 me-[2vw] sm:me-2 w-[3vw] h-[3vw] sm:w-4 sm:h-4"
                    />
                    <label
                      htmlFor="ingatkan"
                      className="text-[3vw] sm:text-base"
                    >
                      Ingatkan saya
                    </label>
                  </div>
                  <Link href="/reset-password">
                    <p className="text-[3vw] sm:text-base text-secondary font-normal text-end mb-0 cursor-pointer">
                      Lupa kata sandi?
                    </p>
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full font-bold text-white p-[2vw] sm:px-2 sm:py-3 rounded-full bg-secondary text-[3vw] sm:text-lg mt-[2vw] sm:mt-5"
                  onClick={handleLogin}
                >
                  Masuk
                </button>
              </form>
              <p className=" text-black text-[3vw] sm:text-base text-center py-[3vw] sm:py-6">
                Atau masuk dengan
              </p>
              <button
                type="button"
                className="w-full text-[3vw] sm:text-lg font-bold text-black p-[2vw] sm:px-2 sm:py-3 rounded-full bg-mediumGray flex justify-center items-center"
                onClick={handleLoginGoogle}
              >
                <img
                  src="/logo/icon-google.svg"
                  alt="google"
                  className="me-[2vw] sm:me-2 w-[4vw] h-[4vw] sm:w-[24px] sm:h-[24px]"
                />
                Google
              </button>
              <p className="text-[3vw] sm:text-base text-center pt-[6vw] sm:pt-6">
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
