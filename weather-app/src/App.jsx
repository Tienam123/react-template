import React, {useRef, useState} from 'react';

const App = (props) => {
  const [data, setData] = useState({});
  const [town, setTown] = useState('');
  const API_KEY = 'cc938f56ba4fdc0dd674912ebe80dd5f';
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=imperial&appid=${API_KEY}`;

  const searchWeather = (event) => {
    const form = useRef();
    const formData = new FormData()
    if (event.key === 'Enter') {

    }
  };
  return (
      <div className="app">
        <form ref={formRef} className="inp-field" style={{display:'flex',flexDirection:'column'}}>
          <label><input type="text"
                        value={town}
                        onChange={(event) => setTown(event.target.value)}
                        placeholder="Enter Location"
                        onKeyDown={searchWeather}
          /></label>
          <label>
            <input type="radio" name="type" value="metric"/>
            <span>Метрический</span>
          </label>
          <label>
            <input name='type' type="radio" value="imperial"/>
            <span>Имперический</span>
          </label>
        <button type="submit">Подтвердить</button>
        </form>
      </div>
  );
};

export default App;