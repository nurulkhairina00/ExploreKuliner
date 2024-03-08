import React from "react";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/main/Breadcrumb";
import ListArtikel from "../components/main/artikel/ListArtikel";
import Footer from "../components/footer";

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
