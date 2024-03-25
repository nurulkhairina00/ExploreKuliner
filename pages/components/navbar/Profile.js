import React from "react";
import Link from "next/link";

const Profile = (props) => {
  const {
    showDropdown,
    handleToggleDropdown,
    handleCloseToggleDropdown,
    handleLogout,
  } = props;

  return (
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
            <div
              className="py-[1vw] sm:py-2 px-[3.5vw] sm:px-10 cursor-pointer hover:bg-secondary hover:text-white text-[3.5vw] sm:text-lg"
              onClick={handleCloseToggleDropdown}
            >
              Profile
            </div>
          </Link>
          <Link href="/artikel/add">
            <div
              className="py-[1vw] sm:py-2 px-[3.5vw] sm:px-10 cursor-pointer hover:bg-secondary hover:text-white text-[3.5vw] sm:text-lg"
              onClick={handleCloseToggleDropdown}
            >
              Artikel
            </div>
          </Link>
          <div
            className="py-[1vw] sm:py-2 px-[3.5vw] sm:px-10 cursor-pointer hover:bg-secondary hover:text-white text-[3.5vw] sm:text-lg"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
