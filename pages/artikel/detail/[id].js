import React from "react";
import Navbar from "../../components/navbar";
import Breadcrumb from "../../components/main/Breadcrumb";
import TentangArtikel from "../../components/main/artikel/detail/TentangArtikel";
import ListArtikel from "../../components/main/ListArtikel";
import Footer from "../../components/footer";

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
