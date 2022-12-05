import React from 'react'
import data from './navdata'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="flex w-[100%] items-center bg-white shadow-2xl justify-between">
                <div className="px-10 overflow-hidden py-5 gap-2 flex text-xs font-semibold flex-col w-1/3">
                    <div className="flex gap-5">
                        {data.slice(0,5).map((e, index) => (
                                <div key={index} className="group">
                                    <a href=""  className={`${e.menu ? 'hover:underline' : ''} duration-300`}>{e.lData}</a>
                                    {e.menu === true ?
                                    <>
                                        <div className="-ml-14 group-hover:flex z-0 mt-3 border w-64 absolute hidden flex-col">
                                    <div className=" group-hover:block z-10 w-64 -mt-5 h-5 absolute "></div>
                                            {e.Detail.map((harsh, index) => (
                                                <Link to={`/category/${harsh}`}><p key={index} className='border border-white py-3 px-5 bg-gray-100 hover:bg-gray-300 cursor-pointer hover:font-bold' >{harsh}</p></Link>
                                            ))}
                                        </div>
                                        </> : ' '}
                                </div>
                        ))}
                    </div>


                    <div className="flex gap-5">
                    {data.slice(5,9).map((e, index) => (
                                <div key={index} className="group">
                                    <a href="" className={`${e.menu ? 'hover:underline' : ''} duration-300`}>{e.lData}</a>
                                    {e.menu === true ?
                                    <>
                                    <div className="-ml-8 group-hover:flex z-0 mt-5 w-64 absolute hidden flex-col">
                                    <div className=" group-hover:block z-10 w-64 -mt-5 h-8 absolute "></div>
                                            {e.Detail.map((harsh, index) => (
                                             <Link to= {`/${harsh}`}><p key={index} className='border border-white py-3 px-5 bg-gray-100 hover:bg-gray-300 cursor-pointer hover:font-bold' >{harsh}</p></Link>
                                            ))}
                                        </div>
                                        </> : ' '}  
                                </div>
                        ))}
                    </div>
                </div>




                <div className="w-1/3 flex justify-center">
                    <img className='h-8' src="https://cdn11.bigcommerce.com/s-9srn18to/stencil/2ab3d190-51d4-013b-3add-52beef6de530/e/8e215d00-3d2b-013b-c3ef-3ea28820c29e/img/logo.gif" alt="" />
                </div>
                <div className="flex w-1/3">
                    <p>AUD</p>
                    <p>search</p>
                </div>
            </div>
        </>
    )
}

export default Navbar