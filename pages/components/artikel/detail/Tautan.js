import React from "react";
import Swal from "sweetalert2";

const Tautan = (props) => {
  const { data } = props;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    Swal.fire({
      title: "Success",
      text: "Link artikel berhasil di salin",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const handleTwitter = () => {
    window.open(
      `https://twitter.com/share?url=${encodeURIComponent(
        window.location.href
      )}&text=${encodeURIComponent(data?.judul)}`,
      "_blank",
      "width=550,height=400"
    );
  };

  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 py-[2vw] sm:py-4">
      <div className="flex flex-col sm:flex-row gap-[2vw] sm:gap-5 items-center">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4vw"
            height="4vw"
            viewBox="0 0 24 24"
            className="sm:w-[20px] sm:h-[20px]"
          >
            <path
              fill="#8F8F9D"
              d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12q0 .175-.025.363T8.9 12.7l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22"
            />
          </svg>
          <h6 className="text-[3vw] sm:text-base font-semibold text-gray">
            BAGIKAN
          </h6>
        </div>

        {/* Icon Social Media */}
        <div className="flex flex-row gap-[2vw] sm:gap-3 py-[1.5vw] sm:py-3">
          <button
            className="w-[6vw] h-[6vw] sm:w-9 sm:h-9 border rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => {
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}&text=${encodeURIComponent(data?.judul)}`,
                "_blank",
                "width=550,height=400"
              );
            }}
          >
            <svg
              className="sm:w-[20px] sm:h-[20px]"
              width="4vw"
              height="4vw"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                fill="#333333"
              />
            </svg>
          </button>
          <button
            className="w-[6vw] h-[6vw] sm:w-9 sm:h-9 border rounded-full flex justify-center items-center cursor-pointer"
            onClick={handleTwitter}
          >
            <svg
              className="sm:w-[20px] sm:h-[20px]"
              width="4vw"
              height="4vw"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                fill="#333333"
              />
            </svg>
          </button>
          <button className="w-[6vw] h-[6vw] sm:w-9 sm:h-9 border rounded-full flex justify-center items-center cursor-pointer">
            <svg
              className="sm:w-[20px] sm:h-[20px]"
              width="4vw"
              height="4vw"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"
                fill="#333333"
              />
            </svg>
          </button>
          <button
            className="w-[6vw] h-[6vw] sm:w-9 sm:h-9 border rounded-full flex justify-center items-center cursor-pointer"
            onClick={copyToClipboard}
          >
            <svg
              className="sm:w-[20px] sm:h-[20px]"
              width="4vw"
              height="4vw"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#333333"
                d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707l1.414-1.414l-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071a4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707l-1.414-1.414l-.707.707a3.007 3.007 0 0 1-4.243 0a3.005 3.005 0 0 1 0-4.243z"
              />
              <path
                fill="#333333"
                d="m12 4.929l-.707.707l1.414 1.414l.707-.707a3.007 3.007 0 0 1 4.243 0a3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414l.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071a5.006 5.006 0 0 0-7.071 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tautan;
