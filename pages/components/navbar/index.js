/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import ModalFilter from "../main/beranda/ModalFilter";
import Search from "./Search";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Login from "./Login";

const Navbar = (props) => {
  const { isLoggedIn } = props;
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [listArea, setListArea] = useState([]);
  const [searchArea, setSearchArea] = useState("");
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);

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

  const handleOpenModalFilter = () => setShowModalFilter(!showModalFilter);

  const handleLogout = () => {
    signOut({ callbackUrl: `/` });
    setShowDropdown(!showDropdown);
  };

  const handleToggleDropdown = () => {
    setShowNotification(false);
    setShowDropdown(!showDropdown);
  };

  const handleCloseToggleDropdown = () => setShowDropdown(false);

  const handleNotificationClick = () => {
    setShowDropdown(false);
    setShowNotification(!showNotification);
    setUnreadNotifications(0);
  };

  useEffect(() => {
    getListArea();
  }, []);

  return (
    <nav className="w-full bg-white fixed shadow-md p-[6vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:py-8 z-20">
      <div className="flex justify-between">
        <Link href="/">
          <img
            src="/logo/logo-explore-kuliner-v2.svg"
            alt="logo-explore-kuliner"
            className="w-[18vw] sm:w-28 cursor-pointer"
          />
        </Link>

        <Search
          {...{
            listArea,
            searchArea,
            handleSearchArea,
            searchRestaurant,
            handleSearchRestaurant,
            handleOpenModalFilter,
          }}
        />

        <div className="flex space-x-[2vw] sm:space-x-4 items-center">
          {isLoggedIn ? (
            <>
              {/* Daftar dan Masuk Tablet dan Desktop*/}
              <Notifications
                {...{
                  unreadNotifications,
                  showNotification,
                  handleNotificationClick,
                }}
              />
              <Profile
                {...{
                  showDropdown,
                  handleToggleDropdown,
                  handleCloseToggleDropdown,
                  handleLogout,
                }}
              />
            </>
          ) : (
            <Login />
          )}
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
    </nav>
  );
};

export default Navbar;
