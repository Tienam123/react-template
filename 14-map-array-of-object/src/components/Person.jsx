function Person(props) {
  const {image,email,firstName,lastName} = props;
  return (
      <div {...props}>
        <img style={{width:'100%',borderRadius:'20px'}} src={image} alt=""/>
        <h2>Имя: {firstName}</h2>
        <h2>Фамилия: {lastName}</h2>
        <p>Email: {email}</p>
      </div>
  );
}

export default Person;
