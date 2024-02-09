"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import Revenue from "@/components/revenue/Revenue";
import TopCreators from "@/components/creator/TopCreators";
import Auction from "@/components/auction/Auction";
import { useEffect, useState } from "react";
import getPhotos from "@/services/getPhotos";
import getUsers from "@/services/getUsers";
import Spinner from "@/components/spinner/Spinner";

const Dashboard = () => {
  const [photos, setPhotos] = useState();
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      const photos = await getPhotos();
      setPhotos(photos);
    };
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
      setIsLoading(false);
    };

    fetchPhotos();
    fetchUsers();



  }, []);


  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col  w-full">
      <Navbar />
      <div className="w-full-screen min-h-screen  flex flex-wrap ">
        <Sidebar />
        <Auction photos={photos} />
        <div className="w-3/12 p-2 flex items-center flex-col ">
          <Revenue />
          <TopCreators users={users} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
