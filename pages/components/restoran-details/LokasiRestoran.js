import React from "react";

const LokasiRestoran = (props) => {
  const { data } = props;

  return (
    <div className="w-1/4">
      <div className=" bg-white rounded-lg shadow-lg p-4">
        <h3 className="text-black text-base font-semibold text-center pb-5">
          Lokasi, Jam Operasional & Kontak
        </h3>
        <div className="bg-gray rounded-lg shadow-lg h-52"></div>
        <div className="text-black pt-5">
          <p className=" text-base font-semibold pb-2">Jam Operasional</p>
          {data?.jamOperasional?.map((item, index) => {
            return (
              <div className="flex" key={index}>
                <div className="w-1/4 pb-1">
                  <p className="text-sm">{item.hari}</p>
                </div>
                <div className="w-1/2 pb-1">
                  <p className="text-sm">{item.jam}</p>
                </div>
              </div>
            );
          })}
          <div className="pt-3">
            <div className="flex pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="me-2"
              >
                <g
                  fill="none"
                  stroke="#3B7850"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M19 10c0 3.976-7 11-7 11s-7-7.024-7-11s3.134-7 7-7s7 3.024 7 7" />
                  <circle cx="12" cy="10" r="3" />
                </g>
              </svg>
              <p className="text-black text-sm">{data.alamat}</p>
            </div>

            <div className="flex pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="me-2"
              >
                <path
                  fill="none"
                  stroke="#3B7850"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.6 14.522c-2.395 2.52-8.504-3.534-6.1-6.064c1.468-1.545-.19-3.31-1.108-4.609c-1.723-2.435-5.504.927-5.39 3.066c.363 6.746 7.66 14.74 14.726 14.042c2.21-.218 4.75-4.21 2.214-5.669c-1.267-.73-3.008-2.17-4.342-.767"
                />
              </svg>
              <p className="text-black text-sm">{data.telephone}</p>
            </div>

            <div className="flex pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="me-2"
              >
                <path
                  fill="#3B7850"
                  d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                />
              </svg>
              <p className="text-black text-sm">{data.email}</p>
            </div>
            <div className="flex pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="me-2"
              >
                <path
                  fill="#3B7850"
                  d="M1 21v-2h22v2zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18zm0-2h16V5H4zm0 0V5z"
                />
              </svg>
              <p className="text-black text-sm">{data.website}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LokasiRestoran;
