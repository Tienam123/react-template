import PropTypes from 'prop-types';
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserAlt,
} from 'react-icons/fa';
import {formatEventDuration, formatEventsStart} from '../../utils/index.js';
import {iconSize} from '../../constans/index.js';
import css from './Event.module.scss';

import {Card, Chip, EventName, Info} from './Event.styled.jsx';

function Event({name, location, speaker, start, end, type}) {
  const formattedStart = formatEventsStart(start);
  const duration = formatEventDuration(start, end);

  return (
      <Card>
        <EventName>{name}</EventName>
        <Info>
          <FaMapMarkerAlt size={iconSize.sm}/>
          {location}
        </Info>
        <Info>
          <FaUserAlt size={iconSize.sm}/>
          {speaker}
        </Info>
        <Info className={css.info}>
          <FaCalendarAlt size={iconSize.sm}/>
          {formattedStart}
        </Info>
        <Info>
          <FaClock size={iconSize.sm}/>
          {duration}
        </Info>
        <Chip type={type}>{type}</Chip>
      </Card>
  );
}

export default Event;
Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
