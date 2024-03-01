type HouseColors = {
  [key: string]: string;
};

const defaultGradient =
  'linear-gradient(to right, white 0%, rgb(10, 9, 9) 100%)';

const houseColors: HouseColors = {
  gryffindor: 'linear-gradient(to right, #740001 0%, #c79106 100%)',
  slytherin: 'linear-gradient(to right, #1a472a 0%, #d3d3d3 100%)',
  ravenclaw: 'linear-gradient(to right, #0e1a40 0%, #955104 100%)',
  hufflepuff: 'linear-gradient(to right, #ecb939 0%, #070101 100%)',
  // We can add more house colors here
};

export const getGradientStyle = (name: string): string => {
  const lowerCaseName = name?.toLowerCase();
  if (lowerCaseName in houseColors) {
    return houseColors[lowerCaseName];
  } else {
    console.error(`Houses with undefined colors: ${name}`);
    return defaultGradient;
  }
};
