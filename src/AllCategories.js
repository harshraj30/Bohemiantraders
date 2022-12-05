import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import ArrayImage from './ArrayImage';

const AllCategories = () => {

    const data= useParams();
    const slug = data.name.toLowerCase()
    const result = ArrayImage.filter(e => e.Brand.toLowerCase() === slug)

    return (

        
    <div className="">
        <Navbar/>

        <div className="">
            {result.map((e) => (
           <>
            <img src={e.img} alt="" />
            <p>{e.Brand}</p>
            <p>{e.MRP}</p>
           </> ))}
        </div>



    </div>
  )
}

export default AllCategories