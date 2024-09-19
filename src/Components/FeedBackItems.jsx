import React from "react";
import { useState } from "react";
import Card from "./Shared/Card";
import { FaTimes } from "react-icons/fa";
// import FeedBackList from "./FeedBackList";

const FeedBackItems = ({item, deleteFeedback}) => {
  // const [rating, setRating] = useState(0);
  // const rateChange = () => setRating((curr) => curr + 1);

  // const  [changeText, setchangeText] = useState('Welcome')
  // const changingtext = () => setchangeText((curr)=>  ' to New Change')
  const {id, rating, text } = item
  const [reverse, setReverse] = useState(true);
  return (
    // <Card reverse={reverse}>
    <Card className ={`card ${reverse ? "reverse" : ""}`}>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={()=>deleteFeedback(id)}>
        <FaTimes color="red" />
      </button>
      <div className="text-display">{text}</div>
      {/* <button onClick={() =>{setReverse(!reverse)}}> Click here</button> */}
    </Card>
  );
};

export default FeedBackItems;
