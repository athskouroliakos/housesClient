import { useEffect, useState } from 'react';
import axios from 'axios';
import HouseCard from './HouseCard';
import Spinner from './Spinner';

interface House {
  id: string;
  name: string;
  color: string;
  founder: string;
  animal: string;
}

const HousesList: React.FC<{ name?: string }> = ({ name }) => {
  const [houses, setHouses] = useState<House[]>([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = name
          ? `https://houses-data.vercel.app/houses?name=${name}`
          : 'https://houses-data.vercel.app/houses';

        const response = await axios.get(url);
        setHouses(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [name]);

  return (
    <>
      <div>
        {isloading ? (
          <Spinner />
        ) : (
          houses.map((house) => <HouseCard key={house?.id} {...house} />)
        )}
      </div>
    </>
  );
};

export default HousesList;
