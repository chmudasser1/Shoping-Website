import React from 'react'
import { IoMenu } from "react-icons/io5";

const ItemsList = () => {
    return (
        <div className='bg-[#232F3E]'>
            <div className=' mx-auto px-4 py-1'>
                <div className='flex items-center text-white gap-6'>
                    <div className='flex items-center gap-0.5'>
                        <IoMenu className='size-6'/>
                        <p>All</p>
                    </div>
                    <div>
                        Today's deals
                    </div>
                    <div>
                        Registry
                    </div>
                    <div>
                        Prime Video
                    </div>
                    <div>
                        Gift Cards
                    </div>
                    <div>
                        Customer Services
                    </div>
                    <div>
                        Sell
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemsList
