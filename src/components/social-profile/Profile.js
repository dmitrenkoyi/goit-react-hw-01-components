import defaultImg from './default.jpg';
import PropTypes from 'prop-types';

import styles from './SocialProfile.module.css';

const Profile = ({ avatarUrl, name, tag, location, stats }) => (
    <div className={styles.profile}>
        <div>
            <img
                src={avatarUrl}
                alt="Аватар пользователя"
                className={styles.avatar}
                width="200"
            />
            <p className={styles.name}>{name}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </div>

        <ul className={styles.statList}>
            <li className={styles.item}>
                <span>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li className={styles.item}>
                <span>Views</span>
                <span>{stats.views}</span>
            </li>
            <li className={styles.item}>
                <span>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>
    </div>

);

Profile.defaultProps = {
    avatarUrl: defaultImg
};

Profile.propTypes = {
    avatarUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),     
};


export default Profile;