import React, { useState } from "react";

const State3 = () => {
  const [color, setColor] = useState("blue");
  const colour = () => {
    color === "blue" ? setColor("red") : setColor("blue");
  };
  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <br />
      <h1>This is color {color}</h1>
      <br />
      <button onClick={colour}>toggle</button>
      <br />
      <br />
    </div>
  );
};

export default State3;
