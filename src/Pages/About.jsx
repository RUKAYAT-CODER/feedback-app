import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function About() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
      consectetur totam incidunt, iste rem ut tempora modi nobis sit porro nemo
      distinctio dicta quod cum qui adipisci commodi assumenda. Repellendus.{" "}
      <Link to="/"> To Home</Link>
    </div>
  );
}

export default About;
