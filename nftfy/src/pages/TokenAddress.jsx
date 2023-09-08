import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import React from 'react'

function TokenAddress() {
  return (
    <>
    <div className='flex w-full h-screen bg-gray-100 '>
      <Sidebar/>
      <div className="xl:w-9/12 lg:w-8/12 md:w-7/12">
      <Navbar/>
      </div>
    </div>
    <div className="w-full h-[8%] bg-[#f30050] z-10 fixed bottom-0 left-0">
    </div>
    </>
  )
}

export default TokenAddress