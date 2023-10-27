import React from "react";
import SignUp from "../components/signup/SignUp";
import "./PollPage.css";
import LogIn from "../components/login/LogIn";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function PollPage() {
  return (
    <BrowserRouter>
      <div className="pollPageContainer">
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route exact path="/login" element={<LogIn />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default PollPage;
