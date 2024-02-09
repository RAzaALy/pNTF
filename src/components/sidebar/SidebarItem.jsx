import Link from "next/link";
import React from "react";

const SidebarItem = ({
  label,
  icon: Icon,
  active,
  iconLabel1: Label1,
  iconLabel2: Label2,
}) => {
  return (
    <div className={` item flex  items-center mt-5 mb-4 cursor-pointer justify-between w-4/5 `}>
    <div className={`flex ${label === "Dashboard" ? "font-bold" : ""} `}>

      {Icon && <Icon size={25} className={active ? "text-[#5429FF]" : ""} />}
      <button className={`${active ? "text-[#5429FF]" : ""} ml-2 text-md `}>
        {label}
      </button>
    </div>

      {Label1 && (
        <div className="flex bg-[#F0F0F0] p-2 w-16 justify-between rounded-full ">
          <Label1 size={18} className="text-[#5429FF]" />
          <Label2 size={18}/>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
