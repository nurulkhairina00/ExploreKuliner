import React from "react";
import Navbar from "../components/layout/Navbar";
import Breadcrumb from "../components/layout/Breadcrumb";
import Filter from "../components/restoran/FilterRestoran";
import ListVideo from "../components/layout/ListVideo";
import ListArtikel from "../components/layout/ListArtikel";
import Footer from "../components/layout/Footer";

const Index = () => {
  let breadcrumbData = [
    {
      label: "Restoran",
      link: "/restoran",
    },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb data={breadcrumbData} />
      <Filter />
      <ListVideo />
      <ListArtikel />
      <Footer />
    </>
  );
};

export default Index;
