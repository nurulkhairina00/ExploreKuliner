/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Select from "react-select";
import Breadcrumb from "../../components/main/Breadcrumb";

const index = () => {
  const breadcrumbData = [
    {
      label: "Kebijakan Privasi",
      link: "/kebijakan-privasi",
    },
  ];
  const [activeTab, setActiveTab] = useState("kebijakan");

  const [listKebijakan, setListKebijakan] = useState([
    {
      id: 1,
      nama_tab: "Kebijakan Privasi",
      key_tab: "kebijakan",
    },
    {
      id: 2,
      nama_tab: "Informasi pribadi yang kami kumpulkan",
      key_tab: "informasi",
    },
    {
      id: 3,
      nama_tab: "Mengapa kami memproses data Anda?",
      key_tab: "mengapa",
    },
    {
      id: 4,
      nama_tab: "Hak-hak Anda",
      key_tab: "hak",
    },
    {
      id: 5,
      nama_tab: "Link ke website lain",
      key_tab: "link",
    },
    {
      id: 6,
      nama_tab: "Keamanan informasi",
      key_tab: "keamanan",
    },
    {
      id: 7,
      nama_tab: "Pengungkapan hukum",
      key_tab: "pengungkapan",
    },
    {
      id: 8,
      nama_tab: "Informasi kontak",
      key_tab: "kontak",
    },
  ]);

  const handleSelect = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <Breadcrumb data={breadcrumbData} />
      <section className="flex justify-center items-center px-[8vw] pb-[8vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-10 sm:pt-0">
        <div className="w-full xl:w-3/4 rounded-[2vw] sm:rounded-lg shadow-lg p-[4vw] sm:p-8">
          <p className="text-[4vw] sm:text-2xl font-bold text-center mt-[2vw] sm:mt-4 mb-[4vw] sm:mb-8">
            Kebijakan Privasi
          </p>
          <div className="w-full mb-[4vw] sm:mb-8 px-[4vw] sm:px-8 md:hidden">
            <Select
              placeholder="Pilih Kebijakan"
              className="text-[3.5vw] sm:text-lg"
              options={listKebijakan.map((item) => ({
                label: item.nama_tab,
                value: item.key_tab,
              }))}
              value={{
                value: activeTab,
                label: listKebijakan.find((item) => item.key_tab === activeTab)
                  ? listKebijakan.find((item) => item.key_tab === activeTab)
                      .nama_tab
                  : "Pilih kebijakan",
              }}
              onChange={(e) => handleSelect(e.value)}
            />
          </div>
          <div className="flex">
            <div className="w-full md:w-1/3 lg:w-1/4 mb-8 hidden md:block">
              {listKebijakan.map((item) => (
                <button
                  key={item.id}
                  className={`block px-4 py-2 rounded-lg w-full text-left mb-3 text-lg ${
                    activeTab === item.key_tab
                      ? "bg-secondary text-white"
                      : "bg-mediumGray text-black"
                  }`}
                  onClick={() => setActiveTab(item.key_tab)}
                >
                  {item.nama_tab}
                </button>
              ))}
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4 px-[4vw] sm:px-8">
              {activeTab === "kebijakan" && (
                <div>
                  <p className="text-justify text-[3.5vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
                    Website explorekuliner.id dimiliki oleh Explore Kuliner,
                    yang akan menjadi pengontrol atas data pribadi Anda.
                  </p>
                  <p className="text-justify text-[3.5vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
                    Kami telah mengadopsi Kebijakan Privasi ini untuk
                    menjelaskan bagaimana kami memproses informasi yang
                    dikumpulkan oleh explorekuliner.id, yang juga menjelaskan
                    alasan mengapa kami perlu mengumpulkan data pribadi tertentu
                    tentang Anda. Oleh karena itu, Anda harus membaca Kebijakan
                    Privasi ini sebelum menggunakan website explorekuliner.id.
                  </p>
                  <p className="text-justify text-[3.5vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
                    Kami menjaga data pribadi Anda dan berjanji untuk menjamin
                    kerahasiaan dan keamanannya.
                  </p>
                </div>
              )}

              {activeTab === "informasi" && (
                <div>
                  <p className="text-justify text-[3vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
                    Saat Anda mengunjungi explorekuliner.id, kami secara
                    otomatis mengumpulkan informasi tertentu mengenai perangkat
                    Anda, termasuk informasi tentang browser web, alamat IP,
                    zona waktu, dan sejumlah cookie yang terinstal di perangkat
                    Anda. Selain itu, selama Anda menjelajahi Website, kami
                    mengumpulkan informasi tentang setiap halaman web atau
                    produk yang Anda lihat, website atau istilah pencarian apa
                    yang mengarahkan Anda ke Website, dan cara Anda berinteraksi
                    dengan Website. Kami menyebut informasi yang dikumpulkan
                    secara otomatis ini sebagai “Informasi Perangkat”. Kemudian,
                    kami mungkin akan mengumpulkan data pribadi yang Anda
                    berikan kepada kami (termasuk tetapi tidak terbatas pada,
                    Nama, Nama belakang, Alamat, informasi pembayaran, dll.)
                    selama pendaftaran untuk dapat memenuhi perjanjian.
                  </p>
                </div>
              )}

              {activeTab === "mengapa" && (
                <div>
                  <p className="text-justify text-[3vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
                    Menjaga data pelanggan agar tetap aman adalah prioritas
                    utama kami. Oleh karena itu, kami hanya dapat memproses
                    sejumlah kecil data pengguna, sebanyak yang benar-benar
                    diperlukan untuk menjalankan website. Informasi yang
                    dikumpulkan secara otomatis hanya digunakan untuk
                    mengidentifikasi kemungkinan kasus penyalahgunaan dan
                    menyusun informasi statistik terkait penggunaan website.
                    Informasi statistik ini tidak digabungkan sedemikian rupa
                    hingga dapat mengidentifikasi pengguna tertentu dari sistem.
                  </p>
                  <p className="text-justify text-[3vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
                    Anda dapat mengunjungi website tanpa memberi tahu kami
                    identitas Anda atau mengungkapkan informasi apa pun, yang
                    dapat digunakan oleh seseorang untuk mengidentifikasi Anda
                    sebagai individu tertentu yang dapat dikenali. Namun, jika
                    Anda ingin menggunakan beberapa fitur website, atau Anda
                    ingin menerima newsletter kami atau memberikan detail
                    lainnya dengan mengisi formulir, Anda dapat memberikan data
                    pribadi kepada kami, seperti email, nama depan, nama
                    belakang, kota tempat tinggal, organisasi, dan nomor telepon
                    Anda. Anda dapat memilih untuk tidak memberikan data pribadi
                    Anda kepada kami, tetapi Anda mungkin tidak dapat
                    memanfaatkan beberapa fitur website. Contohnya, Anda tidak
                    akan dapat menerima Newsletter kami atau menghubungi kami
                    secara langsung dari website. Pengguna yang tidak yakin
                    tentang informasi yang wajib diberikan dapat menghubungi
                    kami melalui <b>id.explorekuliner@gmail.com</b>.
                  </p>
                </div>
              )}

              {activeTab === "hak" && (
                <div>
                  <p className="text-justify text-[3vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
                    Jika Anda seorang warga Eropa, Anda memiliki hak-hak berikut
                    terkait data pribadi Anda:
                  </p>
                  <ul class="list-disc text-justify text-[3vw] sm:text-lg mb-[2vw] sm:mb-4 ms-8">
                    <li className="">Hak untuk mendapatkan penjelasan.</li>
                    <li className="">Hak atas akses.</li>
                    <li className="">Hak untuk memperbaiki.</li>
                    <li className="">Hak untuk menghapus.</li>
                    <li className="">Hak untuk membatasi pemrosesan.</li>
                    <li className="">Hak atas portabilitas data.</li>
                    <li className="">Hak untuk menolak.</li>
                    <li className="">
                      Hak-hak terkait pengambilan keputusan dan pembuatan profil
                      otomatis.
                    </li>
                  </ul>
                  <p className="text-justify text-[3vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
                    Jika Anda ingin menggunakan hak ini, silakan hubungi kami
                    melalui informasi kontak di bawah ini.
                  </p>
                  <p className="text-justify text-[3vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
                    Selain itu, jika Anda seorang warga Eropa, perlu diketahui
                    bahwa kami akan memproses informasi Anda untuk memenuhi
                    kontrak yang mungkin kami miliki dengan Anda (misalnya, jika
                    Anda melakukan pemesanan melalui Website), atau untuk
                    memenuhi kepentingan bisnis sah kami seperti yang tercantum
                    di atas. Di samping itu, harap diperhatikan bahwa informasi
                    Anda mungkin dapat dikirim ke luar Eropa, termasuk Kanada
                    dan Amerika Serikat.
                  </p>
                </div>
              )}

              {activeTab === "link" && (
                <div>
                  <p className="text-justify text-[3vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
                    Website kami mungkin berisi tautan ke website lain yang
                    tidak dimiliki atau dikendalikan oleh kami. Perlu diketahui
                    bahwa kami tidak bertanggung jawab atas praktik privasi
                    website lain atau pihak ketiga. Kami menyarankan Anda untuk
                    selalu waspada ketika meninggalkan website kami dan membaca
                    pernyataan privasi setiap website yang mungkin mengumpulkan
                    informasi pribadi.
                  </p>
                </div>
              )}

              {activeTab === "keamanan" && (
                <div>
                  <p className="text-justify text-[3vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
                    Kami menjaga keamanan informasi yang Anda berikan pada
                    server komputer dalam lingkungan yang terkendali, aman, dan
                    terlindungi dari akses, penggunaan, atau pengungkapan yang
                    tidak sah. Kami menjaga pengamanan administratif, teknis,
                    dan fisik yang wajar untuk perlindungan terhadap akses,
                    penggunaan, modifikasi, dan pengungkapan tidak sah atas data
                    pribadi dalam kendali dan pengawasannya. Namun, kami tidak
                    menjamin tidak akan ada transmisi data melalui Internet atau
                    jaringan nirkabel.
                  </p>
                </div>
              )}

              {activeTab === "pengungkapan" && (
                <div>
                  <p className="text-justify text-[3vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
                    Kami akan mengungkapkan informasi apa pun yang kami
                    kumpulkan, gunakan, atau terima jika diwajibkan atau
                    diizinkan oleh hukum, misalnya untuk mematuhi panggilan
                    pengadilan atau proses hukum serupa, dan jika kami percaya
                    dengan itikad baik bahwa pengungkapan diperlukan untuk
                    melindungi hak kami, melindungi keselamatan Anda atau
                    keselamatan orang lain, menyelidiki penipuan, atau
                    menanggapi permintaan dari pemerintah.
                  </p>
                </div>
              )}

              {activeTab === "kontak" && (
                <div>
                  <p className="text-justify text-[3vw] sm:text-lg mb-[2vw] sm:mb-4 indent-[4vw] sm:indent-8">
                    Jika Anda ingin menghubungi kami untuk mempelajari Kebijakan
                    ini lebih lanjut atau menanyakan masalah apa pun yang
                    berkaitan dengan hak perorangan dan Informasi pribadi Anda,
                    Anda dapat mengirim email ke{" "}
                    <b>id.explorekuliner@gmail.com</b>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
