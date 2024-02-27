import React from "react";
import Select from "react-select";

const ModalFilter = (props) => {
  const {
    showModalFilter,
    setShowModalFilter,
    listArea,
    searchArea,
    handleSearchArea,
  } = props;

  const handleCloseModal = () => setShowModalFilter(!showModalFilter);

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 z-10">
      <div className="w-3/4 bg-white rounded-[2vw] sm:rounded-lg shadow-lg">
        <div className="p-[4vw] sm:p-4">
          <div
            className="flex justify-end pb-[4vw] sm:pb-4"
            onClick={handleCloseModal}
          >
            <div className="w-[7vw] h-[7vw] sm:w-9 sm:h-9 border-gray border-2 rounded-full flex justify-center items-center cursor-pointer">
              <svg
                width="4vw"
                height="4vw"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-5 sm:h-5"
              >
                <path
                  d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                  fill="#8F8F9D"
                />
              </svg>
            </div>
          </div>
          <Select
            placeholder="Pilih Lokasi"
            isSearchable
            options={listArea.map((area) => ({
              label: area.nama,
              value: area.id,
            }))}
            value={{
              value: searchArea,
              label: listArea.find((item) => item.id === searchArea)
                ? listArea.find((item) => item.id === searchArea).nama
                : "Pilih...",
            }}
            onChange={(e) => handleSearchArea(e.value)}
            styles={{
              control: (provided, state) => ({
                ...provided,
                border: "none",
                boxShadow: state.isFocused ? "none" : provided.boxShadow,
                "&:hover": {
                  border: "none",
                },
              }),
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "#d86141",
              },
            })}
            className="rounded-lg"
          />
          <div className="pt-[5vw] pb-[3vw] sm:py-4 flex flex-col items-center justify-center gap-3">
            <button className="border-secondary border-[0.5vw] sm:border-2 px-[6vw] sm:px-8 rounded-[2vw] sm:rounded-lg py-[1.5vw] sm:py-2 text-[3vw] sm:text-base text-secondary font-bold hover:bg-secondary hover:text-primary">
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFilter;
