import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      {/* Tampilan Masuk Mobile */}
      <Link href="/login">
        <div className="flex p-[1vw] rounded-full bg-secondary w-[7vw] h-[7vw] justify-center items-center sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="3.5vw"
            width="3.5vw"
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

      {/* Daftar dan Masuk Tablet dan Desktop*/}
      <Link href="/register">
        <button
          type="button"
          className="px-7 py-3 rounded-full bg-primary hidden sm:block"
        >
          <span className="text-secondary font-bold">Daftar</span>
        </button>
      </Link>

      <Link href="/login">
        <button
          type="button"
          className="px-7 py-3 rounded-full bg-secondary hidden sm:block"
        >
          <span className="text-white font-bold">Masuk</span>
        </button>
      </Link>
    </>
  );
};

export default Login;
