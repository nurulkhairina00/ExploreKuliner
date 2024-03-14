import React from "react";
import Link from "next/link";
import SocialMedia from "../main/SocialMedia";

const Footer = () => {
  return (
    <section className="bg-black p-[8vw] sm:px-8 md:px-16 lg:px-28 xl:px-36 sm:py-10">
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
        <Link href="/about/tentang-kami">
          <a className="text-[3.5vw] sm:text-base text-white">Tentang Kami</a>
        </Link>
        <Link href="/about/kebijakan-privasi">
          <a className="text-[3.5vw] sm:text-base text-white">
            Kebijakan Privasi
          </a>
        </Link>
        <Link href="/about/faqs">
          <a className="text-[3.5vw] sm:text-base text-white">Faqs</a>
        </Link>
        <Link href="/about/hubungi-kami">
          <a className="text-[3.5vw] sm:text-base text-white">Hubungi Kami</a>
        </Link>
      </div>

      <p className="text-white text-center text-[3vw] sm:text-sm sm:text-start font-semibold">
        © copyrights Explorekuliner.com - 2023
      </p>
    </section>
  );
};

export default Footer;
