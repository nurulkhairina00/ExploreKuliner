import React from "react";
import Breadcrumb from "../components/main/Breadcrumb";
import ListArtikel from "../components/main/artikel/ListArtikel";

const Index = () => {
  const breadcrumbData = [
    {
      label: "Artikel",
      link: "/artikel",
    },
  ];

  return (
    <>
      <Breadcrumb data={breadcrumbData} />
      <ListArtikel />
    </>
  );
};

export default Index;
