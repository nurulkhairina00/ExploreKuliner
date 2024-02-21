import React from "react";
import Navbar from "../../components/layout/Navbar";
import Breadcrumb from "../../components/layout/Breadcrumb";
import TentangArtikel from "../../components/artikel/detail/TentangArtikel";
import ListArtikel from "../../components/layout/ListArtikel";
import Footer from "../../components/layout/Footer";

const Detail = () => {
  const breadcrumbData = [
    {
      label: "Artikel",
      link: "/artikel",
    },
    {
      label: "Detail Artikel",
      link: "/artikel/detail",
    },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb data={breadcrumbData} />
      <TentangArtikel />
      <ListArtikel />
      <Footer />
    </>
  );
};

export default Detail;
