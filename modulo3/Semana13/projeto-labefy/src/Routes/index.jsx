import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Playlist from '../pages/Playlist'

function Router (){
    return(
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='criar-playlist' element={<Playlist />} />
        </Routes>
    )
}

export default Router