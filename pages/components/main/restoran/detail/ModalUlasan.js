/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const ModalUlasan = (props) => {
  const { showModal, setShowModal, data } = props;
  const [clickCount, setClickCount] = useState(0);

  const handleCloseModal = () => setShowModal(!showModal);

  const handleStarClick = (index) => setClickCount(index + 1);

  return (
    <div className="h-full w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 z-10">
      <div className="w-[90%] max-h-[90%] xl:w-2/3 bg-white rounded-[2vw] sm:rounded-lg shadow-lg overflow-y-auto">
        <div className="p-[2vw] md:p-4">
          <div className="flex justify-end pb-3" onClick={handleCloseModal}>
            <div className="w-[6vw] h-[6vw] sm:w-11 sm:h-11 border-gray border-2 rounded-full flex justify-center items-center cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                  fill="#8F8F9D"
                />
              </svg>
            </div>
          </div>
          <div className="border-t border-mediumGray"></div>
          <div className="flex flex-wrap p-[2vw] md:p-4">
            <div className="w-full md:w-1/3 md:p-4">
              <h6 className="text-black font-semibold text-[4vw] md:text-2xl lg:text-3xl pb-[3vw] sm:pb-4 text-center md:text-start">
                Beri tahu kami tentang kunjungan anda.
              </h6>
              <div className="relative text-black bg-white rounded-[2vw] sm:rounded-xl shadow-lg cursor-pointer me-4 w-full md:w-5/6">
                <div className="overflow-hidden rounded-t-[2vw] rounded-b-none sm:rounded-t-lg sm:rounded-b-none">
                  <img
                    src={data.image}
                    alt={data.nama_resto.split(" ").join("-")}
                    className="rounded-t-[2vw] rounded-b-none sm:rounded-t-lg sm:rounded-b-none relative transition-transform duration-300 hover:scale-110 ease-in-out"
                  />
                </div>
                <div className="flex bg-white w-[17%] h-[6%] text-[2.5vw] sm:w-12 sm:h-5 sm:text-xs text-gray rounded-2xl absolute right-[2vw] top-[2vw] sm:right-3 sm:top-3 justify-center items-center">
                  <svg
                    className="sm:w-[14px] me-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30%"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#ffa011"
                      d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
                    />
                  </svg>
                  {data.rating}
                </div>
                <div className="p-[2.5vw] md:p-3 lg:p-4">
                  <h6 className="pb-[2vw] text-[4vw] sm:pb-2 md:text-base lg:text-lg font-semibold">
                    {data.nama_resto}
                  </h6>
                  <p className="text-gray text-[3vw] sm:text-sm lg:text-base">
                    {data.alamat}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/6 p-[3vw] md:p-4 bg-primary rounded-[2vw] sm:rounded-lg shadow-lg mt-[5vw] md:mt-0">
              <h3 className="text-[4.5vw] sm:text-lg text-black font-semibold pb-[2vw] sm:pb-2">
                Kasih penilaian ke resto ?
              </h3>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    width="3vw"
                    height="3vw"
                    viewBox="0 0 15 14"
                    fill={index < clickCount ? "#FFA011" : "#8F8F9D"}
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-[40px] sm:h-[40px] mr-[0.5vw] sm:mr-1"
                    onClick={() => handleStarClick(index)}
                  >
                    <path d="M6.82502 1.67301C6.8938 1.56285 6.99232 1.47145 7.11076 1.40793C7.2292 1.3444 7.36342 1.31097 7.50002 1.31097C7.63662 1.31097 7.77084 1.3444 7.88928 1.40793C8.00772 1.47145 8.10624 1.56285 8.17502 1.67301L9.9219 4.47184L13.3144 5.15784C13.4478 5.18491 13.5714 5.24415 13.6726 5.32966C13.7739 5.41516 13.8494 5.52395 13.8916 5.64517C13.9337 5.7664 13.9411 5.89582 13.913 6.02055C13.8849 6.14527 13.8222 6.26094 13.7313 6.35601L11.4188 8.77159L11.7688 11.9945C11.7826 12.1214 11.7605 12.2495 11.7047 12.3659C11.6489 12.4824 11.5613 12.5831 11.4507 12.6581C11.3402 12.7331 11.2104 12.7797 11.0745 12.7932C10.9387 12.8068 10.8013 12.7868 10.6763 12.7353L7.50002 11.4287L4.32377 12.7353C4.19872 12.7868 4.06139 12.8068 3.92549 12.7932C3.7896 12.7797 3.65989 12.7331 3.54932 12.6581C3.43875 12.5831 3.35119 12.4824 3.29538 12.3659C3.23957 12.2495 3.21746 12.1214 3.23127 11.9945L3.58127 8.77159L1.26877 6.35659C1.17766 6.26153 1.11487 6.14582 1.08665 6.02101C1.05844 5.89621 1.0658 5.76669 1.10799 5.64537C1.15018 5.52405 1.22572 5.41518 1.32709 5.32964C1.42845 5.24409 1.55209 5.18485 1.68565 5.15784L5.07815 4.47184L6.82502 1.67301Z" />
                  </svg>
                ))}
              </div>
              <div className="py-[3vw] sm:py-4">
                <label
                  htmlFor="pesanan"
                  className="text-black text-[4vw] sm:text-lg font-medium"
                >
                  Pesanan
                </label>
                <input
                  type="text"
                  placeholder="Ayam Goreng"
                  name="pesanan"
                  className="w-full rounded-[2vw] sm:rounded-lg sm:mt-2 p-[3vw] sm:p-3 text-[4vw] sm:text-lg bg-primary border-mediumGray border-2 focus:border-none"
                />
              </div>
              <div className="py-[3vw] sm:py-4">
                <label
                  htmlFor="komentar"
                  className="text-black text-[4vw] sm:text-lg font-medium"
                >
                  Tulis Ulasan
                </label>
                <textarea
                  name="komentar"
                  id="komentar"
                  cols="30"
                  rows="5"
                  placeholder="Berikan komentar anda"
                  className="w-full rounded-[2vw] sm:rounded-lg sm:mt-2 p-[3vw] sm:p-3 text-[4vw] sm:text-lg bg-primary border-mediumGray border-2 focus:border-none"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="border-t border-mediumGray"></div>
          <center className="py-[3vw] sm:py-4 sm:mt-4">
            <button
              type="submit"
              className="px-[4vw] py-[1vw] sm:px-6 sm:py-2 text-[3.5vw] sm:text-base rounded-full shadow-lg bg-secondary text-white"
            >
              Simpan
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ModalUlasan;
