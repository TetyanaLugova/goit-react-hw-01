import Profile from './Profile';
import userData from './userData.json';

const App = () => {
  return (
    <>
      <Profile userData={userData} />
    </>
  );
};

export default App;
