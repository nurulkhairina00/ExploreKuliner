import React from "react";
import Navbar from "../../components/layout/Navbar";
import Breadcrumb from "../../components/layout/Breadcrumb";
import TentangRestoran from "../../components/restoran/detail/TentangRestoran";
import RestoranSerupa from "../../components/restoran/detail/RestoranSerupa";
import ListArtikel from "../../components/layout/ListArtikel";
import Footer from "../../components/layout/Footer";

const Detail = () => {
  let breadcrumbData = [
    {
      label: "Restoran",
      link: "/restoran",
    },
    {
      label: "Detail Restoran",
      link: "/restoran/detail",
    },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb data={breadcrumbData} />
      <TentangRestoran />
      <RestoranSerupa />
      <ListArtikel />
      <Footer />
    </>
  );
};

export default Detail;
