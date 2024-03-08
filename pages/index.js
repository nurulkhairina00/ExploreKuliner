import axios from "axios";
import { getSession } from "next-auth/react";
import Hero from "./components/main/beranda/Hero";
import Kategori from "./components/main/beranda/Kategori";
import ListVideo from "./components/main/ListVideo";
import RestoranPopuler from "./components/main/beranda/RestoranPopuler";
import RestoranBaru from "./components/main/beranda/RestoranBaru";
import RestoranTerdekat from "./components/main/beranda/RestoranTerdekat";
import ListArtikel from "./components/main/ListArtikel";

export default function Home(props) {
  const { isLoggedIn } = props;

  return (
    <>
      <Hero {...{ isLoggedIn }} />
      <Kategori />
      <ListVideo />
      <RestoranPopuler />
      <RestoranBaru />
      <RestoranTerdekat />
      <ListArtikel />
    </>
  );
}

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
