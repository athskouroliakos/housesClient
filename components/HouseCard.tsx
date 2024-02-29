// HouseCard.tsx
import React from 'react';
import styles from './HouseCard.module.css';

interface HouseCardProps {
  name: string;
  color: string;
  founder: string;
  animal: string;
}

const HouseCard: React.FC<HouseCardProps> = ({
  name,
  color,
  founder,
  animal,
}) => {
  return (
    <div className={`${styles['house-card']} ${color?.toLowerCase()}`}>
      <div className={styles['animal']}>{animal}</div>
      <h3>{name}</h3>
      <div className={styles['gradient-bar']}></div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 30 }}>
        <p style={{ margin: 0, marginRight: '5px' }}>Founder:</p>
        <h3 style={{ margin: 0 }}>{founder}</h3>
      </div>
    </div>
  );
};

export default HouseCard;
