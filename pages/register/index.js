/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import { hash } from "bcryptjs";

const Register = () => {
  const [input, setInput] = useState({
    nama: "",
    email: "",
    no_hp: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleBack = () => Router.back();

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleInputChange = (value, name) => {
    setInput({ ...input, [name]: value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!input.password.match(regexPassword)) {
      Swal.fire({
        title: `Sorry, Password tidak sesuai`,
        text: "Password minimal 6 karakter dan harus mengandung angka, serta gabungan huruf besar dan kecil",
        icon: "warning",
        showConfirmButton: false,
        timer: 3000,
      });
      return false;
    }

    await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/${process.env.NEXT_PUBLIC_VER}/register`,
      data: {
        input,
        hashedPassword: await hash(input.password, 12),
        host_url: `${process.env.NEXT_PUBLIC_APP_PATH}:${process.env.NEXT_PUBLIC_APP_PORT}/register/verify/`,
      },
    })
      .then(() => {
        Swal.fire({
          title: `Berhasil mendaftar`,
          text: "Silahkan Cek Email Untuk Konfirmasi",
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
        });
        Router.push("/login");
      })
      .catch((error) => {
        Swal.fire({
          title: `Sorry, Email sudah terdaftar`,
          text: "Silahkan login atau mendaftar dengan Email yang berbeda",
          icon: "info",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

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
              <p className="text-black text-[3.5vw] sm:text-lg pb-[3vw] sm:pb-6">
                Daftar dengan alamat email, no hp dan kata sandi.
              </p>
              <form>
                <div className="pb-[2vw] sm:pb-4">
                  <label
                    htmlFor="nama"
                    className="text-[3.5vw] sm:text-lg font-normal"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    name="nama"
                    placeholder="Nama Lengkap"
                    value={input.nama}
                    onChange={(e) => handleInputChange(e.target.value, "nama")}
                    className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-[2vw] sm:rounded-lg  text-[3.5vw] sm:text-base bg-primary border-mediumGray border-2 focus:border-none"
                    required
                  />
                </div>
                <div className="pb-[2vw] sm:pb-4">
                  <label
                    htmlFor="email"
                    className="text-[3.5vw] sm:text-lg font-normal"
                  >
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="mail@gmail.com"
                    value={input.email}
                    onChange={(e) => handleInputChange(e.target.value, "email")}
                    className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-[2vw] sm:rounded-lg text-[3.5vw] sm:text-base bg-primary border-mediumGray border-2 focus:border-none"
                    required
                  />
                </div>
                <div className="pb-[2vw] sm:pb-4">
                  <label
                    htmlFor="no_hp"
                    className="text-[3.5vw] sm:text-lg font-normal"
                  >
                    No Handphone
                  </label>
                  <input
                    type="number"
                    name="no_hp"
                    placeholder="+62"
                    value={input.no_hp}
                    onChange={(e) => handleInputChange(e.target.value, "no_hp")}
                    className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-[2vw] sm:rounded-lg text-[3.5vw] sm:text-base bg-primary border-mediumGray border-2 focus:border-none"
                    required
                  />
                </div>
                <div className="pb-[6vw] sm:pb-6">
                  <label
                    htmlFor="password"
                    className="text-[3.5vw] sm:text-lg font-normal"
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
                      className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-l-[2vw] sm:rounded-l-lg text-[3.5vw] sm:text-base bg-primary border-mediumGray border-2 focus:border-none"
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
                      className="w-[10vw] sm:w-12 mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-l-[2vw] sm:rounded-l-lg text-[3.5vw] sm:text-base cursor-pointer bg-primary border-mediumGray border-2 focus:border-none"
                      onClick={(e) => handleShowPassword(e)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full font-bold text-white p-[2vw] sm:px-2 sm:py-3 rounded-full bg-secondary text-[3.5vw] sm:text-lg mt-[2vw] sm:mt-5"
                  onClick={handleRegister}
                >
                  Daftar
                </button>
              </form>
              <p className="text-[3.5vw] sm:text-base text-center pt-[7vw] sm:pt-7">
                <span className="text-black">Sudah memiliki akun?</span>
                <Link href="/login">
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

export default Register;
