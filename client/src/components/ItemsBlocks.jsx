import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemsDataFetch } from '../features/Data.js';
import { useNavigate } from 'react-router-dom';

const ItemsBlocks = () => {
    const dispatch = useDispatch();
    const { loading, error, items } = useSelector((state) => state.items);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(ItemsDataFetch());
    }, []);

    return (
        <div className='mx-auto px-4  bg-gray-200 pt-12'>
            {loading && <div class="loader"></div>}
            {error && <div>Error: {error}</div>}
            {items && items.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" >
                    {items.slice(0, 8).map((item) => (
                        <div key={item.id} className="bg-white p-4 pb-6 shadow-md" onClick={() => navigate(`/category/${encodeURIComponent(item.category)}`)} >
                            <h3 className='font-bold text-2xl'>{item.name}</h3>
                            <img src={item.image} alt={item.name} className=" pt-4  h-64 w-64 object-cover rounded-lg" />
                            <p className='pt-8 pb-4 text-sm text-[#085B8A] hover:text-gray-600  cursor-pointer'>Explore more</p>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <div>No items found.</div>
            )}
        </div>
    );
};

export default ItemsBlocks;
