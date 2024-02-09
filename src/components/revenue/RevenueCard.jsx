import React from "react";
import { SiEthereum } from "react-icons/si";
import { GoArrowUp } from "react-icons/go";

const RevenueCard = ({label,ethPrice,percentage,icon:Icon , iconColor }) => {
  return (
    <div className="revenueCard flex flex-col w-2/5 text-[#7A797D] mt-6">
      <p className="text-bold font-bold">{label}</p>
      <div className="ethAmount flex items-center mt-3 ">
        <SiEthereum  size={25} className="text-blue-500"/>
        <h1  className="text-3xl text-black  font-bold">{ethPrice}</h1>
        <p className="mt-3 ml-1 text-sm">ETH</p>
      </div>

      <div className="ethInfo flex justify-center mt-3 p-3 border-solid border-gray-300 border-2 rounded-full">
        <Icon  color={iconColor}/>
        <p className="text-sm">{percentage}</p>
      </div>
    </div>
  );
};

export default RevenueCard;
