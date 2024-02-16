import React from "react";
import Navbar from "../../components/layout/Navbar";
import TentangArtikel from "../../components/artikel/detail/TentangArtikel";
import ListArtikel from "../../components/layout/ListArtikel";
import Footer from "../../components/layout/Footer";

const Detail = () => {
  return (
    <>
      <Navbar />
      <TentangArtikel />
      <ListArtikel />
      <Footer />
    </>
  );
};

export default Detail;
