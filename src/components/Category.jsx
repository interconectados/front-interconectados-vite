import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
function Category() {
  const navigate = useNavigate();
  const categories = ['Vida', 'Conexión', 'Crecimiento', 'Hábitos', 'Entretenimiento', 'Vínculos'];

  const selectCategory = (category) => {
    navigate(`/game/${category}`);
  };

  return (
    <div>
      <Header/>
      <h2>Categorías:</h2>
    <div className="category">

      <div className='content-buttons'>
      {categories.map((category) => (
        <button key={category} onClick={() => selectCategory(category)}>
          {category}
        </button>
      ))}
      </div>
    </div>
    </div>
  );
}

export default Category;
