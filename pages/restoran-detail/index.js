import React from "react";
import Navbar from "../components/layout/Navbar";
import TentangRestoran from "../components/restoran-details/tentangRestoran";
import RestoranSerupa from "../components/restoran-details/RestoranSerupa";
import ListArtikel from "../components/layout/ListArtikel";
import Footer from "../components/layout/Footer";

const Index = () => {
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

export default Index;
