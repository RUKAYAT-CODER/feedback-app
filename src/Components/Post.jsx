import React from "react";
import { useParams } from "react-router-dom";
import {Routes, Route, useNavigate, Navigate} from "react-router-dom"

function Post() {
  const params = useParams();
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/about')
  }
  const status = 200;
  if (status === 404) {
    return <Navigate to='/not-found'></Navigate>
  }
  return (
    <div>
      <h1>
        post {params.id} {params.name}
      </h1>
      <button onClick={onClick}>Click to navigate</button>
      <Routes>
        <Route path="/show" element={<h1>show a nested component</h1>}/>
      </Routes>
    </div>
  );
}

export default Post;
