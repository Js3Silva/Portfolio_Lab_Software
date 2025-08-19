import React from 'react';
import '../assets/CSS/TechnologyCard.css';

type TechnologyCardProps = {
  name: string;
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ name, Icon, color }) => {
  return (
    <div className="technology-card">
      <Icon size={60} color={color} />
      <p className="technology-name">{name}</p>
    </div>
  );
};

export default TechnologyCard;