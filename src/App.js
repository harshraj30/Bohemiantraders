import React from 'react'
import ImagePg from './ImagePg'
import Navbar from './Navbar'
import ProductImage from './ProductImage'
import { Route, Routes } from 'react-router-dom'
import AllCategories from './AllCategories'
import ProductList from './ProductList'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<div className=""><Navbar /> <ImagePg /> <ProductImage /> </div>} />
      <Route path='/category'  element={<ProductImage/>} />
      <Route path='/category/:name'  element={<AllCategories/>} />
      <Route path='/product/:slug' element={<ProductList/>} />
    </Routes>
  )
}

export default App