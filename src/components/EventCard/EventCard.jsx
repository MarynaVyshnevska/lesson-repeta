import PropTypes from 'prop-types';

// import { formatEventStart } from 'helpers/formatEventStart';
// import { formatEventDuration } from 'helpers/formatEventDuration';
import {formatEventDuration, formatEventStart} from 'helpers';

import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'
import { iconSize } from 'constans';
import css from './EventCard.module.css';


export const EventCard = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end);
    
    // console.log(css);
    // console.log(css[type]);
    return (
        <div className={css.event}>
            <h2 className={css.title}>{name}</h2>
            <p className={css.info}>
                <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
                {location}
            </p>
            <p className={css.info}>
                <FaUserAlt className={css.icon} size={iconSize.sm} />
                {speaker}
            </p>
            <p className={css.info}>
                <FaCalendarAlt className={css.icon} size={iconSize.sm}  />
                {formattedStart}
            </p>
            <p className={css.info}>
                <FaClock className={css.icon} size={iconSize.sm} />
                {duration}
            </p>
            <span className={`${css.chip} ${css[type]}`}>{type}</span>
        </div>
    )
}

EventCard.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
    }),
    
}