import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Add } from "../Redux/Action/Action";
import { useDispatch } from "react-redux";
function Home() {
  const [data, setData] = useState("");
  //console.log(data);

  const dispatch = useDispatch();
  const Addition = () =>
  {
    console.log("The data is: ", data);
    dispatch(Add(data));
    setData("");
  }
  return (
    <div className="w-11/12 mx-auto py-4">
      <div className="flex flex-col gap-3">
        <div className="flex justify-center text-2xl font-semibold">
          Enter Your Task
        </div>
        <div className="flex justify-center gap-1 md:gap-3">
          <div className="w-[400px] h-[50px] border-2 border-black rounded-sm">
            <input
              type="text"
              className="w-full h-full px-3"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="w-[90px] h-[50px] border-2 border-black bg-[#FA614F] text-white rounded-md cursor-pointer" onClick={()=>Addition()} >
            <FaPlus className="w-full h-full px-2 md:px-5 py-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
