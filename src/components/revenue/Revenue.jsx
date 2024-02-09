import React from 'react'
import RevenueCard from './RevenueCard'
import { GoArrowDown, GoArrowUp } from "react-icons/go";
const Revenue = () => {
  return (
    <div className=' w-4/5  flex flex-wrap justify-between p-3'>

        <RevenueCard label="Revenue" ethPrice="5.00" percentage="12.3%" icon={GoArrowUp} iconColor="green"/>
        <RevenueCard label="Spending" ethPrice="2.00" percentage="8.3%" icon={GoArrowUp} iconColor="green"/>
        <RevenueCard label="RDI" ethPrice="14.02" percentage="5.1%" icon={GoArrowDown} iconColor="red"/>
        <RevenueCard label="Estimated" ethPrice="7.00" percentage="3.2%" icon={GoArrowUp} iconColor="green"/>
        {/* <RevenueCard/> */}


    </div>
  )
}

export default Revenue