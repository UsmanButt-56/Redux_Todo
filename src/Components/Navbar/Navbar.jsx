import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  return (
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
  );
}

export default Navbar;