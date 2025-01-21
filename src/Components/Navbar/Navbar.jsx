import React,{ useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { DeleteContext } from "../Context/ContextProvider";
function Navbar() {
  const { dlttask, setDlttask } = useContext(DeleteContext);
  console.log(dlttask);
  return (
    <>
      <div className="w-full bg-black">
        <div className="w-11/12 mx-auto py-5 flex items-center">
          <div className="text-white">
            <GiHamburgerMenu size={26} md:size={32} />
          </div>
          <div className="w-full font-bold text-lg md:text-2xl text-white flex justify-center">
            Redux TO-DO App
          </div>
        </div>
      </div>
      {/* Alert */}
      {
        dlttask ? <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <span class="block sm:inline">Item Deleted!!!</span>
        <button class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 5.652a1 1 0 10-1.414-1.414L10 7.586 7.066 4.652a1 1 0 00-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 101.414 1.414L10 12.414l2.934 2.934a1 1 0 001.414-1.414L11.414 10l2.934-2.934z" />
          </svg>
        </button>
      </div> : ""
      }
    </>
  );
}

export default Navbar;