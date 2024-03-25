/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ProfileSaya from "./ProfileSaya";
import BookmarkArikel from "./BookmarkArikel";
import ArtikelDraft from "./ArtikelDraft";
import ArtikelPublish from "./ArtikelPublish";

const Profile = (props) => {
  const { input, setInput } = props;
  const [ListArtikel, setListArtikel] = useState([]);

  const getListArtikel = async () => {
    await axios
      .get(`/data/exploreKuliner.json`)
      .then((res) => {
        setListArtikel(res.data.artikel);
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleUpdate = async () => {
    let formData = new FormData();
    formData.append("input", JSON.stringify(input));

    if (input.upload_foto !== "")
      formData.append("image", input.upload_foto, generateFilename() + ".jpg");

    await axios
      .post(
        `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/${process.env.NEXT_PUBLIC_VER}/profile/update`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Data Profile Berhasil Diperbarui",
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    getListArtikel();
  }, []);

  return (
    <section className="flex justify-center items-center px-[8vw] pb-[8vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-10 sm:pt-0">
      <div className="w-full lg:w-3/4 rounded-[2vw] sm:rounded-lg shadow-lg p-[4vw] sm:p-8">
        <ProfileSaya {...{ input, setInput, handleUpdate }} />
        <BookmarkArikel {...{ ListArtikel }} />
        <ArtikelDraft {...{ ListArtikel }} />
        <ArtikelPublish {...{ ListArtikel }} />
      </div>
    </section>
  );
};

const generateFilename = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let millisecond = date.getMilliseconds();
  let filename = `${year}${month}${day}${hour}${minute}${second}${millisecond}`;
  return filename;
};

export default Profile;
