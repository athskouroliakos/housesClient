import React from 'react';
import styled from 'styled-components';

interface HouseCardProps {
  name: string;
  color: string;
  founder: string;
  animal: string;
}

const houseColors: { [key: string]: string } = {
  gryffindor: 'linear-gradient(to right, #740001 0%, #c79106 100%)',
  slytherin: 'linear-gradient(to right, #1a472a 0%, #d3d3d3 100%)',
  ravenclaw: 'linear-gradient(to right, #0e1a40 0%, #955104 100%)',
  hufflepuff: 'linear-gradient(to right, #ecb939 0%, #070101 100%)',
  // Add more houses as needed
};

const getGradientStyle = (name: string): string => {
  return (
    houseColors[name.toLowerCase()] ||
    'linear-gradient(to right, white 0%, rgb(10, 9, 9) 100%)'
  );
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
  margin-top: 30px;

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
