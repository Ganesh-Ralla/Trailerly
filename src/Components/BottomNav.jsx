import { Heart, Home, Search, User2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const BottomNav = ({openSearchBar,setOpenSearchBar}) => {
  return (
    <section className='md:hidden p-4 fixed z-10 w-full bottom-2'>
        <div className=' flex items-center gap-8 justify-evenly bg-[#4954af] text-white rounded-full p-4 '>
            <Link className=' opacity-80' to='/' ><Home/></Link>
            <Link className=' opacity-80' onClick={()=>{setOpenSearchBar(!openSearchBar)}} ><Search/></Link>
            <Link className=' opacity-80' to='/favourite' ><Heart/></Link>
            <Link className=' opacity-80' to='/about'><User2/></Link>
        </div>
    </section>
  )
}

export default BottomNav