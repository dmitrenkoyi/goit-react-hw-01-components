import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

import styles from './friends.module.css';


const FriendList = ({friends}) => (
    <ul className={styles.friendList}>
        {friends.map((friend) => (
            <FriendListItem
                key={friend.id}
                isOnline={friend.isOnline}
                avatar={friend.avatar}
                name={friend.name}            
            />
        )
    )}   
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
};




export default FriendList