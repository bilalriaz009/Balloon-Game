import React from "react";
const Balloon = (props) => {
  var rc =
    "#" +
    Math.floor(Math.random() * 16777215) //random hex-color scheme code
      .toString(16)
      .slice(0, 6);
  console.log(rc);
  return (
    <div //balloon making styling
      style={{
        width: props.random * 5,
        height: props.random * 5,
        fontSize: props.random * 3 - props.random,
        textIndent: -props.random + 3,
        borderRadius: "50%",
        backgroundColor: rc,
        border: "2px solid black",
        transform:
          "translate(" +
          props.key * props.random +
          "px, " +
          props.key * props.random +
          "px)",
      }}
      onClick={props.onClick}
    >
      <span //styling of text on balloon
        style={{
          color: "black",
          cursor: "context-menu",
          webkitUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
        }}
      >
        {props.random}
      </span>
    </div>
  );
};

export default Balloon;
