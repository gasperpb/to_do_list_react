import { useRef, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const inputRerf = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const value = inputRerf.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });
    inputRerf.current.value = "";
  }
  return (
    <>
      Search
      <input type="search" />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRerf} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3>Items</h3>
      {items.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
}

export default App;
