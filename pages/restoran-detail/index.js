import React from "react";
import Navbar from "../../components/layout/navbar";
import Tentang from "../../components/restoran-details/tentangRestoran";
import Article from "../../components/layout/article";
import Footer from "../../components/layout/footer";

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
