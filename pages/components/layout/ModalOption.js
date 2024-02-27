import React from "react";
import Link from "next/link";

const ModalOption = (props) => {
  const { showModal, setShowModal, type } = props;

  const handleCloseModal = () => setShowModal(!showModal);

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 z-10">
      <div className="w-3/4 sm:w-1/2 xl:w-1/3 bg-white rounded-[2vw] sm:rounded-lg shadow-lg">
        <div className="p-[3vw] sm:p-4">
          <div
            className="flex justify-end pb-[2vw] sm:pb-3"
            onClick={handleCloseModal}
          >
            <div className="w-[6vw] h-[6vw] sm:w-11 sm:h-11 border-gray border-2 rounded-full flex justify-center items-center cursor-pointer">
              <svg
                width="4vw"
                height="4vw"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-6 sm:h-6"
              >
                <path
                  d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                  fill="#8F8F9D"
                />
              </svg>
            </div>
          </div>
          <h2 className="font-bold text-[4.5vw] sm:text-2xl lg:text-3xl text-black text-center py-[3vw] sm:py-4 border-t-[1px] border-mediumGray">
            {type === "masuk" ? "Masuk " : "Daftar "}
            Sebagai
          </h2>
          <div className="py-[3vw] sm:py-4 flex flex-col items-center justify-center gap-[2vw] sm:gap-3">
            <Link
              href={type === "masuk" ? "/login-reviewer" : "/register-reviewer"}
            >
              <button className="border-secondary border-[0.5vw] sm:border-2 w-1/2 rounded-[2vw] sm:rounded-lg py-[2vw] sm:py-2 text-[3vw] sm:text-base text-secondary font-bold hover:bg-secondary hover:text-primary">
                Reviewer
              </button>
            </Link>
            <p className="text-black text-[3vw] sm:text-sm font-semibold">
              Atau
            </p>
            <Link
              href={type === "masuk" ? "/login-reviewer" : "/register-reviewer"}
            >
              <button className="border-secondary border-[0.5vw] sm:border-2 w-1/2 rounded-[2vw] sm:rounded-lg py-[2vw] sm:py-2 text-[3vw] sm:text-base text-secondary font-bold hover:bg-secondary hover:text-primary">
                Pemilik Restoran
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOption;
