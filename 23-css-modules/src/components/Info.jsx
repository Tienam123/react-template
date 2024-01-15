import style from "./Info.module.scss";

function Info()
{
  return (
      <>
      <h1 className={style.title}>Hello from the info component</h1>
        <button className={style.button}>Click me</button>
      </>
  )
}

export default Info;