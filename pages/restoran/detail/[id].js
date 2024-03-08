import React from "react";
import { getSession } from "next-auth/react";
import Navbar from "../../components/navbar";
import Breadcrumb from "../../components/main/Breadcrumb";
import TentangRestoran from "../../components/main/restoran/detail/TentangRestoran";
import RestoranSerupa from "../../components/main/restoran/detail/RestoranSerupa";
import ListArtikel from "../../components/main/ListArtikel";
import Footer from "../../components/footer";
import axios from "axios";

const Detail = (props) => {
  const { session } = props;

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

  if (session)
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${session.user.token}`;

  return {
    props: {
      session,
    },
  };
}

export default Detail;
