/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import { hash } from "bcryptjs";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");
import SocialMedia from "../components/main/SocialMedia";

const token = (props) => {
  const { data_user } = props;

  const [input, setInput] = useState({
    password: "",
    password_confirm: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleShowPassword = (event, type) => {
    event.preventDefault();
    if (type === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowPasswordConfirm(!showPasswordConfirm);
    }
  };

  const handleInputChange = (value, name) => {
    setInput({ ...input, [name]: value });
  };

  const handleResetPassword = async (event) => {
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

    if (input.password !== input.password_confirm) {
      Swal.fire({
        title: "ERROR!",
        text: "Password dan Konfirmasi Password tidak sama",
        icon: "warning",
        showConfirmButton: false,
        timer: 2500,
      });
      return false;
    }

    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/${process.env.NEXT_PUBLIC_VER}/reset-password/verify-token`,
      data: {
        hashedPassword: await hash(input.password, 12),
        token: data_user.token,
        id_user: data_user.id_user,
      },
    })
      .then(() => {
        Swal.fire({
          title: "Password berhasil diubah",
          text: "Silahkan login kembali dengan email dan password baru Anda",
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
        });
        Router.push("/login");
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <section className="w-full h-screen bg-white flex flex-col justify-center items-center">
      <div className="pb-[8vw] sm:pb-12">
        <img
          src="/logo/logo-explore-kuliner-v2.svg"
          alt="logo-explore-kuliner"
          className="w-[32vw] sm:w-52 lg:w-52"
        />
      </div>
      <div className="w-3/4 lg:w-1/2 xl:w-1/3 p-[4vw] sm:p-4 rounded-[2vw] sm:rounded-lg shadow-lg text-center border-secondary border-t-4 bg-primary">
        <div className="p-[2vw] sm:p-4">
          {moment(data_user.expired_at) > moment() &&
          data_user.is_used == "N" ? (
            <>
              <p className="font-bold text-[4vw] sm:text-2xl pb-[2vw] sm:pb-4">
                Reset Password
              </p>
              <p className="text-[3vw] sm:text-lg pb-[3vw] sm:pb-6">
                Terima kasih telah mengonfirmasi alamat email Anda. Sekarang,
                Anda dapat membuat kata sandi baru akun Anda. Silakan masukkan
                kata sandi baru di bawah ini.
              </p>
              <form>
                <div className="pb-[6vw] sm:pb-6 text-left">
                  <label
                    htmlFor="password"
                    className="text-[3vw] sm:text-lg font-normal"
                  >
                    Password Baru
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
                      className="w-[10vw] sm:w-12 mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-r-[2vw] sm:rounded-r-lg text-[3.5vw] sm:text-base cursor-pointer bg-primary border-mediumGray border-2 focus:border-none"
                      onClick={(e) => handleShowPassword(e, "password")}
                    />
                  </div>
                </div>
                <div className="pb-[6vw] sm:pb-6 text-left">
                  <label
                    htmlFor="password_confirm"
                    className="text-[3vw] sm:text-lg font-normal"
                  >
                    Konfirmasi Password Baru
                  </label>
                  <div className="flex">
                    <input
                      type={showPasswordConfirm ? "text" : "password"}
                      name="password_confirm"
                      placeholder="********"
                      value={input.password_confirm}
                      onChange={(e) =>
                        handleInputChange(e.target.value, "password_confirm")
                      }
                      className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-l-[2vw] sm:rounded-l-lg text-[3.5vw] sm:text-base bg-primary border-mediumGray border-2 focus:border-none"
                      required
                    />
                    <input
                      type="image"
                      src={
                        showPasswordConfirm
                          ? "/images/open-eye.png"
                          : "/images/closed-eye.png"
                      }
                      alt={showPasswordConfirm ? "Open Eye" : "Closed Eye"}
                      className="w-[10vw] sm:w-12 mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-r-[2vw] sm:rounded-r-lg text-[3.5vw] sm:text-base cursor-pointer bg-primary border-mediumGray border-2 focus:border-none"
                      onClick={(e) => handleShowPassword(e, "password_confirm")}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-secondary px-[6vw] sm:px-8 py-[1.3vw] sm:py-2 rounded-[2vw] sm:rounded-lg text-[3.5vw] sm:text-base text-primary my-[3vw] sm:my-4"
                  onClick={(e) => handleResetPassword(e)}
                >
                  Reset Password
                </button>
              </form>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-secondary px-[6vw] sm:px-8 py-[1.3vw] sm:py-2 rounded-[2vw] sm:rounded-lg text-[3.5vw] sm:text-base text-primary my-[3vw] sm:my-4">
                Ke Halaman Login
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-[3vw] sm:gap-5 pt-[6vw] sm:pt-8">
        <SocialMedia background="color" />
      </div>
      <p className="text-black text-center text-[3vw] sm:text-sm sm:text-start font-semibold pt-[3vw] sm:pt-4">
        © copyrights Explorekuliner.com - 2023
      </p>
    </section>
  );
};

export async function getServerSideProps(context) {
  const { token } = context.query;
  let data_user = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/${process.env.NEXT_PUBLIC_VER}/reset-password/verify/${token}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });

  if (!data_user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data_user: data_user,
    },
  };
}

export default token;
