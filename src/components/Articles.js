export const Articles = (props) => {
const definitions = props.data
  return (
    <>
      {definitions.map((item,index)=> {
        return (
          <section key={index}>
            <h2>{item.title}</h2>
            <div>
              <p>{item.body}</p>
            </div>
          </section>
        )

      })}
    </>
  )
}
