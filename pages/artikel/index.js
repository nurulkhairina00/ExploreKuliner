import React from "react";
import Navbar from "../components/layout/Navbar";
import Breadcrumb from "../components/layout/Breadcrumb";
import ListArtikel from "../components/artikel/ListArtikel";
import Footer from "../components/layout/Footer";

const Index = () => {
  const breadcrumbData = [
    {
      label: "Artikel",
      link: "/artikel",
    },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb data={breadcrumbData} />
      <ListArtikel />
      <Footer />
    </>
  );
};

export default Index;
