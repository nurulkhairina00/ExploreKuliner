import React from "react";
import Navbar from "../components/layout/Navbar";
import Filter from "../components/restoran-filter/FilterRestoran";
import ListVideo from "../components/beranda/ListVideo";
import ListArtikel from "../components/layout/ListArtikel";
import Footer from "../components/layout/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Filter />
      <ListVideo />
      <ListArtikel />
      <Footer />
    </>
  );
};

export default Index;
