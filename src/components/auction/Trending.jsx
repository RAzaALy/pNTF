import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Spinner from "../spinner/Spinner";

const Trending = ({photos}) => {



  return (
    <div className="w-full flex flex-col p-4">
      <div className="tabs flex justify-between">
        <h1 className="text-2xl font-semibold">Trending Auctions</h1>
        <div className="flex items-center min-w-48 text-[#808080] cursor-pointer ">
          <p className="text-[#5429FF] text-bold pt-1 pb-1 bg-[#f4f4f8] rounded-full  font-extrabold w-16 text-center ml-4">
            Art
          </p>
          <p className="ml-6">Music</p>
          <p className="ml-6">Collection</p>
          <p className="ml-6">Utility</p>
        </div>
      </div>

      {/* Display loading spinner while data is being fetched */}
      {/* {loading && (
        <div className="loading w-full flex justify-center items-center min-h-60">
          <Spinner loading={loading} />
        </div>
      )} */}


     
        <div className="mt-4 flex flex-wrap justify-between">
          {photos && photos.map(({ url: image, id }) => (
            <Card key={id} image={image} />
          ))}
        </div>
      
    </div>
  );
};

export default Trending;
