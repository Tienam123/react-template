function Wrapper(props)
{
  return (
      <div>
        <h1
            {...props}
        >
          {props.children}
          Hello From Wrapper
        </h1>
      </div>
  );
}

export default Wrapper;