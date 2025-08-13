import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
const RenderItemByid = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:8000/store/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(err => console.error('Error fetching item by ID:', err));
    }, [id]);
    console.log(item);
    if (!item) {
        return <div className="text-center py-12">Loading...</div>;
    }
    return (
        <div className='container mx-auto px-4'>
            <div className='flex  justify-between pt-12'>
                <div className='w-[35%]'>
                    <div>
                        <img className='w-full p-8' src={item.image} alt="" />
                    </div>
                </div>
                <div className='w-[50%] p-8'>
                    <div>
                        <h1 className='text-4xl'>{item.description}</h1>
                        <p className='text-xl pt-4 text-green-500'>{item.stock}</p>
                    </div>
                </div>
                <div className='w-[15%] pt-10'>
                    <div>
                        <p><span className='text-xl'>price:</span> <span className='text-3xl'>{item.price}</span>$</p>
                        <div className='flex items-center justify-between pt-4'>
                            <button className=' bg-yellow-400 hover:bg-orange-600 px-10 py-1  rounded-3xl'>Add to Cart</button>
                        </div>
                        <div className='flex items-center justify-between pt-2'>
                            <button className=' bg-yellow-500 hover:bg-orange-600 px-12 py-1  rounded-3xl'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderItemByid
