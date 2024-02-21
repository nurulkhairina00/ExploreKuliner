import React, { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { getListArtikel } from "../../actions/artikelAction";
import CardArtikel from "../layout/cardArtikel";
import Pagination from "../layout/Pagination";
import Link from "next/link";

const ListArtikel = () => {
  const { getListArtikelResult, getListArtikelLoading, getListArtikelError } =
    useSelector((state) => state.artikelReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListArtikel());
  }, [dispatch]);

  return (
    <section className="flex flex-col p-[8vw] pb-[8vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-30 sm:pt-10">
      <div className="pb-[8vw] sm:pb-14 flex flex-col ">
        <h5 className="text-[10vw] sm:text-6xl font-bold text-black text-center">
          Artikel
        </h5>
        <div className="flex w-full justify-center items-center">
          <div className="my-[3vw] sm:my-11 rounded-full w-full lg:w-2/3 relative">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="w-full py-[3vw] px-[5vw] sm:py-4 sm:px-6 bg-white rounded-full shadow-lg text-[3vw] sm:text-sm"
            />
            <button className="absolute top-1/4 right-[3vw] sm:right-4 px-[4vw] py-[1vw] sm:px-6 sm:py-1 bg-secondary text-primary rounded-full text-[2.5vw] sm:text-sm font-semibold">
              Cari
            </button>
          </div>
        </div>
      </div>
      {getListArtikelResult ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[6vw] sm:gap-10">
            {getListArtikelResult.map((item) => (
              <CardArtikel data={item} key={item.id} />
            ))}
          </div>
          <div className="py-[4vw] sm:py-6">
            <Pagination />
          </div>
        </>
      ) : getListArtikelLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getListArtikelError ? getListArtikelError : "Data Kosong"}</p>
      )}
    </section>
  );
};

export default ListArtikel;
