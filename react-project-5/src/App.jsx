/* Default imports */
import React, { useRef, useState } from "react";

// Code ....
const App = () => {
  const [ptitle, setPtitle] = useState("");
  const inputRef = useRef();
  function onChangeInput() {
    setPtitle(inputRef.current.value);
  }
  return (
    <React.Fragment>
      <form action="">
        <input
          onChange={onChangeInput}
          ref={inputRef}
          type="text"
          name="name"
          placeholder="Введите Имя"
        />
      </form>
      <h1>Значения нашего инпут: {ptitle}</h1>
    </React.Fragment>
  );
};

export default App;
