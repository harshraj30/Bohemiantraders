import React from 'react'
import ProductImageData from './ProductImageData'
import imageStorage from './ImagePgstorage'
import Gyan from './Gyan'
import { Link } from 'react-router-dom'

const ProductImage = () => {
    return (
        <div className="">
            <div className="flex w-[100%] px-10 my-16">
                {ProductImageData.map((e, index) => (
                    <div key={index} className="w-1/4 px-10 text-lg font-semibold hover:shadow-md " >
                        <Link to={`/product/${e.About}`}>
                            <div className="overflow-hidden hover:border-t hover:border-r rounded-xl h-80">
                                <img className='hover:scale-110 duration-500' src={e.Img} alt="" />
                                {/* <button className='absolute -mt-72 ml-28 hover:border hover:bg-white px-3 py-1'>QUICK VIEW</button> */}
                            </div>
                            <div className="mt-2">
                                <h1 className='cursor-pointer leading-8'>{e.About}</h1>
                                <h1 className='cursor-default text-gray-500 leading-8'>{e.Brand}</h1>
                                <h1 className='cursor-default hover:text-blue-800 w-fit leading-8'>{e.MRP}</h1>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="">
                <img src={imageStorage[5]} alt="" />
            </div>

            <div className="text-3xl h-32 flex items-center justify-center font-semibold">
                <h1>EXPLORE</h1>
            </div>


            <div className="w-[100%] flex gap-3 px-5">
                <div className="w-1/4 hover:shadow-md duration-500 hover:shadow-black">
                    <img className='grayscale hover:grayscale-0 duration-500' src={imageStorage[6]} alt="" />
                </div>
                <div className="w-1/4 hover:shadow-md duration-500 hover:shadow-black">
                    <img className='grayscale hover:grayscale-0 duration-500' src={imageStorage[7]} alt="" />
                </div>
                <div className="w-1/2 flex hover:shadow-md duration-500 hover:shadow-black">
                    <img className='grayscale hover:grayscale-0 duration-500' src={imageStorage[8]} alt="" />
                </div>
            </div>

            <Gyan />


            <div className="w-[100%] my-10 flex ">
                {imageStorage.slice(9, 15).map((e, index) => (
                    <div key={index} className="w-1/6 overflow-hidden ">
                        <img className='hover:scale-110 duration-500 cursor-pointer' src={e} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImage