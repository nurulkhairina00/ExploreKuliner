import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-primary fixed shadow-md p-[5vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:py-7 z-10">
      <div className="flex justify-between">
        <h6 className="text-xl text-secondary font-bold">ExploreKuliner</h6>

        {/* Tampilan Masuk Tablet dan Desktop */}
        <div className="flex">
          {/* Daftar dan Masuk */}
          <Link href="/daftar-reviewer">
            <button
              type="button"
              className="px-7 py-2 rounded-full bg-primary mx-2 hidden sm:block"
            >
              <span className="text-secondary font-bold">Daftar</span>
            </button>
          </Link>

          <Link href="/masuk-reviewer">
            <button
              type="button"
              className="px-7 py-[6px] rounded-full border-secondary border-2 mx-2 hidden sm:block"
            >
              <span className="text-secondary font-bold">Masuk</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
