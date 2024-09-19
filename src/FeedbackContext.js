// import { createContext, useContext, useState } from "react";
// import feedbackData from "./Components/FeedbackData"

// const FeedbackContext = createContext();

// export const FeedbackProvider = ({ children }) => {
//   const [feedback, setFeedback] = useState(feedbackData);
//   const averageRating =
//     feedback.reduce((acc, item) => {
//       return (acc += item.rating);
//     }, 0) / feedback.length;
  
//   return (
//     <FeedbackContext.Provider value={{ feedback, averageRating }}>
//       {children}
//     </FeedbackContext.Provider>
//   );
// };

// export default FeedbackContext;


import { createContext, useContext, useState } from 'react'
import feedbackData from "./Components/feedbackData"


const FeedbackContext = createContext()
const FeedbackProvider = ({ children }) => {
  
  const [feedback, setFeedback] = useState(feedbackData) 
  const averageRating = feedback.reduce((acc, item) => {
    return (acc + item)
  },0) /feedback.length
}

return <FeedbackContext.Provider value={{feedback, averageRating}}>{ children}</FeedbackContext.Provider>

export default FeedbackContext
