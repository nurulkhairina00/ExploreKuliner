/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { getSession } from "next-auth/react";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/main/Breadcrumb";
import Profile from "../components/main/profile";
import Footer from "../components/footer";
import axios from "axios";

const index = (props) => {
  const { session, data_user } = props;
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${session.user.token}`;

  const breadcrumbData = [
    {
      label: "Profile",
      link: "/profile",
    },
  ];

  const [input, setInput] = useState({
    id: data_user.id,
    nama: data_user.nama_lengkap,
    email: data_user.email,
    no_hp: data_user.no_hp,
    foto_temp: data_user.image ? data_user.image : "",
    upload_foto: "",
    imagePreview: data_user.image?.includes("https://")
      ? data_user.image
      : data_user.image !== null
      ? `${process.env.API_APP_PATH}:${process.env.API_APP_PORT}/` +
        data_user.image
      : "",
  });

  return (
    <>
      <Navbar />
      <Breadcrumb data={breadcrumbData} />
      <Profile {...{ input, setInput }} />
      <Footer />
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

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${session.user.token}`;

  let data_user = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/${process.env.NEXT_PUBLIC_VER}/profile/get-data-user/${session.user.id}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });

  return {
    props: {
      session,
      data_user,
    },
  };
}

export default index;
