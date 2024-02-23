import React from "react";
import Navbar from "../components/layout/Navbar";
import Breadcrumb from "../components/layout/Breadcrumb";
import FilterRestoranMobile from "../components/restoran/FilterRestoranMobile";
import FilterRestoran from "../components/restoran/FilterRestoran";
import ListVideo from "../components/layout/ListVideo";
import ListArtikel from "../components/layout/ListArtikel";
import Footer from "../components/layout/Footer";

const Index = () => {
  const breadcrumbData = [
    {
      label: "Restoran",
      link: "/restoran",
    },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb data={breadcrumbData} />
      <FilterRestoranMobile />
      <FilterRestoran />
      <ListVideo />
      <ListArtikel />
      <Footer />
    </>
  );
};

export default Index;
