import React from "react";
import { FaPlus } from "react-icons/fa";
function Home() {
  return (
    <div className="w-11/12 mx-auto py-4">
      <div className="flex flex-col gap-3">
        <div className="flex justify-center text-2xl font-normal">
          Enter Your Task
        </div>
        <div className="flex justify-center gap-3">
            <div className="w-[400px] h-[50px] border-2 border-black rounded-sm">
              <input type="text" className="w-full h-full px-3" />
            </div>
            <div className="w-[60px] h-[50px] border-2 border-black bg-[#FA614F] text-white rounded-md">
              <FaPlus className="w-full h-full px-5"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;