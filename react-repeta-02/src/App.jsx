import PageTitle from './PageTitle/PageTitle.jsx';
import EventBoard from './EvetnBoard/EventBoard.jsx';
import upcomingEvents from './upcoming-evets.json';

function App() {
  return (
    <>
      <PageTitle text="24th World Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
}

export default App;
