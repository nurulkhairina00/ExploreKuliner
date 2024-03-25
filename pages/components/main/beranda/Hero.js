/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import Select from "react-select";
import ModalFilter from "./ModalFilter";
import SocialMedia from "./SocialMedia";
import Search from "./Search";
import Notifications from "../../navbar/Notifications";
import Profile from "../../navbar/Profile";
import Login from "../../navbar/Login";

const Hero = (props) => {
  const { isLoggedIn } = props;
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [listArea, setListArea] = useState([]);
  const [searchArea, setSearchArea] = useState("");
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);

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
    <section className="w-full h-[60vw] sm:h-[28rem] bg-[url(/images/bg-hero.jpg)] bg-cover bg-[50%_50%] px-[8vw] py-[5vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:py-10">
      <div className="flex justify-between sm:pb-7">
        {/* Icon Social Media */}
        <div className="flex flex-row gap-[2vw] sm:gap-5">
          <SocialMedia />
        </div>

        <div className="flex space-x-[2vw] sm:space-x-4 items-center">
          {isLoggedIn ? (
            <>
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
