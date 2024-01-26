import React from "react";
import Navbar from "../../components/layout/navbar";
import Filter from "../../components/filter/filter";
import Video from "../../components/beranda/video";
import Artikel from "../../components/beranda/article";
import Footer from "../../components/layout/footer";

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
