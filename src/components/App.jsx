import Profile from './Profile/Profile';
import userData from './userData.json';
import FriendList from './FriendList/FriendList';
import friends from './friends.json';

const App = () => {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
