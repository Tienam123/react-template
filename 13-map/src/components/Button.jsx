function Button(props) {
  const {children,onClick} = props;
  return (
      <button {...props} onClick={onClick}>{children}</button>
  );
}

export default Button;