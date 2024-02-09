import React from "react";
import { SiEthereum } from "react-icons/si";
import { FaChevronRight } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const Balance = () => {
  return (
    <div className="bg-[#5429FF] w-4/5 min-h-48  mt-6 rounded-xl flex flex-col items-center pt-5 pb-5 text-white absolute bottom-6">
      <p className="text-sm">Your Blance</p> 
      <h2 className="text-3xl mt-3">1,034.02</h2>
      <div className="eth-icon flex mt-3 items-center justify-between">
        <div className="iconbox w-7 h-7 rounded-full bg-white flex justify-center items-center text-black">
        <SiEthereum />

        </div>
        <p className="ml-4 text-base">ETH</p>
      </div>

      <div className="btn mt-5 flex w-4/5 bg-white p-2 rounded-lg text-black font-bold justify-between items-center cursor-pointer">
      <div  className="iconbox w-7 h-7 rounded-full bg-[#5429FF] flex justify-center items-center text-white">
         <IoMdAdd />
      </div>
        <p className="text-sm">Top to Balance</p>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Balance;
