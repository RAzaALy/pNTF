import React, { useEffect, useState } from "react";
import Creator from "./Creator";
import axios from "axios";

const TopCreators = ({users}) => {


  return (
    <div className="w-4/5 p-2 mt-9">
      <div className="createNav flex justify-between items-center">
        <h1 className="text-2xl hover:underline font-semibold">Top Creators</h1>
        <p className="text-[#7A797D] text-sm font-bold cursor-pointer">See All</p>
      </div>

      <div className="creators flex flex-col mt-9">
        { users && users.map(({ id, name, username }) => (
          <Creator
            key={id}
            id={id}
            name={name}
            username={username}
            isFollow={id % 2 === 0}
            userImage={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww"}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
