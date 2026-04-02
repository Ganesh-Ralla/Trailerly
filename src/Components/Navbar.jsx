import { Search } from 'lucide-react'
import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = ({ openSearchBar, setOpenSearchBar, searchInput, setSearchInput, setSearchTaken }) => {


    const navigate = useNavigate()

    const handleSearch = (e) => {
        setSearchInput(e.target.value)

    }
    const handleKey = (e) => {
        if (e.key === "Enter") {
            setSearchTaken(true)
            navigate('/search')

            setOpenSearchBar(false)
        }

    }
    console.log(searchInput);


    return (
        <header className=' bg-linear-to-b from-[#202f6c] to-transparent p-4 md:px-8 lg:px-12 fixed top-0 w-full z-10'>
            <nav className=' flex items-center justify-between text-white'>
                <Link to='/' className=' text-2xl font-extrabold'>Trailerly</Link>
                <Search className=' md:hidden' onClick={() => { setOpenSearchBar(!openSearchBar) }} />
                <div className=' hidden md:flex md:items-center gap-4'>
                    <Link className=' flex items-center gap-2 p-2 border rounded-full'  >
                        <input type="text" name="" id="" className=' border-0 outline-0 px-2 pe-14'
                            placeholder='Search' value={searchInput} onChange={handleSearch} onKeyDown={handleKey} />
                        <Search />
                    </Link>
                    <Link to='/' >Home</Link>
                    <Link to='/favourite' >Favourites</Link>
                    <Link to='/about' >About</Link>
                </div>
            </nav>
            {
                openSearchBar &&
                <div className=''>
                    <input type="text" className=' px-4 mt-4 outline-0 border-0 bg-[#849af1] w-full rounded-full p-3'
                        placeholder='Search' value={searchInput}
                        onChange={handleSearch} onKeyDown={handleKey} />
                </div>
            }
        </header>
    )
}

export default Navbar