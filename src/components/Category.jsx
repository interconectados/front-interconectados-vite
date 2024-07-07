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
      <h1>Elige una categoría</h1>
      {categories.map((category) => (
        <button key={category} onClick={() => selectCategory(category)}>
          {category}
        </button>
      ))}
       <footer>
        <button onClick={() => navigate('/')}>Salir</button>
      </footer>
    </div>
  );
}

export default Category;
