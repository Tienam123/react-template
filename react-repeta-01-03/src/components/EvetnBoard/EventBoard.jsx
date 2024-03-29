import Event from './Event.jsx';
import PropTypes from 'prop-types';
import {EventBoardStyled} from './EventBoard.styled.jsx';

function EventBoard({events}) {
  return (
      <>
        <h2>Event board</h2>
        <EventBoardStyled>
          {events.map(({name, location, speaker, type, time}) => (
              <Event
                  key={name}
                  name={name}
                  location={location}
                  speaker={speaker}
                  type={type}
                  start={time.start}
                  end={time.end}
              />
          ))}
        </EventBoardStyled>
      </>
  );
}

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        speaker: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        time: PropTypes.exact({
          start: PropTypes.string.isRequired,
          end: PropTypes.string.isRequired,
        }),
      }),
  ),
};
export default EventBoard;
