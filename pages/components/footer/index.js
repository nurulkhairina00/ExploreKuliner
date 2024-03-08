import React from "react";
import Link from "next/link";
import SocialMedia from "../main/SocialMedia";

const Footer = () => {
  return (
    <section className="bg-black p-[8vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h6 className="text-[4vw] sm:text-lg text-primary font-semibold">
          Ikuti Kami
        </h6>

        {/* Icon Social Media */}
        <div className="flex flex-row gap-[3vw] sm:gap-5 py-[1.5vw] sm:py-3">
          <SocialMedia />
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
