import React from 'react'
import { FaAmazon } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-[#131921]'>
            <div className='mx-auto px-4 '>
                <div className='flex justify-between items-center text-white py-4'>
                    <div>
                        <FaAmazon className='size-8' onClick={() => navigate('/')} />
                    </div>
                    <div className='flex items-center gap-1'>
                        <CiLocationOn className='size-6' />
                        <div className='text-sm'>
                            <p className=''>Deliver to</p>
                            <p className='font-semibold'>Pakistan</p>
                        </div>
                    </div>
                    <div className='flex items-center h-10'>
                        <select name="All" id="" className='w-12 bg-gray-400 text-sm text-black h-full rounded-l-lg'>
                            <option value="All">All</option>
                            <option value="Arts & Crafts">Arts & Crafts</option>
                            <option value="Computer">Computer</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Software">Software</option>
                            <option value="Toys">Toys</option>
                            <option value="Games">Games</option>
                            <option value=" Sports">Sports</option>
                            <option value="Tech">Tech</option>
                        </select>
                        <input type="text" placeholder='Search Amazon' className='w-[550px] bg-white text-gray-500 px-2 h-full' />
                        <CiSearch className='h-full size-8 bg-[#F6C461] w-12 px-2 rounded-r-lg text-gray-900' />
                    </div>
                    <div>
                        <select name="EN" className='w-10'>
                            <option value="ENGLISH">ENGLISH</option>
                            <option value="Arabic">Arabic</option>
                            <option value="Urdu">Urdu</option>
                            <option value="Chanies">Chanies</option>
                        </select>
                    </div>
                    <div className='text-sm' >
                        <p className=''>Hello,Sign in</p>
                        <h1 className='font-semibold'>Accounts & Lists</h1>
                    </div>
                    <div className='text-sm'>
                        <p className=''>Returns</p>
                        <p className='font-semibold'>& Orders</p>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <h1 className='text-red-500 text-center -mb-4'>{0}</h1>
                            <FiShoppingCart className='size-8' />
                        </div>
                        <p>Cart</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
