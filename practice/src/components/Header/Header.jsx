import './Header.css'

function Header(props) {

  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
  function getRandomId(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  const descriptions = reactDescriptions[getRandomId(reactDescriptions.length)];
  return (

      <header>
        <img src={props.img} alt="Stylized atom"/>
        <h1>React Essentials</h1>
        <p>
          {descriptions} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

export default Header;