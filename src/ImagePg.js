import React from 'react'
import imageStorage from './ImagePgstorage'

const ImagePg = () => {
    return (
        <div className="">
            <div className="">
                <img src={imageStorage[4]} alt="" />
            </div>
            <div className="flex w-[100%] my-16">
            {imageStorage.slice(0,4).map((e, index) => (

                <div key={index} className="w-1/4 overflow-hidden hover:border-white hover:border-2" >
                    <img className='hover:scale-105 duration-500' src={e} alt="" />
                </div>
            ))}
            </div>
        </div>
    )
}

export default ImagePg