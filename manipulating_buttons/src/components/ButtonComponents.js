import React from "react";

const formatted = {
  width: "200px",
  height: "30px",
  fontSize: "18px",
  margin: "3px",
};
export default function ButtonComponents(props) {
  const { x, active, clickHandler, id, removeHandler, remove } = props;
  console.log(remove);
  return (
    <>
      <button
        id={id}
        onClick={() => clickHandler(id)}
        style={{
          ...formatted,
          background: `${active === id ? "blue" : ""}`,
          display: `${id === remove ? "none" : ""}`,
        }}
      >
        {x.country}
      </button>
      <button
        id={id}
        onClick={() => removeHandler(id)}
        style={{
          ...formatted,
          background: `${active === id ? "blue" : ""}`,
          display: `${id === remove ? "none" : ""}`,
        }}
      >
        {x.city}
      </button>
    </>
  );
}
