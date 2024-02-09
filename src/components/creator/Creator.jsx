import React from "react";
import Image from "next/image"; // Import Next.js's Image component

const Creator = ({ id, name, username, userImage, isFollow }) => {
  const followBtnClasses = `followBtn p-3 rounded-full font-semibold min-w-28 ${
    isFollow ? "bg-[#5429FF] text-white" : "bg-[#f3f3ff] text-[#5429FF]"
  }`;

  return (
    <div className="creator flex justify-between items-center mt-8">
      <div className="userInfo flex items-center">
        <p>{id}.</p>
        {/* Use Next.js's Image component */}
        <Image src={userImage} alt={username} width={40} height={40} className="rounded-full ml-3"  />
        <div className="ml-3 flex flex-col">
          <h2 className="text-base font-semibold">{name}</h2>
          <p className="text-[#7A797D] text-xs lowercase">@{username}</p>
        </div>
      </div>
      <button className={followBtnClasses}>{isFollow ? "Following" : "Follow"}</button>
    </div>
  );
};

export default Creator;
