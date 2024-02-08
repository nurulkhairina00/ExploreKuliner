import React, { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { getListArtikel } from "../../actions/artikelAction";
import CardArtikel from "../layout/cardArtikel";
const ListArtikel = () => {
  const { getListArtikelResult, getListArtikelLoading, getListArtikelError } =
    useSelector((state) => state.artikelReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListArtikel());
  }, [dispatch]);

  return (
    <section className="flex flex-col p-[8vw] pt-[28vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-30 sm:pt-48">
      <div className="pb-[8vw] sm:pb-24">
        <h5 className="text-[10vw] sm:text-6xl font-bold text-black text-center">
          Artikel
        </h5>
      </div>
      {getListArtikelResult ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[6vw] sm:gap-10">
          {getListArtikelResult.map((item) => (
            <div className="" key={item.id}>
              <CardArtikel data={item} />
            </div>
          ))}
        </div>
      ) : getListArtikelLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getListArtikelError ? getListArtikelError : "Data Kosong"}</p>
      )}
    </section>
  );
};

export default ListArtikel;
