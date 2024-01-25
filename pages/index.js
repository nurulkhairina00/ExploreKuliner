import Head from "next/head";
import Hero from "../components/beranda/hero";
import Kategori from "../components/beranda/kategori";
// import Video from "../components/beranda/video";
import RestoranPopuler from "../components/beranda/restoranPopuler";
import RestoranBaru from "../components/beranda/restoranBaru";
import RestoranTerdekat from "../components/beranda/restoranTerdekat";
import Article from "../components/beranda/article";
import Footer from "../components/layout/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Explore Kuliner</title>
      </Head>
      <div className="bg-primary">
        <Hero />
        <Kategori />
        {/* <Video /> */}
        <RestoranPopuler />
        <RestoranBaru />
        <RestoranTerdekat />
        <Article />
        <Footer />
      </div>
    </>
  );
}
