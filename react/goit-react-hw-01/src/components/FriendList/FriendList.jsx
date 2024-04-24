import styles from './FriendList.module.css';
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem/FriendListItem.jsx";


function FriendList({friends}) {
  return (
    <div>
      <ul className={styles.friend_list}>
        {friends.map(({id, avatar, name, isOnline}) => (
            <li key={id}>
              <FriendListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
              />
            </li>
          )
        )}
      </ul>
    </div>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
export default FriendList;
