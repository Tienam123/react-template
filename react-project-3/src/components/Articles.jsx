import React from "react";

export default function Articles(props) {
  const definitions = props.data;
  return (
    <React.Fragment>
      {definitions.map((el, idx) => {
        const { title, body, href } = el;
        return (
          <section key={idx}>
            <h2>{title}</h2>
            <p>{body}</p>
          </section>
        );
      })}
    </React.Fragment>
  );
}
