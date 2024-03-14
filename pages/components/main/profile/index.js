/* eslint-disable @next/next/no-img-element */
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Profile = (props) => {
  const { input, setInput } = props;

  const handleInputChange = (value, name) => {
    setInput({ ...input, [name]: value });
  };

  const handleUploadImage = (e) => {
    if (e.target.files[0].size > 2097152) {
      Swal.fire({
        title: "Info",
        text: "Ukuran file harus kurang dari 2MB",
        icon: "info",
        showConfirmButton: false,
        timer: 3000,
      });
      return false;
    }

    if (!isFileImage(e.target.files[0])) {
      Swal.fire({
        title: "Info",
        text: "Jenis file harus berupa Image",
        icon: "info",
        showConfirmButton: false,
        timer: 3000,
      });
      return false;
    }

    setInput({
      ...input,
      upload_foto: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const isFileImage = (file) => {
    return file && file["type"].split("/")[0] === "image";
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

  return (
    <section className="flex justify-center items-center px-[8vw] pb-[8vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-10 sm:pt-0">
      <div className="w-full lg:w-3/4 rounded-[2vw] sm:rounded-lg shadow-lg p-[4vw] sm:p-8">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/3 p-[2vw] sm:p-4 flex flex-col items-center justify-center">
            <img
              src={
                input.imagePreview === ""
                  ? "data:image/png;base64,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"
                  : input.imagePreview !== ""
                  ? input.imagePreview
                  : input.upload_foto
              }
              alt="foto"
              className="rounded-full h-[24vw] w-[24vw] sm:h-48 sm:w-48"
            />
            <label
              htmlFor="foto"
              className="bg-secondary px-[6vw] sm:px-8 py-[1.3vw] sm:py-2 rounded-[2vw] sm:rounded-lg text-[3vw] sm:text-base text-primary my-[3vw] sm:mt-6"
            >
              Upload Foto
            </label>
            <input
              id="foto"
              type="file"
              accept="image/png, image/jpeg, image/*"
              onChange={(e) => handleUploadImage(e)}
              hidden
            />
          </div>
          <div className="w-full lg:w-2/3 p-[2vw] sm:p-4">
            <p className="text-[4vw] sm:text-2xl font-semibold mb-4">
              Profile Saya
            </p>
            <form>
              <div className="pb-[2vw] sm:pb-4">
                <label
                  htmlFor="nama"
                  className="text-[3vw] sm:text-lg font-normal"
                >
                  Nama
                </label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama Lengkap"
                  value={input.nama}
                  onChange={(e) => handleInputChange(e.target.value, "nama")}
                  className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-[2vw] sm:rounded-lg bg-mediumGray focus:outline-secondary text-[3vw] sm:text-base"
                  required
                />
              </div>
              <div className="pb-[2vw] sm:pb-4">
                <label
                  htmlFor="email"
                  className="text-[3vw] sm:text-lg font-normal"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="mail@gmail.com"
                  value={input.email}
                  onChange={(e) => handleInputChange(e.target.value, "email")}
                  className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-[2vw] sm:rounded-lg bg-mediumGray focus:outline-secondary text-[3vw] sm:text-base"
                  required
                />
              </div>
              <div className="pb-[2vw] sm:pb-4">
                <label
                  htmlFor="no_hp"
                  className="text-[3vw] sm:text-lg font-normal"
                >
                  No Handphone
                </label>
                <input
                  type="number"
                  name="no_hp"
                  placeholder="+62"
                  value={input.no_hp}
                  onChange={(e) => handleInputChange(e.target.value, "no_hp")}
                  className="w-full mt-[1vw] sm:mt-2 py-[2vw] px-[3vw] sm:p-3 rounded-[2vw] sm:rounded-lg bg-mediumGray focus:outline-secondary text-[3vw] sm:text-base"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-secondary px-[6vw] sm:px-8 py-[1.3vw] sm:py-2 rounded-[2vw] sm:rounded-lg text-[3vw] sm:text-base text-primary my-[3vw] sm:my-4"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
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
