import React from 'react';
import CardList from '../components/CardList/CardList';

const CardsPage: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '30px 0' }}>Все доступные курсы</h1>
      <CardList />
    </div>
  );
};

export default CardsPage;
