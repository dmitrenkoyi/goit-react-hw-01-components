import PropTypes from 'prop-types';

import styles from './Statistics.module.css';


const Statictics = ({title, stats}) => (
    <section className={styles.statistics}>
        {title && <h2 >{title}</h2>}

    <ul className={styles.statList}>
{stats.map((stat) => (
    <li key={stat.id} style={{backgroundColor: randomHsl()}} className={styles.item}>
        <span>{stat.label}</span>
        <span>{stat.percentage}%</span>
    </li>
))}
  </ul>
</section>
);


function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)'
}


Statictics.defaultProps = {
  title: ""
};

Statictics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};




export default Statictics