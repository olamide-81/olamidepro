import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'

const Layout = () => {
  return (
   <BrowserRouter>
     <Routes>
     <Route path='/' element={<HomePage/>}></Route>
     </Routes>
   </BrowserRouter>
  )
}

export default Layout