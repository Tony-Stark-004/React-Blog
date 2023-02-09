import React from 'react'
import {theLatest} from './theLatest'
import {anime} from './theLatest'

import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './Components/Body/Body'
import Latest from './Components/Latest/Latest'
import Anime from './Components/Anime/Anime'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <BrowserRouter>
         <Navbar />
         <Routes>
            <Route exact path='/' element={<Home data={theLatest}/>}></Route>
            <Route exact path='anime' element={<Anime data={anime}/>}></Route>
         </Routes>
    </BrowserRouter>
  )
}

export default App
