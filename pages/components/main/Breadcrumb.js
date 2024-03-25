import Link from "next/link";
import React from "react";

const Breadcrumb = (props) => {
  const { data } = props;

  return (
    <section className="flex px-[8vw] pb-[2vw] pt-[30vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-4 sm:pt-40">
      <ol className="flex items-center px-0 sm:px-4 xl:px-0">
        <li className="text-gray text-[3.5vw] sm:text-base">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4vw"
              height="4vw"
              viewBox="0 0 512 512"
              className="sm:w-[16px] sm:h-[16px]"
            >
              <path
                fill="#8F8F9D"
                d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
              />
              <path
                fill="#8F8F9D"
                d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"
              />
            </svg>
          </Link>
        </li>
        {data.map((item, index) => (
          <li
            key={index}
            className={`flex items-center text-[3.5vw] sm:text-base font-medium ${
              data.length === index + 1 ? "text-secondary" : "text-gray"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4vw"
              height="4vw"
              viewBox="0 0 24 24"
              className="sm:w-[24px] sm:h-[24px]"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m10 17l5-5l-5-5"
              />
            </svg>
            {data.length === index + 1 ? (
              item.label
            ) : (
              <Link href={item.link}>
                <a>{item.label}</a>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Breadcrumb;
