/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const CardRestoran = (props) => {
  const { data, jenis_makanan } = props;

  return (
    <Link href={`/restoran/detail/${data.id}`}>
      <div className="text-black bg-white rounded-[2vw] sm:rounded-xl shadow-lg cursor-pointer">
        <div className="relative overflow-hidden rounded-t-[2vw] rounded-b-none sm:rounded-t-lg sm:rounded-b-none">
          <img
            src={data.image}
            alt={data.nama_resto.split(" ").join("-")}
            className="rounded-t-[2vw] w-full aspect-[16/11] rounded-b-none sm:rounded-t-lg sm:rounded-b-none relative transition-transform duration-300 hover:scale-110 ease-in-out"
          />
        </div>
        <div className="flex bg-white w-[17%] h-[6%] text-[2.5vw] sm:w-12 sm:h-5 sm:text-xs text-gray rounded-2xl absolute right-[2vw] top-[2vw] sm:right-3 sm:top-3 justify-center datas-center">
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
        <div className="p-[4vw] sm:p-4">
          <p className="pb-[3vw] text-[3vw] sm:pb-2 sm:text-sm lg:text-base">
            {data.jarak}{" "}
            {jenis_makanan === "none" && (
              <span className="text-secondary font-semibold ms-2">
                {data.jenis_makanan}
              </span>
            )}
          </p>
          <h6 className="pb-[2vw] text-[4vw] sm:pb-2 sm:text-lg font-semibold line-clamp-1">
            {data.nama_resto}
          </h6>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3%"
              viewBox="0 0 384 512"
              className="sm:w-[10px] me-2 my-auto"
            >
              <path
                fill="#d86141"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
            <p className="text-gray text-[3vw] sm:text-sm lg:text-base line-clamp-1">
              {data.alamat}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardRestoran;
