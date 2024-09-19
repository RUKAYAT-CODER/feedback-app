import React from "react";


function Button() {
  const handleClick = () => {
   alert('You clicked me')
 }

  return (
    <div>
      {/* <button style={ stylesButton }>{item}</button> */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Button;
