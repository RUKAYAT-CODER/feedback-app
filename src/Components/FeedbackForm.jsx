import React from "react";
import Card from "./Shared/Card";
import { useState } from "react";
import Button from "./Shared/Button";
import { RatingSelect } from "./RatingSelect";

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState(" ");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [rating, setRating] = useState(10);
  const handleChange = (e) => {
    const something = e.target.value;
    if (something === "") {
      setbtnDisabled(true);
      setErrorMessage(null);
    } else if (something !== "" && something.trim().length <= 10) {
      setbtnDisabled(true);
      setErrorMessage("The feedback should be above 10 characters");
    } else {
      setbtnDisabled(false);
      setErrorMessage("");
    }
    setText(e.target.value);
    console.log(e.target.value);
  };
  
  // if(text.length >12){
  //   setbtnDisabled(false)
  // }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function handleSubmit(e) {
    e.preventDefault();
    const newFeedback = {
      text: text,
      rating: rating,
    };
    handleAdd(newFeedback)
    console.log(newFeedback);
    setText('')
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect
          select={(rating) => {
            console.log(rating);
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            value={text}
            onChange={handleChange}
          />
          <Button type={"submit"} isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        
      </form>
      {errorMessage && <div className="message">{errorMessage}</div>}
    </Card>
  );
}

export default FeedbackForm;
