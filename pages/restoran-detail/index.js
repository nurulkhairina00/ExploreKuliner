import React from "react";
import Navbar from "../components/layout/Navbar";
import Tentang from "../components/restoran-details/TentangRestoran";
import Article from "../components/layout/ListArtikel";
import Footer from "../components/layout/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Tentang />
      <Article />
      <Footer />
    </>
  );
};

export default Index;
