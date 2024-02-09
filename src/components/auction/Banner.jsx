import React from "react";
// bg-[#c92c75]
const Banner = () => {
  return (
    <div className="banner  bg-gradient-to-r from-purple-500 to-pink-500 min-h-60 w-full rounded-2xl p-8 flex flex-col   ">
      <h1 className="text-6xl text-white mt-10 font-black ">
        Discover, Create and <br /> Sell Your Own NFT .
      </h1>
      <div className="btns mt-6 text-lg ">
        <button className="bg-white text-[#5429FF] p-4 w-48 rounded-full font-bold">Discover</button>
        <button className="ml-6 p-4 rounded-full border-solid border-white border-2 w-48 text-white font-bold">Create</button>
      </div>
    </div>
  );
};

export default Banner;
