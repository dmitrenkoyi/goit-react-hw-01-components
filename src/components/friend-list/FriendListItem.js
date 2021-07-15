import PropTypes from 'prop-types';

import styles from './friends.module.css';

const FriendListItem = ({isOnline, avatar, name}) => (
<li className={styles.item} >
   <span className={styles.status}
      style={{ backgroundColor: isOnline ? '#256638' : '#FF2137' }}/>  
  <img className={styles.avatar} src={avatar} alt={name} width="48" />
  <p className={styles.name}>{name}</p>
</li>
);


FriendListItem.propTypes = {   
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};





export default FriendListItem