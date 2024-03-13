import React from "react";
import { getSession } from "next-auth/react";
import axios from "axios";
import Breadcrumb from "../../components/main/Breadcrumb";
import AddArtikel from "../../components/main/artikel/add";

const index = (props) => {
  const { session } = props;
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${session.user.token}`;

  const breadcrumbData = [
    {
      label: "Artikel",
      link: "/artikel",
    },
  ];

  return (
    <>
      <Breadcrumb data={breadcrumbData} />
      <AddArtikel />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

export default index;
