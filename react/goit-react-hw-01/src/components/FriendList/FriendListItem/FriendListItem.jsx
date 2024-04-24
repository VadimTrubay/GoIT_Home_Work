import styles from './FriendListItem.module.css';
import PropTypes from "prop-types";
import clsx from 'clsx';

function FriendListItem({avatar, name, isOnline}) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48"/>
      <p>{name}</p>
      {isOnline
        ? <p className={clsx(
          {[styles.online]: isOnline}
        )}> online </p>
        : <p className={clsx(
          {[styles.offline]: !isOnline}
        )}> offline </p>}
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,

};
export default FriendListItem;
