import Head from "next/head";
import Hero from "./components/beranda/Hero";
import Kategori from "./components/beranda/Kategori";
import Video from "./components/beranda/ListVideo";
import RestoranPopuler from "./components/beranda/RestoranPopuler";
import RestoranBaru from "./components/beranda/RestoranBaru";
import RestoranTerdekat from "./components/beranda/RestoranTerdekat";
import Article from "./components/layout/ListArtikel";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Explore Kuliner</title>
      </Head>
      <div className="bg-primary">
        <Hero />
        <Kategori />
        <Video />
        <RestoranPopuler />
        <RestoranBaru />
        <RestoranTerdekat />
        <Article />
        <Footer />
      </div>
    </>
  );
}
