import React from "react";
import axios from "axios";
import { getSession } from "next-auth/react";
import Breadcrumb from "../../components/main/Breadcrumb";
import TentangArtikel from "../../components/main/artikel/detail/TentangArtikel";
import ListArtikel from "../../components/main/ListArtikel";

const Detail = (props) => {
  const { isLoggedIn } = props;

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
      <TentangArtikel {...{ isLoggedIn }} />
      <ListArtikel />
    </>
  );
};
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  let isLoggedIn = false;

  if (session) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${session.user.token}`;
    isLoggedIn = true;
  }

  return {
    props: {
      isLoggedIn,
    },
  };
}

export default Detail;
