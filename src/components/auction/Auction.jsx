import React from "react";
import Banner from "./Banner";
import Trending from "./Trending";

const Auction = ({photos}) => {
  return (
    <div className="min-h-screen w-7/12 p-2 mt-4 flex flex-col items-center ">
      <Banner />
      <Trending  photos={photos}/>
    </div>
  );
};

export default Auction;
