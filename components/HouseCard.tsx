import React from 'react';
import styled from 'styled-components';
import { HouseColors, houseColors } from '../utils/colors';

interface HouseCardProps {
  name: string;
  color: string;
  founder: string;
  animal: string;
}

const defaultGradient =
  'linear-gradient(to right, white 0%, rgb(10, 9, 9) 100%)';

const getGradientStyle = (name: string): string => {
  const lowerCaseName = name.toLowerCase();
  if (lowerCaseName in houseColors) {
    return houseColors[lowerCaseName];
  } else {
    console.error(`Invalid house name: ${name}`);
    return defaultGradient;
  }
};

const HouseCardContainer = styled.div`
  position: relative;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-family: Verdana, sans-serif;
  border: 1px solid #ddd;
  width: 30%;
`;

const Animal = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
`;

const GradientBar = styled.div<{ name: string }>`
  width: 100%;
  height: 25px;
  background: ${(props) => getGradientStyle(props.name)};
`;

const FounderContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0;
    margin-right: 5px;
  }
`;

const HouseCard: React.FC<HouseCardProps> = ({
  name,
  color,
  founder,
  animal,
}) => {
  return (
    <HouseCardContainer>
      <Animal>{animal}</Animal>
      <h3>{name}</h3>
      <GradientBar name={name}></GradientBar>
      <FounderContainer>
        <p>Founder:</p>
        <h3>{founder}</h3>
      </FounderContainer>
    </HouseCardContainer>
  );
};

export default HouseCard;
