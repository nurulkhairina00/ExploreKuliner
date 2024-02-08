import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-black p-[8vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h6 className="text-[4vw] sm:text-lg text-primary font-semibold">
          Ikuti Kami
        </h6>

        {/* Icon Social Media */}
        <div className="flex flex-row gap-[3vw] sm:gap-5 py-[1.5vw] sm:py-3">
          <div className="w-[7vw] h-[7vw] sm:w-11 sm:h-11 bg-white rounded-full flex justify-center items-center cursor-pointer">
            <svg
              className="sm:w-[24px] sm:h-[24px]"
              width="4vw"
              height="4vw"
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
          <div className="w-[7vw] h-[7vw] sm:w-11 sm:h-11 bg-white rounded-full flex justify-center items-center cursor-pointer">
            <svg
              className="sm:w-[24px] sm:h-[24px]"
              width="4vw"
              height="4vw"
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
          <div className="w-[7vw] h-[7vw] sm:w-11 sm:h-11 bg-white rounded-full flex justify-center items-center cursor-pointer">
            <svg
              className="sm:w-[24px] sm:h-[24px]"
              width="4vw"
              height="4vw"
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
      </div>

      {/* Menu */}
      <div className="flex flex-wrap gap-[3vw] sm:gap-8 justify-center items-center sm:item-start sm:justify-start py-[2vw] sm:py-4">
        <Link href="/tentang-kami">
          <a className="text-[3.5vw] sm:text-base text-white">Tentang Kami</a>
        </Link>
        <Link href="/syarat-dan-ketentuan">
          <a className="text-[3.5vw] sm:text-base text-white">
            Syarat dan Ketentuan
          </a>
        </Link>
        <Link href="/faq">
          <a className="text-[3.5vw] sm:text-base text-white">Faq</a>
        </Link>
        <Link href="/hubungi-kami">
          <a className="text-[3.5vw] sm:text-base text-white">Hubungi Kami</a>
        </Link>
      </div>

      <p className="text-white text-center text-[3vw] sm:text-sm sm:text-start font-semibold">
        © copyrights Explorekuliner.com - 2024
      </p>
    </section>
  );
};

export default Footer;
