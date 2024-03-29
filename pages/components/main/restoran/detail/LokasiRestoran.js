import React from "react";

const LokasiRestoran = (props) => {
  const { data } = props;

  return (
    <div className="w-full lg:w-1/3 xl:w-1/4 mt-4 lg:mt-0">
      <div className=" bg-white rounded-[2vw] sm:rounded-lg shadow-lg p-[4vw] sm:p-4">
        <h3 className="text-black text-[4vw] sm:text-base font-bold text-center pb-[3vw] sm:pb-5">
          Lokasi, Jam Operasional & Kontak
        </h3>
        <div className="bg-gray rounded-[2vw] sm:rounded-lg shadow-lg h-[38vw] sm:h-52"></div>
        <div className="text-black pt-[3vw] sm:pt-5">
          <p className="text-[3.5vw] sm:text-base font-semibold pb-[1vw] sm:pb-2">
            Jam Operasional
          </p>
          <div className="w-full flex flex-col sm:flex-row lg:flex-col">
            <div className="w-full sm:w-1/2 lg:w-full">
              {data?.jamOperasional?.map((item, index) => {
                return (
                  <div className="w-full flex" key={index}>
                    <div className="w-1/4 pb-[1vw] sm:pb-1">
                      <p className="text-[3.5vw] sm:text-base">{item.hari}</p>
                    </div>
                    <div className="w-3/4 pb-[1vw] sm:pb-1">
                      <p className="text-[3.5vw] sm:text-base">{item.jam}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full sm:w-1/2 lg:w-full pt-[2vw] sm:pt-0 lg:pt-3">
              <div className="flex flex-row pb-[1.5vw] sm:pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5vw"
                  height="5vw"
                  viewBox="0 0 24 24"
                  className="me-[1vw] sm:me-2 sm:w-7 sm:h-7"
                >
                  <g
                    fill="none"
                    stroke="#d86141"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M19 10c0 3.976-7 11-7 11s-7-7.024-7-11s3.134-7 7-7s7 3.024 7 7" />
                    <circle cx="12" cy="10" r="3" />
                  </g>
                </svg>
                <p className="text-black text-[3.5vw] sm:text-base">
                  {data.alamat}
                </p>
              </div>

              <div className="flex pb-[1.5vw] sm:pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5vw"
                  height="5vw"
                  viewBox="0 0 24 24"
                  className="me-[1vw] sm:me-2 sm:w-7 sm:h-7"
                >
                  <path
                    fill="none"
                    stroke="#d86141"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15.6 14.522c-2.395 2.52-8.504-3.534-6.1-6.064c1.468-1.545-.19-3.31-1.108-4.609c-1.723-2.435-5.504.927-5.39 3.066c.363 6.746 7.66 14.74 14.726 14.042c2.21-.218 4.75-4.21 2.214-5.669c-1.267-.73-3.008-2.17-4.342-.767"
                  />
                </svg>
                <p className="text-black text-[3.5vw] sm:text-base">
                  {data.telephone}
                </p>
              </div>

              <div className="flex pb-[1.5vw] sm:pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5vw"
                  height="5vw"
                  viewBox="0 0 24 24"
                  className="me-[1vw] sm:me-2 sm:w-7 sm:h-7"
                >
                  <path
                    fill="#d86141"
                    d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                  />
                </svg>
                <p className="text-black text-[3.5vw] sm:text-base">
                  {data.email}
                </p>
              </div>
              <div className="flex pb-[1.5vw] sm:pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5vw"
                  height="5vw"
                  viewBox="0 0 24 24"
                  className="me-[1vw] sm:me-2 sm:w-7 sm:h-7"
                >
                  <path
                    fill="#d86141"
                    d="M1 21v-2h22v2zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18zm0-2h16V5H4zm0 0V5z"
                  />
                </svg>
                <p className="text-black text-[3.5vw] sm:text-base">
                  {data.website}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LokasiRestoran;
