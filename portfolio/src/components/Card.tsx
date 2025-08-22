import React, { useState } from 'react';
import '../assets/CSS/Card.css';

export interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  dateRange: string;
  hoverText: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, altText, title, dateRange, hoverText }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`card-wrapper ${isClicked ? "expanded" : ""}`} onClick={handleClick}>
      <div className="card-container">
        <div className="card-image-wrapper">
          <img src={imageSrc} alt={altText} className="card-image" />
        </div>
        <div className="card-info">
          <h3>{title}</h3>
          <p>{dateRange}</p>
        </div>
      </div>

      <div className="card-click-text">
        {hoverText.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

    </div>
  );
};

export default Card;
