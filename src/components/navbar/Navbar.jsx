import React, { useState } from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {

  return (
    <div className=" flex justify-between items-center h-24  mx-auto px-4   w-full">
      {/* Logo */}
      <h1 className="text-3xl  text-black font-extrabold">PNFT.</h1>

      {/* Desktop  */}
      <div className="search-box flex  items-center w-100 ">
        <CiSearch className="w-9 h-9 text-[#808080] font-semibold" />
        <input
          type="text"
          className="search-input p-3 ml-3 w-96 "
          placeholder="Search Item, Collection and Account.."
        />
      </div>

      <div className="user-actions flex items-center font-semibold cursor-pointer">
        <div className="hidden md:flex">
          <div className="switch-toggle flex justify-between   bg-[#f4f4f8] rounded-full  p-2 pl-4 pr-4  text-base">
            <button className="text-blue-600 rounded-full bg-white h-full p-2 w-20 pl-3 ">
              User
            </button>
            <button className="ml-2 text-[#808080] w-20 ">Creator</button>
          </div>
        </div>

        <div className="notification ml-4 w-10 h-10 rounded-full border-solid border-2 border-sky-[#333] p-2 flex justify-center items-center text-[#808080]">
          <IoNotificationsSharp className="w-7 h-7" />
        </div>

        <div className="w-14 h-14 rounded-full overflow-hidden ml-7">
          <img
            src="https://www.shutterstock.com/image-vector/black-woman-smiling-portrait-vector-600nw-2281497689.jpg"
            alt="Avatar"
            className="overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};


export default Navbar;
