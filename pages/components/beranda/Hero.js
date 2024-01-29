import React, { useState } from "react";
import Link from "next/link";
import ModalOption from "../layout/ModalOption";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("");

  const handleOpenModal = (value) => {
    setType(value);
    setShowModal(!showModal);
  };

  return (
    <section className="w-full h-96 bg-[url(/images/bg-hero.jpg)] bg-cover bg-[50%_50%] p-[5vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:py-10">
      {/* Tampilan Masuk Mobile */}
      <div className="flex justify-end items-end pb-7 sm:hidden">
        <Link href="/masuk-reviewer">
          <div className="flex p-4 rounded-full bg-secondary w-8 h-8 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              width="12"
              viewBox="0 0 448 512"
              className="flex-shrink-0"
            >
              <path
                fill="#f4f4f4"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* Tampilan Masuk Tablet dan Desktop */}
      <div className="flex justify-between pb-7">
        {/* Icon Social Media */}
        <div className="hidden sm:flex flex-row gap-[3vw] sm:gap-5">
          <div className="w-[6vw] h-[6vw] sm:w-11 sm:h-11 bg-primary rounded-full flex justify-center items-center cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5025 3.49206C19.3968 2.38078 18.0798 1.49967 16.6283 0.90013C15.1768 0.300592 13.6198 -0.00537612 12.0482 7.14833e-05C5.46332 7.14833e-05 0.0964826 5.34005 0.0964826 11.892C0.0964826 13.992 0.651256 16.032 1.68844 17.832L0 24L6.33166 22.344C8.0804 23.292 10.0462 23.796 12.0482 23.796C18.6332 23.796 24 18.456 24 11.904C24 8.72405 22.7578 5.73605 20.5025 3.49206ZM12.0482 21.78C10.2633 21.78 8.51457 21.3 6.98291 20.4L6.6211 20.184L2.85829 21.168L3.8593 17.52L3.61809 17.148C2.62643 15.5724 2.09987 13.7511 2.09849 11.892C2.09849 6.44405 6.5608 2.00407 12.0362 2.00407C14.6894 2.00407 17.1859 3.03606 19.0553 4.90806C19.9809 5.82481 20.7144 6.91525 21.2133 8.11616C21.7123 9.31707 21.9667 10.6046 21.9618 11.904C21.9859 17.352 17.5236 21.78 12.0482 21.78ZM17.4995 14.388C17.198 14.244 15.7266 13.524 15.4613 13.416C15.1839 13.32 14.991 13.272 14.7859 13.56C14.5809 13.86 14.0141 14.532 13.8452 14.724C13.6764 14.928 13.4955 14.952 13.194 14.796C12.8925 14.652 11.9276 14.328 10.794 13.32C9.90151 12.528 9.31055 11.556 9.12965 11.256C8.9608 10.956 9.10553 10.8 9.26231 10.644C9.39497 10.512 9.56382 10.296 9.70854 10.128C9.85327 9.96004 9.91357 9.82804 10.01 9.63604C10.1065 9.43204 10.0583 9.26404 9.98593 9.12004C9.91357 8.97605 9.31055 7.51205 9.06935 6.91205C8.82814 6.33605 8.57487 6.40805 8.39397 6.39605H7.81507C7.61005 6.39605 7.29648 6.46805 7.01909 6.76805C6.75377 7.06805 5.98191 7.78805 5.98191 9.25204C5.98191 10.716 7.05528 12.132 7.2 12.324C7.34472 12.528 9.31055 15.528 12.3015 16.812C13.0131 17.124 13.5678 17.304 14.002 17.436C14.7136 17.664 15.3648 17.628 15.8834 17.556C16.4623 17.472 17.6563 16.836 17.8975 16.14C18.1508 15.444 18.1508 14.856 18.0663 14.724C17.9819 14.592 17.801 14.532 17.4995 14.388Z"
                fill="#333333"
              />
            </svg>
          </div>
          <div className="w-[6vw] h-[6vw] sm:w-11 sm:h-11 bg-primary rounded-full flex justify-center items-center cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.96 0H17.04C20.88 0 24 3.12 24 6.96V17.04C24 18.8859 23.2667 20.6562 21.9615 21.9615C20.6562 23.2667 18.8859 24 17.04 24H6.96C3.12 24 0 20.88 0 17.04V6.96C0 5.11409 0.733284 3.34379 2.03854 2.03854C3.34379 0.733284 5.11409 0 6.96 0ZM6.72 2.4C5.57426 2.4 4.47546 2.85514 3.6653 3.6653C2.85514 4.47546 2.4 5.57426 2.4 6.72V17.28C2.4 19.668 4.332 21.6 6.72 21.6H17.28C18.4257 21.6 19.5245 21.1449 20.3347 20.3347C21.1449 19.5245 21.6 18.4257 21.6 17.28V6.72C21.6 4.332 19.668 2.4 17.28 2.4H6.72ZM18.3 4.2C18.6978 4.2 19.0794 4.35804 19.3607 4.63934C19.642 4.92064 19.8 5.30218 19.8 5.7C19.8 6.09783 19.642 6.47936 19.3607 6.76066C19.0794 7.04197 18.6978 7.2 18.3 7.2C17.9022 7.2 17.5206 7.04197 17.2393 6.76066C16.958 6.47936 16.8 6.09783 16.8 5.7C16.8 5.30218 16.958 4.92064 17.2393 4.63934C17.5206 4.35804 17.9022 4.2 18.3 4.2ZM12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6ZM12 8.4C11.0452 8.4 10.1295 8.77928 9.45442 9.45442C8.77928 10.1295 8.4 11.0452 8.4 12C8.4 12.9548 8.77928 13.8705 9.45442 14.5456C10.1295 15.2207 11.0452 15.6 12 15.6C12.9548 15.6 13.8705 15.2207 14.5456 14.5456C15.2207 13.8705 15.6 12.9548 15.6 12C15.6 11.0452 15.2207 10.1295 14.5456 9.45442C13.8705 8.77928 12.9548 8.4 12 8.4Z"
                fill="#333333"
              />
            </svg>
          </div>
          <div className="w-[6vw] h-[6vw] sm:w-11 sm:h-11 bg-primary rounded-full flex justify-center items-center cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0408 3.76C17.9945 2.7195 17.4179 1.38324 17.4184 0H12.6888V16.5333C12.6523 17.428 12.2187 18.2755 11.4792 18.8973C10.7398 19.519 9.75222 19.8665 8.72449 19.8667C6.55102 19.8667 4.7449 18.32 4.7449 16.4C4.7449 14.1067 7.28571 12.3867 9.90306 13.0933V8.88C4.62245 8.26667 0 11.84 0 16.4C0 20.84 4.22449 24 8.70918 24C13.5153 24 17.4184 20.6 17.4184 16.4V8.01333C19.3362 9.21313 21.6388 9.85686 24 9.85333V5.73333C24 5.73333 21.1224 5.85333 19.0408 3.76Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>

        {/* Daftar dan Masuk */}
        <div className="flex">
          <button
            type="button"
            className="px-7 py-2 rounded-full bg-primary mx-2 hidden sm:block"
            onClick={() => handleOpenModal("daftar")}
          >
            <span className="text-secondary font-bold">Daftar</span>
          </button>

          <button
            type="button"
            className="px-7 py-[6px] rounded-full border-secondary border-2 mx-2 hidden sm:block"
            onClick={() => handleOpenModal("masuk")}
          >
            <span className="text-secondary font-bold">Masuk</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-primary font-bold text-center text-4xl sm:text-5xl lg:text-6xl py-10">
          Explore Kuliner
        </h1>
        <div className="hidden sm:flex flex-row w-full lg:w-3/4 bg-primary rounded-full shadow-lg">
          {/* Select Lokasi Restoran */}
          <div className="flex justify-center items-center w-1/2 ps-5">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5 13.5C25.5 11.5109 24.7098 9.60322 23.3033 8.1967C21.8968 6.79018 19.9891 6 18 6C16.0109 6 14.1032 6.79018 12.6967 8.1967C11.2902 9.60322 10.5 11.5109 10.5 13.5C10.5 16.089 12.99 21.0465 18 27.9795C23.01 21.0465 25.5 16.089 25.5 13.5ZM18 33C10.9995 23.865 7.5 17.3655 7.5 13.5C7.5 10.7152 8.60625 8.04451 10.5754 6.07538C12.5445 4.10625 15.2152 3 18 3C20.7848 3 23.4555 4.10625 25.4246 6.07538C27.3938 8.04451 28.5 10.7152 28.5 13.5C28.5 17.3655 25.0005 23.865 18 33ZM18 19.5C16.4087 19.5 14.8826 18.8679 13.7574 17.7426C12.6321 16.6174 12 15.0913 12 13.5C12 11.9087 12.6321 10.3826 13.7574 9.25736C14.8826 8.13214 16.4087 7.5 18 7.5C19.5913 7.5 21.1174 8.13214 22.2426 9.25736C23.3679 10.3826 24 11.9087 24 13.5C24 15.0913 23.3679 16.6174 22.2426 17.7426C21.1174 18.8679 19.5913 19.5 18 19.5ZM18 16.5C18.7956 16.5 19.5587 16.1839 20.1213 15.6213C20.6839 15.0587 21 14.2956 21 13.5C21 12.7044 20.6839 11.9413 20.1213 11.3787C19.5587 10.8161 18.7956 10.5 18 10.5C17.2044 10.5 16.4413 10.8161 15.8787 11.3787C15.3161 11.9413 15 12.7044 15 13.5C15 14.2956 15.3161 15.0587 15.8787 15.6213C16.4413 16.1839 17.2044 16.5 18 16.5Z"
                fill="#8F8F9D"
              />
            </svg>

            <div className="relative w-full">
              <select className="block appearance-none w-full bg-primary p-2 focus:outline-none">
                <option disabled>Lokasi</option>
                <option>Jakarta Pusat</option>
                <option>Jakarta Selatan</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12L4 6h12z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Border */}
          <div className="relative flex justify-center items-center">
            <div className="border-[1.5px] h-12 border-gray mx-3"></div>
          </div>

          {/* Input Search Restoran */}
          <div className="flex justify-center items-center w-1/2 bg-primary">
            <svg
              width="29"
              height="32"
              viewBox="0 0 29 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.1939 2.98376L23.6622 26.0106C24.0506 26.4476 24.2688 27.0402 24.2688 27.6581C24.2688 28.2761 24.0506 28.8687 23.6622 29.3056C23.2738 29.7424 22.747 29.9878 22.1978 29.9878C21.6486 29.9878 21.1218 29.7424 20.7333 29.3056L15.7333 23.5838C15.4061 23.21 15.2226 22.7065 15.2222 22.1819V21.8363C15.2223 21.5714 15.1755 21.3091 15.0848 21.0647C14.994 20.8203 14.8609 20.5986 14.6933 20.4125L14.0478 19.7419C13.8286 19.5144 13.5621 19.3526 13.2728 19.2713C12.9835 19.1901 12.6807 19.192 12.3922 19.2769C11.9373 19.4105 11.4593 19.4079 11.0055 19.2694C10.5518 19.1309 10.1381 18.8614 9.80556 18.4875L5.05945 13.1475C2.2439 9.98001 1.20778 5.19689 3.1939 2.98376Z"
                stroke="#8F8F9D"
                strokeWidth="2.5625"
                strokeLinejoin="round"
              />
              <path
                d="M22.2222 2L17.9306 6.82813C17.6003 7.19957 17.3383 7.64057 17.1596 8.12593C16.9809 8.6113 16.8889 9.13151 16.8889 9.65688V10.5856C16.8889 10.717 16.8659 10.8472 16.8212 10.9685C16.7765 11.0899 16.711 11.2002 16.6283 11.2931L16 12M17.7778 14L18.4061 13.2931C18.4887 13.2002 18.5867 13.1264 18.6946 13.0762C18.8025 13.0259 18.9182 13 19.035 13H19.8606C20.3276 13 20.79 12.8965 21.2214 12.6954C21.6528 12.4944 22.0448 12.1997 22.375 11.8281L26.6667 7M24.4445 4.5L20 9.5M11.1111 23L5.57112 29.2675C5.15439 29.7362 4.58926 29.9995 4.00001 29.9995C3.41075 29.9995 2.84562 29.7362 2.4289 29.2675C2.01229 28.7987 1.77826 28.1629 1.77826 27.5C1.77826 26.8371 2.01229 26.2013 2.4289 25.7325L7.11112 20.5"
                stroke="#8F8F9D"
                strokeWidth="2.5625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="relative w-full">
              <input
                type="text"
                name="restoran"
                placeholder="Cari restoran"
                className="bg-primary p-2 w-full focus:outline-none"
              />
            </div>
          </div>

          {/* Button Search Restoran */}
          <Link href="/restoran-filter">
            <div className="p-2 rounded-full m-3 bg-secondary z-10 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      {showModal && (
        <ModalOption
          showModal={showModal}
          setShowModal={setShowModal}
          type={type}
        />
      )}
    </section>
  );
};

export default Hero;
