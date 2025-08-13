import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Catagory = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/store/category/${encodeURIComponent(category)}`)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error('Error fetching category items:', err));
  }, [category]);

  return (
    <div className='mx-auto px-4 bg-gray-200 pt-12 min-h-screen'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {items.map(item => (
          <div key={item._id} className="bg-white p-4 shadow rounded" onClick={() => navigate(`/item/${item._id}`)}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} className="w-44 h-44 object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagory;