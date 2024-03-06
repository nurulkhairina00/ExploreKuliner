import React from "react";
import { getSession } from "next-auth/react";
import Navbar from "../../components/layout/Navbar";
import Breadcrumb from "../../components/layout/Breadcrumb";
import TentangRestoran from "../../components/restoran/detail/TentangRestoran";
import RestoranSerupa from "../../components/restoran/detail/RestoranSerupa";
import ListArtikel from "../../components/layout/ListArtikel";
import Footer from "../../components/layout/Footer";
import axios from "axios";

const Detail = (props) => {
  const { data } = props;

  const breadcrumbData = [
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

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const { id } = context.query;
  console.log("id", id);
  let dataResto = [{ no: 1, nama: "resto" }];

  if (session)
    axios.defaults.headers.common["authorization"] = session.user.token;

  return {
    props: {
      data: dataResto,
    },
  };
}

export default Detail;
