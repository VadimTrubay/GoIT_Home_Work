import "modern-normalize";
import "../index.css";
import './App.css'
import Profile from './Profile/Profile.jsx'
import FriendList from "./FriendList/FriendList.jsx";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import userData from "../../src/data/userData.json";
import friends from "../../src/data/friendsListData.json";
import items from "../../src/data/transactions.json"


function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends}/>
      <TransactionHistory items={items}/>
    </>
  )
}

export default App;
