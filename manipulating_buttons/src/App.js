import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as data from "./data.json";
import ButtonComponents from "./components/ButtonComponents";

function App() {
  const [Data, setData] = useState(data);
  const [Remove, setRemove] = useState(-1);
  const [Active, setActive] = useState(0);
  const clickHandler = (index) => {
    setActive(index);
  };
  const removeHandler = (index) => {
    console.log(Remove);
    setRemove(index);
  };
  return (
    <div className="App">
      {Data.list.map((x, index) => {
        if (x.country && x.city)
          return (
            <ButtonComponents
              id={index}
              x={x}
              active={Active}
              remove={Remove}
              clickHandler={clickHandler}
              removeHandler={removeHandler}
            />
          );
        else return <></>;
      })}
    </div>
  );
}

export default App;
