import "./App.css";
import Header from "./Components/Header";
import { createContext, useState } from "react";
import FeedBackList from "./Components/FeedBackList";
import Card from "./Components/Shared/Card";
import FeedbackStat from "./Components/FeedbackStat";
import FeedbackForm from "./Components/FeedbackForm";
import Button from "./Components/Shared/Button";
import { v4 as uuidv4 } from "uuid";
import {BrowserRouter as Router, Route, Routes, Link, NavLink} from "react-router-dom"
import About from "./Pages/About"
import Post from "./Components/Post"
import { FeedbackProvider } from "./FeedbackContext"



function App() {
  const [feedback, setfeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      const newFeed = feedback.filter(item => item.id !== id);
      setfeedback(newFeed)
    }
    
  }

  // const averageRating = feedback.reduce((acc, item) => {
  //   return acc += item.rating
  // }, 0) / feedback.length
  const addFeedback = (newFeedback) =>{
    // console.log("feedback from app", newFeedback)
    newFeedback.id = uuidv4()
    console.log(`Leadway feedback${newFeedback.id}`)
      setfeedback([newFeedback, ...feedback])
  }
  return (
    <FeedbackProvider>
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Link to='/about'>Back to AboutPage</Link>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStat />
                  <FeedBackList
                    deleteFeedback={deleteFeedback}
                  />
                </>
              }
            />

            <Route path="about" element={<About />}></Route>
            <Route path='/post/*' element={<Post />}></Route>
          </Routes>
          <Card>
            <NavLink to='/'  activeclassName="active">Home</NavLink>
            <NavLink to='/about' activeclassName="active">About</NavLink>
          </Card>
        </div>
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
