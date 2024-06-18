import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUp from "./authorization/Signup";
import Login from "./authorization/Login";
import Welcome from "./authorization/Welcome";
import Home from "./component/Home";
import JoinQuiz from "./component/JoinQuiz";
import QuizPlay from "./component/QuizPlay";

function App() {
  return (
    <div className="App">
       <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/JoinQuiz" element={<JoinQuiz/>}/>
                <Route path="/Quizstart" element={<QuizPlay/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
