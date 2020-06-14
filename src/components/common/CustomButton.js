import React from "react";

function CustomButton(props) {
  return (
    <button onClick={props.handleClick}>
      {props.btnText}
      <br />
      {props.children}
    </button>
  );
}

export default CustomButton;
