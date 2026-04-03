
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import BottomNav from './Components/BottomNav'
import { useState } from 'react'
import SearchPage from './Pages/SearchPage'
import Favourites from './Pages/Favourites'
import Details from './Pages/Details'
import About from './Pages/About'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  const [openSearchBar, setOpenSearchBar] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const [searchTaken, setSearchTaken] = useState(false)

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Navbar openSearchBar={openSearchBar} setOpenSearchBar={setOpenSearchBar}
          searchInput={searchInput} setSearchInput={setSearchInput}
          searchTaken={searchTaken} setSearchTaken={setSearchTaken} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage searchInput={searchInput} searchTaken={searchTaken} />} />
          <Route path='/favourite' element={<Favourites />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <BottomNav openSearchBar={openSearchBar} setOpenSearchBar={setOpenSearchBar} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
