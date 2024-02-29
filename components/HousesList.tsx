// HousesList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HouseCard from './HouseCard';

interface House {
  id: string;
  name: string;
  color: string;
  founder: string;
  animal: string;
}

const HousesList: React.FC<{ name?: string }> = ({ name }) => {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = name
          ? `https://wizard-world-api.herokuapp.com/houses?name=${name}`
          : 'https://wizard-world-api.herokuapp.com/houses';

        const response = await axios.get(url);
        console.log('Response data:', response.data);
        setHouses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [name]);

  if (loading) {
    return <div className="my-4">Loading...</div>;
  }

  return (
    <div>
      {houses.map((house) => (
        <div key={house.id}>
          <HouseCard
            name={house.name}
            color={house.color}
            founder={house.founder}
            animal={house.animal}
          />
        </div>
      ))}
    </div>
  );
};

export default HousesList;
