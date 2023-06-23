import React, { useState } from 'react';
import './Card.css';

const Card = () => {
  const [cards, setCards] = useState([
    { name: 'John Doe', photo: 'https://media.istockphoto.com/id/1438115452/photo/happy-tourist-with-simit-at-sultan-ahmet-area-istanbul.jpg?s=1024x1024&w=is&k=20&c=7XUuBd3Drrd00wzZU-RjXaj3toCnVn_NPhnrUJJqm7o=' },
    { name: 'Jane Smith', photo: 'https://media.istockphoto.com/id/1442083320/photo/a-child-rides-a-takhi-horse-tuv-region-mongolia.jpg?s=1024x1024&w=is&k=20&c=ILnkncEH4R_K5P7_jV-1fQRbC3uj9lf2TDeNR552TGA=' },
    // Add more objects with names and photo URLs here
    // ...
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = cards[currentCardIndex];
  // console.log(currentCard);

  const handleClick = () => {
    // const nextIndex = (currentCardIndex + 1) % cards.length;
    const nextIndex = (currentCardIndex + 1) 
    setCurrentCardIndex(nextIndex);
    console.log('function called')
  };

  return (
    <div className="card">
      {currentCard && (
        <div>
          <img className="photo" src={currentCard.photo} alt="Profile" />
          <h3>{currentCard.name}</h3>
        </div>
      )}
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default Card;
