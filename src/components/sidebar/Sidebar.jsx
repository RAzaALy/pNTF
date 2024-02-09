import React from 'react'
import Link from 'next/link';
import { BiSolidDashboard } from "react-icons/bi";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { SiTransportforlondon } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdOutlineModeNight } from "react-icons/md";
import SidebarItem from './SidebarItem';
import Balance from './Balance';

const Sidebar = () => {
  return (
    <div className='min-h-screen  w-2/12 flex flex-col p-5 mt-4 pl-8 text-[#7A797D] font-500 text-base relative'> 
      <Link href={'/dashboard'}>
      <SidebarItem label="Dashboard"  icon={BiSolidDashboard} active={true} />
      </Link>
      <SidebarItem label="Market" icon={SiGooglemarketingplatform}/>
      <SidebarItem label="ActiveBids" icon={MdAirplanemodeActive}/>

      <h1 className='mt-6 mb-6  text-sm'>PROFILE</h1>
      <SidebarItem label="My Portfolio" icon={FaWallet}/>
      <SidebarItem label="Wallet" icon={SiTransportforlondon}/>
      <SidebarItem label="Favourites" icon={MdOutlineFavorite}/>
      <SidebarItem label="History" icon={FaHistory}/>
      <SidebarItem label="Settings" icon={IoMdSettings}/>

      <h1 className='mt-6 mb-6  text-sm'>OTHER</h1>


      <SidebarItem label="Light Mode" icon={MdDarkMode} iconLabel1={MdLightMode} iconLabel2={MdOutlineModeNight}/>


        <Balance />
    </div>
  )
}

export default Sidebar