export const Parrent = (props)=> {
  let x = 111;
  props.fun(props.man)
  return (
    <>
      <h1 style={{color:'green'}}>Дочерний компонент</h1>
    </>
  )
}
