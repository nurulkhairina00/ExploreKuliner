/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import Select from "react-select";
import ModalFilter from "./ModalFilter";
import SocialMedia from "../SocialMedia";

const Hero = (props) => {
  const { isLoggedIn } = props;
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [listArea, setListArea] = useState([]);
  const [searchArea, setSearchArea] = useState("");
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOpenModalFilter = () => setShowModalFilter(!showModalFilter);

  const getListArea = async () => {
    await axios
      .get(`/data/exploreKuliner.json`)
      .then((res) => {
        setListArea(res.data.area);
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleSearchArea = (value) => setSearchArea(value);

  const handleSearchRestaurant = (value) => setSearchRestaurant(value);

  const handleLogout = () => {
    signOut({ callbackUrl: `/` });
    setShowDropdown(!showDropdown);
  };

  const handleToggleDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    getListArea();
  }, []);

  return (
    <section className="w-full h-[60vw] sm:h-[28rem] bg-[url(/images/bg-hero.jpg)] bg-cover bg-[50%_50%] px-[8vw] py-[5vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:py-10">
      <div className="flex justify-between sm:pb-7">
        {/* Icon Social Media */}
        <div className="flex flex-row gap-[2vw] sm:gap-5">
          <SocialMedia />
        </div>

        <div className="flex">
          {isLoggedIn ? (
            <>
              {/* Daftar dan Masuk Tablet dan Desktop*/}
              <div className="relative">
                <div
                  className="flex p-[1vw] rounded-full bg-secondary w-[7vw] h-[7vw] sm:w-11 sm:h-11 justify-center items-center cursor-pointer"
                  onClick={handleToggleDropdown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="3.5vw"
                    width="3.5vw"
                    viewBox="0 0 448 512"
                    className="flex-shrink-0 sm:w-5 sm:h-5"
                  >
                    <path
                      fill="#f4f4f4"
                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                    />
                  </svg>
                </div>
                {showDropdown && (
                  <div className="absolute top-full right-0 mt-[1.5vw] sm:mt-2 bg-white rounded-md shadow-md overflow-hidden">
                    <Link href="/profile">
                      <div className="py-[1vw] sm:py-2 px-[3.5vw] sm:px-10 cursor-pointer hover:bg-secondary hover:text-white text-[3vw] sm:text-lg">
                        Profile
                      </div>
                    </Link>
                    <div
                      className="py-[1vw] sm:py-2 px-[3.5vw] sm:px-10 cursor-pointer hover:bg-secondary hover:text-white text-[3vw] sm:text-lg"
                      onClick={handleLogout}
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Tampilan Masuk Mobile */}
              <Link href="/login">
                <div className="flex p-[1vw] rounded-full bg-secondary w-[7vw] h-[7vw] justify-center items-center sm:hidden cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="3.5vw"
                    width="3.5vw"
                    viewBox="0 0 448 512"
                    className="flex-shrink-0"
                  >
                    <path
                      fill="#f4f4f4"
                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                    />
                  </svg>
                </div>
              </Link>

              {/* Daftar dan Masuk Tablet dan Desktop*/}
              <Link href="/register">
                <button
                  type="button"
                  className="px-7 py-2 rounded-full bg-primary mx-2 hidden sm:block"
                >
                  <span className="text-secondary font-bold">Daftar</span>
                </button>
              </Link>
              <Link href="/login">
                <button
                  type="button"
                  className="px-7 py-[6px] rounded-full bg-secondary mx-2 hidden sm:block"
                >
                  <span className="text-white font-bold">Masuk</span>
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="pt-[9vw] pb-[5vw] sm:py-10 sm:pb-8">
          <img
            src="/logo/logo-explore-kuliner-v2.svg"
            alt="logo-explore-kuliner"
            className="w-[35vw] sm:w-[250px] lg:w-[300px]"
          />
        </div>

        {/* Search Tablet dan Desktop */}
        <div className="hidden sm:flex flex-row w-full lg:w-3/4 bg-primary rounded-full shadow-lg">
          {/* Select Lokasi Restoran */}
          <div className="flex justify-center items-center w-1/2 ps-5">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5 13.5C25.5 11.5109 24.7098 9.60322 23.3033 8.1967C21.8968 6.79018 19.9891 6 18 6C16.0109 6 14.1032 6.79018 12.6967 8.1967C11.2902 9.60322 10.5 11.5109 10.5 13.5C10.5 16.089 12.99 21.0465 18 27.9795C23.01 21.0465 25.5 16.089 25.5 13.5ZM18 33C10.9995 23.865 7.5 17.3655 7.5 13.5C7.5 10.7152 8.60625 8.04451 10.5754 6.07538C12.5445 4.10625 15.2152 3 18 3C20.7848 3 23.4555 4.10625 25.4246 6.07538C27.3938 8.04451 28.5 10.7152 28.5 13.5C28.5 17.3655 25.0005 23.865 18 33ZM18 19.5C16.4087 19.5 14.8826 18.8679 13.7574 17.7426C12.6321 16.6174 12 15.0913 12 13.5C12 11.9087 12.6321 10.3826 13.7574 9.25736C14.8826 8.13214 16.4087 7.5 18 7.5C19.5913 7.5 21.1174 8.13214 22.2426 9.25736C23.3679 10.3826 24 11.9087 24 13.5C24 15.0913 23.3679 16.6174 22.2426 17.7426C21.1174 18.8679 19.5913 19.5 18 19.5ZM18 16.5C18.7956 16.5 19.5587 16.1839 20.1213 15.6213C20.6839 15.0587 21 14.2956 21 13.5C21 12.7044 20.6839 11.9413 20.1213 11.3787C19.5587 10.8161 18.7956 10.5 18 10.5C17.2044 10.5 16.4413 10.8161 15.8787 11.3787C15.3161 11.9413 15 12.7044 15 13.5C15 14.2956 15.3161 15.0587 15.8787 15.6213C16.4413 16.1839 17.2044 16.5 18 16.5Z"
                fill="#8F8F9D"
              />
            </svg>
            <div className="relative w-full z-10">
              <Select
                placeholder="Pilih Lokasi"
                isSearchable
                options={listArea.map((area) => ({
                  label: area.nama,
                  value: area.id,
                }))}
                value={{
                  value: searchArea,
                  label: listArea.find((item) => item.id === searchArea)
                    ? listArea.find((item) => item.id === searchArea).nama
                    : "Pilih...",
                }}
                onChange={(e) => handleSearchArea(e.value)}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    border: "none",
                    boxShadow: state.isFocused ? "none" : provided.boxShadow,
                    "&:hover": {
                      border: "none",
                    },
                  }),
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary: "#d86141",
                  },
                })}
              />
            </div>
          </div>

          {/* Input Search Restoran */}
          <div className="flex justify-center items-center w-1/2 bg-primary">
            <svg
              width="29"
              height="32"
              viewBox="0 0 29 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.1939 2.98376L23.6622 26.0106C24.0506 26.4476 24.2688 27.0402 24.2688 27.6581C24.2688 28.2761 24.0506 28.8687 23.6622 29.3056C23.2738 29.7424 22.747 29.9878 22.1978 29.9878C21.6486 29.9878 21.1218 29.7424 20.7333 29.3056L15.7333 23.5838C15.4061 23.21 15.2226 22.7065 15.2222 22.1819V21.8363C15.2223 21.5714 15.1755 21.3091 15.0848 21.0647C14.994 20.8203 14.8609 20.5986 14.6933 20.4125L14.0478 19.7419C13.8286 19.5144 13.5621 19.3526 13.2728 19.2713C12.9835 19.1901 12.6807 19.192 12.3922 19.2769C11.9373 19.4105 11.4593 19.4079 11.0055 19.2694C10.5518 19.1309 10.1381 18.8614 9.80556 18.4875L5.05945 13.1475C2.2439 9.98001 1.20778 5.19689 3.1939 2.98376Z"
                stroke="#8F8F9D"
                strokeWidth="2.5625"
                strokeLinejoin="round"
              />
              <path
                d="M22.2222 2L17.9306 6.82813C17.6003 7.19957 17.3383 7.64057 17.1596 8.12593C16.9809 8.6113 16.8889 9.13151 16.8889 9.65688V10.5856C16.8889 10.717 16.8659 10.8472 16.8212 10.9685C16.7765 11.0899 16.711 11.2002 16.6283 11.2931L16 12M17.7778 14L18.4061 13.2931C18.4887 13.2002 18.5867 13.1264 18.6946 13.0762C18.8025 13.0259 18.9182 13 19.035 13H19.8606C20.3276 13 20.79 12.8965 21.2214 12.6954C21.6528 12.4944 22.0448 12.1997 22.375 11.8281L26.6667 7M24.4445 4.5L20 9.5M11.1111 23L5.57112 29.2675C5.15439 29.7362 4.58926 29.9995 4.00001 29.9995C3.41075 29.9995 2.84562 29.7362 2.4289 29.2675C2.01229 28.7987 1.77826 28.1629 1.77826 27.5C1.77826 26.8371 2.01229 26.2013 2.4289 25.7325L7.11112 20.5"
                stroke="#8F8F9D"
                strokeWidth="2.5625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="relative w-full">
              <input
                type="text"
                name="restoran"
                placeholder="Cari restoran"
                className="bg-primary p-2 w-full focus:outline-none text-lg"
                value={searchRestaurant}
                onChange={(e) => handleSearchRestaurant(e.target.value)}
              />
            </div>
          </div>

          {/* Button Search Restoran */}
          <Link href="/restoran">
            <div className="p-2 rounded-full m-3 bg-secondary z-10 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                />
              </svg>
            </div>
          </Link>
        </div>

        {/* Search Mobile */}
        <div className=" sm:hidden w-full bg-primary rounded-full shadow-lg">
          <div className="flex justify-between items-center bg-primary rounded-full ps-[4vw] pe-[2vw] py-[1.2vw]">
            <div className="relative w-full">
              <input
                type="text"
                name="restoran"
                placeholder="Cari restoran"
                className="bg-primary p-[1vw] w-full focus:outline-none rounded-full text-[3vw] sm:text-sm flex justify-center"
                value={searchRestaurant}
                onChange={(e) => handleSearchRestaurant(e.target.value)}
              />
            </div>
            <Link href="/restoran">
              <div className="p-[1vw] rounded-full bg-secondary z-10 cursor-pointer justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.5vw"
                  height="3.5vw"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                  />
                </svg>
              </div>
            </Link>
            <div className="ms-[0.5vw]" onClick={() => handleOpenModalFilter()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4.5vw"
                height="4.5vw"
                viewBox="0 0 24 24"
              >
                <path
                  fill={`${searchArea ? "#d86141" : "#8F8F9D"}`}
                  d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.989.989 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75zM7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {showModalFilter && (
        <ModalFilter
          {...{
            showModalFilter,
            setShowModalFilter,
            listArea,
            searchArea,
            handleSearchArea,
          }}
        />
      )}
    </section>
  );
};

export default Hero;
