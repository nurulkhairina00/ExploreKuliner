/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListRestoran } from "../../actions/restoranAction";

const RestoranTerdekat = () => {
  const {
    getListRestoranResult,
    getListRestoranLoading,
    getListRestoranError,
  } = useSelector((state) => state.restoranReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListRestoran());
  }, [dispatch]);

  const RestoranTerdekat = Array.isArray(getListRestoranResult)
    ? getListRestoranResult.slice(0, 3)
    : [];

  return (
    <div className=" bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-black text-2xl font-semibold text-center pb-5">
        Restoran Terdekat
      </h3>
      {getListRestoranResult ? (
        RestoranTerdekat?.map((item) => (
          <div className="p-4" key={item.id}>
            <img
              src={item.image}
              alt={item.nama_resto.split(" ").join("-")}
              className="rounded-lg object-cover h-48 w-full"
            />
            <p className="text-lg text-black font-semibold pt-2">
              {item.nama_resto}
            </p>
            <p className="text-base text-black">{item.jarak}</p>
          </div>
        ))
      ) : getListRestoranLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getListRestoranError ? getListRestoranError : "Data Kosong"}</p>
      )}
    </div>
  );
};

export default RestoranTerdekat;
