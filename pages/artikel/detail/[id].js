import React from "react";
import Breadcrumb from "../../components/main/Breadcrumb";
import TentangArtikel from "../../components/main/artikel/detail/TentangArtikel";
import ListArtikel from "../../components/main/ListArtikel";

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
      <Breadcrumb data={breadcrumbData} />
      <TentangArtikel />
      <ListArtikel />
    </>
  );
};

export default Detail;
