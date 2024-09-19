import React from "react";

function Button({ children, type, isDisabled, btnBg }) {
  return (
   
    <button type ={type} disabled={isDisabled} className={`btn btn-${btnBg}` }>{children}</button> 
  );
  
}
Button.defaultProps ={
  btnBg: "secondary",
  isDisabled: false,
  type:"button"
  
}
export default Button;



