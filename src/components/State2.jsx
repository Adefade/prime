import React from "react";
import { useState } from "react";
9;
const State2 = () => {
  const [text, setText] = useState("Ray, a drop of golden sun");
  const change = () => {
    text === "Ray, a drop of golden sun"
      ? setText("I would like an hamburger")
      : setText("Ray, a drop of golden sun");
  };

  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <br />
      <h1>{text}</h1>
      <br />
      <button onClick={change} style={{ color: "brown" }}>
        Change
      </button>
      <br />
    </div>
  );
};

export default State2;
