import React from 'react';
import { useNavigate } from 'react-router-dom';

function Category() {
  const navigate = useNavigate();
  const categories = ['todxs', 'familia', 'amigos', 'cita', 'solo'];

  const selectCategory = (category) => {
    navigate(`/game/${category}`);
  };

  return (
    <div className="category">
      <h2>¿Con quién vas a jugar?</h2>
      {categories.map((category) => (
        <button key={category} onClick={() => selectCategory(category)}>
          {category}
        </button>
      ))}
       <div className=''>
        <button className='btn out' onClick={() => navigate('/')}>Salir</button>
      </div>
    </div>
  );
}

export default Category;
