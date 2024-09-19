import React from 'react'
import "./Card.css"
// import PropTypes from "prop-types";

function Card() {
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   const stylesButton = {
     backgroundColor: "#f1f1f1",
     color: "black",
     borderRadius: "50%",
     margin: "26px 14px",
     height: "40px",
     width: "40px",
     cursor: "pointer",
     fontSize:"16px"
   };
  return (
    <div>
      <div className="card">
        <h1>Feedback App</h1>
        {ratings.map((item, index)=>{
          return <button key={index} style={stylesButton}>{item}</button>; 
        })}
        
      </div>
    </div>
  );
}

export default Card
