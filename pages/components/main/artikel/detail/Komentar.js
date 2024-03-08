import React from "react";

const Komentar = () => {
  return (
    <>
      <div className="w-full sm:w-3/4 lg:w-1/2 mt-[2vw] sm:mt-4 bg-white p-[4vw] sm:p-8 rounded-[2vw] sm:rounded-lg relative">
        <label
          htmlFor="komentar"
          className="text-black text-[4vw] sm:text-lg font-medium py-[2vw] sm:py-2"
        >
          Komentar
        </label>
        <textarea
          name="komentar"
          id="komentar"
          cols="20"
          rows="4"
          placeholder="Berikan komentar anda"
          className="bg-primary w-full rounded-[2vw] sm:rounded-lg sm:mt-2 p-[3vw] sm:p-3 text-[3vw] sm:text-base"
        />
        <button className="px-[4vw] py-[1vw] sm:px-5 sm:py-1 text-[3vw] sm:text-base rounded-full shadow-lg bg-secondary text-white absolute bottom-[7vw] right-[6vw] sm:bottom-12 sm:right-11">
          Simpan
        </button>
      </div>

      <div className="w-full sm:w-3/4 lg:w-1/2">
        <div className="flex flex-col justify-center items-center pt-[10vw] pb-[4vw] sm:pt-20 sm:pb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20vw"
            height="20vw"
            className="sm:w-[128px] sm:h-[128px]"
          >
            <path
              fill="#333"
              d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1M26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3.5l-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9M144 272a32 32 0 1 0 0-64a32 32 0 1 0 0 64m144-32a32 32 0 1 0-64 0a32 32 0 1 0 64 0m80 32a32 32 0 1 0 0-64a32 32 0 1 0 0 64"
            />
          </svg>
          <p className="text-[4vw] sm:text-lg font-semibold">
            Belum ada Komentar
          </p>
          <p className="text-[3vw] sm:text-base text-gray">
            Jadilah yang pertama berkomentar
          </p>
        </div>
        {/* <div className="flex p-[4vw] sm:p-4 gap-2">
      <div className="w-[13%] xl:w-[11%]">
        <img
          src="/images/kategori1.jpg"
          alt="foto-profile"
          className="w-[9vw] h-[9vw] md:w-16 md:h-16 rounded-full object-cover"
        />
      </div>
      <div className="w-[87%] lg:w-[90%]">
        <p className="text-black text-[3.5vw] sm:text-base font-semibold">
          Nurul Khairina
        </p>
        <p className="text-[2.5vw] sm:text-xs text-gray text-justify">
          1 jam yang lalu
        </p>
        <p className="text-[3vw] sm:text-sm text-black text-justify sm:py-1">
          Tempatnya sangat rekomendasi untuk wfh atau nugas.
        </p>
        <div className="flex justify-between items-center py-[2vw] sm:py-2">
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="4vw"
                viewBox="0 0 24 24"
                className="sm:w-[20px] sm:h-[20px]"
              >
                <path
                  fill="none"
                  stroke="#8F8F9D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1za4 4 0 0 0 4-4V6a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1-2 2h-7a3 3 0 0 1-3-3"
                />
              </svg>
              <span className="text-[3vw] sm:text-sm text-black">6</span>
            </button>
            <button className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="4vw"
                viewBox="0 0 24 24"
                className="sm:w-[20px] sm:h-[20px]"
              >
                <path
                  fill="none"
                  stroke="#8F8F9D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 13V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1za4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2-2l-1-5a2 3 0 0 0-2-2h-7a3 3 0 0 0-3 3"
                />
              </svg>
              <span className="text-[3vw] sm:text-sm text-black">3</span>
            </button>
            <button
              className="ms-[1.5vw] sm:ms-3 text-[3vw] sm:text-sm text-black font-medium"
              onClick={() => handleOpenBalas(index)}
            >
              {showReply[index] ? "Tutup" : "Balas"}
            </button>
          </div>
        </div>
        {showReply[index] && (
        <div className="w-full relative">
          <textarea
            name="ulasan"
            id="ulasan"
            cols="30"
            rows="4"
            placeholder="Berikan komentar anda"
            className="w-full rounded-[2vw] sm:rounded-lg sm:mt-2 p-[3vw] sm:p-3 text-[3vw] sm:text-base bg-white"
          ></textarea>
          <button className="px-[4vw] py-[1vw] sm:px-5 sm:py-1 text-[3vw] sm:text-base rounded-full shadow-lg bg-secondary text-white absolute bottom-[3vw] right-[2vw] sm:bottom-4 sm:right-3">
            Kirim
          </button>
        </div>
        )}
      </div>
    </div>
    <div className="border-t-2 border-mediumGray"></div> */}
      </div>
    </>
  );
};

export default Komentar;
