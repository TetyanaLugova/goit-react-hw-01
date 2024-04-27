import Profile from './Profile/Profile';
import userData from './userData.json';
import FriendList from './FriendList/FriendList';
import friends from './friends.json';
import transactions from './transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
