import React from "react";
import Navbar from "../../components/layout/Navbar";
import TentangRestoran from "../../components/restoran/detail/TentangRestoran";
import RestoranSerupa from "../../components/restoran/detail/RestoranSerupa";
import ListArtikel from "../../components/layout/ListArtikel";
import Footer from "../../components/layout/Footer";

const Detail = () => {
  return (
    <>
      <Navbar />
      <TentangRestoran />
      <RestoranSerupa />
      <ListArtikel />
      <Footer />
    </>
  );
};

export default Detail;
