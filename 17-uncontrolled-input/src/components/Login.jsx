function Login(props) {
  const [username, setUsername] = useState('124');
  const [password, setPassword] = useState('236346');
  function handleFormSubmit(e) {
    e.preventDefault()
    const data = {
      username:e.target.elements.username.value,
      password:e.target.elements.password.value
    }
  }
  
  return (
      <form onSubmit={handleFormSubmit}>
        <label>
          <p>Login: </p>
          <input
              type="text"
              placeholder="Enter Login"
              value={username}
              name="username"/>
        </label>
        <label>
        <p>Password:</p>
          <input type="password"
                 value={password}
                 placeholder="Enter Password"
                 name="password"/>
        </label>
        <button type="submit">Send</button>
      </form>
  );
}

export default Login;