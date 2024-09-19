// import React from "react";
// import PropTypes from 'prop-types'
// import "./Header.css"
// import Button from "./Button/Button";


// function Header({ title, item}) {
//   const stylesHeader = {
//     backgroundcolor: "#123123",
//     color: "purple",
//     borderRadius: "50%",
//     margin: "26px 14px",
//     height: "50px",
//     width: "50px",
//     cursor: "pointer",
//   };
//   const footerButton = {
//     color: "black",
//     padding: "20px 30px",
//     backgroundcolor:"#f1f1f1"
//   }
  
//   return (
//     <div>
//       <div className="container">
//         <h1> {title}</h1>
//         {/* <Button styleButton={stylesHeader} item="Header Button" /> */}
//         <Button stylesButton={footerButton} item = "Login Component"/>
//       </div>
//     </div>
//   );
// }
// Header.defaultProps ={
//   title: "Feedback App"
// }
// Header.propTypes = {
//   title:PropTypes.string
// }

// export default Header;
import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h1>Feedback App</h1>
        
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#a6a99",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;

