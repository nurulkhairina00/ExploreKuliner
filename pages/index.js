import Head from "next/head";
import { getSession } from "next-auth/react";
import Hero from "./components/beranda/Hero";
import Kategori from "./components/beranda/Kategori";
import ListVideo from "./components/layout/ListVideo";
import RestoranPopuler from "./components/beranda/RestoranPopuler";
import RestoranBaru from "./components/beranda/RestoranBaru";
import RestoranTerdekat from "./components/beranda/RestoranTerdekat";
import ListArtikel from "./components/layout/ListArtikel";
import Footer from "./components/layout/Footer";
import axios from "axios";

export default function Home(props) {
  const { isLoggedIn } = props;

  return (
    <>
      <Head>
        <title>Explore Kuliner</title>
      </Head>
      <div className="bg-primary">
        <Hero isLoggedIn={isLoggedIn} />
        <Kategori />
        <ListVideo />
        <RestoranPopuler />
        <RestoranBaru />
        <RestoranTerdekat />
        <ListArtikel />
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  let isLoggedIn = false;

  if (session) {
    axios.defaults.headers.common["authorization"] = session.user.token;
    isLoggedIn = true;
  }

  return {
    props: {
      isLoggedIn,
    },
  };
}
