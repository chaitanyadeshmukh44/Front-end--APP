// src/CardList.js
import React, { useState, useEffect } from 'react';
import { fetchData } from './api';
import './CardList.scss';

const CardList = () => {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        
      }
    };

    fetchDataFromApi();
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleModalClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="card-list">
      {data.map((item) => (
        <div
          className="card"
          key={item.id}
          onClick={() => handleCardClick(item)}
        >  <img className='image' src={item.thumbnail.small} alt=''></img>
        <div className="learn-more">Learn More</div>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <p>{item.author.name} - {item.author.role}</p>
        </div>
      ))}

      {selectedCard && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <img className='images' src={selectedCard.thumbnail.large} alt='' />
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.content}</p>
            <p><img className='avatar' src={selectedCard.author.avatar} alt='' />{'    '}{selectedCard.author.name}-{selectedCard.author.role}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardList;
