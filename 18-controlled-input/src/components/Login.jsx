import {useState} from 'react';

function Login(props) {
  const [data, setData] = useState({
    username:'',
    password:''
  });
  function handleSubmitForm(e) {
    e.preventDefault();
    console.log(data);
  }
function onInputChange(e,name) {
setData({...data,[name]:e.target.value})
}



  return (
      <form onSubmit={handleSubmitForm}>
        <label>
          <p>Login: </p>
          <input
              onChange={(e) => onInputChange(e,'username')}
              value={data.username}
              type="text"
              placeholder="Enter Login"
              />
        </label>
        <label>
          <p>Password:</p>
          <input type="password"
                 onChange={(e) => onInputChange(e,'password')}
                 value={data.password}
                 placeholder="Enter Password"
          />
        </label>
        <button type="submit">Send</button>
      </form>
  );
}

export default Login;
