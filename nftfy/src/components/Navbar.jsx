


export default function Navbar() {
  return (
    <>
      {/* navbar ////// */}
      <div className='w-full h-16 flex justify-between items-center'>
        <div className='flex w-full justify-between items-center'>
          {/* search  */}
          <div className='flex w-4/12 text-gray-600 rounded-xl justify-around items-center'>
            <input type="search" className=' w-full h-full p-[5px] pl-2 rounded-xl border-none relative bg-transparent' placeholder='Search' />
            <i className="fa-solid fa-magnifying-glass relative right-6"></i>
          </div>
          <div className="pr-6"><button className="pt-2 pb-2 pr-6 pl-6 rounded-lg text-white font-bold bg-gradient-to-r from-[#7c0f35] to-[#5c1160]">Connect</button></div>
        </div>
      </div>
      {/* navbar /////// */}
    </>
  )
}
