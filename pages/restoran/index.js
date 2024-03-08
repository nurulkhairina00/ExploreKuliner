import React from "react";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/main/Breadcrumb";
import FilterRestoranMobile from "../components/main/restoran/FilterRestoranMobile";
import FilterRestoran from "../components/main/restoran/FilterRestoran";
import ListVideo from "../components/main/ListVideo";
import ListArtikel from "../components/main/ListArtikel";
import Footer from "../components/footer";

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
