import React from "react";
import Breadcrumb from "../components/main/Breadcrumb";
import FilterRestoranMobile from "../components/main/restoran/FilterRestoranMobile";
import FilterRestoran from "../components/main/restoran/FilterRestoran";
import ListVideo from "../components/main/ListVideo";
import ListArtikel from "../components/main/ListArtikel";

const Index = () => {
  const breadcrumbData = [
    {
      label: "Restoran",
      link: "/restoran",
    },
  ];

  return (
    <>
      <Breadcrumb data={breadcrumbData} />
      <FilterRestoranMobile />
      <FilterRestoran />
      <ListVideo />
      <ListArtikel />
    </>
  );
};

export default Index;
