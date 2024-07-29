import React from 'react';
import { useNavigate } from 'react-router-dom';

function Category() {
  const navigate = useNavigate();
  const categories = ['Vida', 'Conexión', 'Crecimiento', 'Hábitos', 'Entretenimiento', 'Vínculos'];

  const selectCategory = (category) => {
    navigate(`/game/${category}`);
  };

  return (
    <div className="category">
      <h2>Temáticas</h2>
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
