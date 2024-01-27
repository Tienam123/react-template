import PageTitle from '../PageTitle/PageTitle.jsx';
import EventBoard from '../EvetnBoard/EventBoard.jsx';
import upcomingEvents from '../../upcoming-evets.json';
import {Container} from '../App/App.styled.js';

function App() {
  return (
      <Container>
        <PageTitle text="24th World Coalition Conference"/>
        <EventBoard events={upcomingEvents}/>
      </Container>
  );
}

export default App;
