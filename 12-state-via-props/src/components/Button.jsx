function Button(props) {
  const {children,onClick} = props;

  console.log(props);
  return (
      <button {...props} onClick={onClick}>{children}</button>
  );
}

export default Button;