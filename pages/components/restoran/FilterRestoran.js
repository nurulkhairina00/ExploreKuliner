/* eslint-disable @next/next/no-img-element */
import React from "react";
import TabFilter from "./TabFilter";
import HasilFilter from "./HasilFilter";

const FilterRestoran = () => {
  return (
    <section className="flex p-[8vw] pt-[30vw] sm:px-5 md:px-12 lg:px-20 xl:px-32 sm:pb-10 sm:pt-36">
      <TabFilter />
      <HasilFilter />
    </section>
  );
};

export default FilterRestoran;
