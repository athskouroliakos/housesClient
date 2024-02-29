// pages/index.tsx
import HousesList from '../components/HousesList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Wizard Houses</h1>
      <HousesList />
    </div>
  );
};

export default Home;
