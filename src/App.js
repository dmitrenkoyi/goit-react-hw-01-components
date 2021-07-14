import ProfileLict from './components/social-profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friend-list/FriendList';
import TransactionHistory from './components/transaction-histiry/TransactionHistory';


import user from './components/social-profile/user.json'
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friend-list/friends.json';
import transactions from './components/transaction-histiry/transactions.json';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileLict
        avatarUrl={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}      
        />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </header>
    </div>
  );
}



export default App;
