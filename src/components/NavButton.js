import React from "react";

function NavButton(props) {
  return (
    <div className="NavButtonStyle">
      <div>{props.buttonText}</div>
    </div>
  );
}

export default NavButton;
