import React from "react";
import Navbar from "../components/layout/Navbar";
import Filter from "../components/restoran-filter/FilterRestoran";
import Video from "../components/beranda/ListVideo";
import Artikel from "../components/layout/ListArtikel";
import Footer from "../components/layout/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Filter />
      <Video />
      <Artikel />
      <Footer />
    </>
  );
};

export default Index;
