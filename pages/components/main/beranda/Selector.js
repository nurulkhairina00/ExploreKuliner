import React, { useEffect, useState } from "react";

const Selector = (props) => {
  const { listArea } = props;
  const [inputArea, setInputArea] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const handleInputArea = (value) => setInputArea(value);

  const handleOpenArea = () => setOpen(!open);

  const handleClickArea = (value) => {
    if (value.toLowerCase() !== selected.toLowerCase()) {
      setSelected(value);
      setOpen(!open);
      setInputArea("");
    }
  };

  return (
    <div className="block appearance-none w-full bg-primary p-2 focus:outline-none z-40">
      <div
        className={`bg-primary w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray"
        }`}
        onClick={handleOpenArea}
      >
        {selected ? selected : "Select Area"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m7 10l5 5l5-5"
          />
        </svg>
      </div>

      <ul
        className={`bg-primary mt-2 rounded overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="flex items-center px-2 sticky top-0 bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
            />
          </svg>
          <input
            type="text"
            placeholder="Enter Area Name"
            className="placeholder:text-gray p-2 outline-none w-full"
            value={inputArea}
            onChange={(e) => handleInputArea(e.target.value)}
          />
        </div>
        {listArea.map((area) => (
          <li
            key={area.id}
            className={`p-2 text-sm hover:bg-secondary hover:text-white ${
              area.nama.toLowerCase().startsWith(inputArea) ? "block" : "hidden"
            }
            ${
              area.nama.toLowerCase() === selected?.toLowerCase() &&
              "bg-secondary text-white"
            }
            `}
            onClick={() => handleClickArea(area?.nama)}
          >
            {area.nama}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
