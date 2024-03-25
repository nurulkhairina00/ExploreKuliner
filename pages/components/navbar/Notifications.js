/* eslint-disable @next/next/no-img-element */
import React from "react";

const Notifications = (props) => {
  const { unreadNotifications, showNotification, handleNotificationClick } =
    props;

  return (
    <div className="relative">
      <div
        className="flex p-[1vw] rounded-full bg-secondary w-[7vw] h-[7vw] sm:w-11 sm:h-11 justify-center items-center cursor-pointer"
        onClick={handleNotificationClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="4vw"
          width="4vw"
          viewBox="0 0 32 32"
          className="flex-shrink-0 sm:w-6 sm:h-6"
        >
          <path
            fill="#f4f4f4"
            d="M28.707 19.293L26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v1a5 5 0 0 0 10 0v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707M19 25a3 3 0 0 1-6 0v-1h6Z"
          />
        </svg>
        {unreadNotifications > 0 && (
          <div className="absolute -top-[1vw] sm:-top-1 -right-[1vw] sm:-right-2 text-white bg-gray w-[4vw] h-[4vw] sm:w-6 sm:h-6 flex justify-center items-center rounded-full text-[2.5vw] sm:text-sm">
            {unreadNotifications}
          </div>
        )}
      </div>

      {showNotification && (
        <div className="absolute top-full right-0 mt-[1.5vw] sm:mt-2 pb-[2vw] sm:pb-4 bg-white border-secondary rounded shadow-lg w-[52vw] sm:w-[24rem]">
          <div className="flex bg-primary p-[2vw] sm:p-4">
            <div className="w-1/6">
              <img
                src="/images/bg-hero.jpg"
                alt="foto-profile"
                className="w-[6vw] h-[6vw] md:w-12 md:h-12 rounded-full object-cover mr-10"
              />
            </div>
            <div className="w-5/6">
              <p className="text-[2.5vw] sm:text-base">
                Ada pesan pemberitahuan bahwa artikel telah dikomentari.
              </p>
              <p className="text-[2vw] sm:text-xs text-gray">2 Jam Lalu</p>
            </div>
          </div>
          <hr className="text-gray" />
        </div>
      )}
    </div>
  );
};

export default Notifications;
