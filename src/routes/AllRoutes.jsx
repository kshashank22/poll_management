import React from "react";
import LogIn from "../components/login/LogIn";
import SignUp from "../components/signup/SignUp";
import { Route, Routes } from "react-router-dom";
import AdminPoll from "../components/adminpoll/AdminPoll";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />}></Route>
      <Route exact path="/signup" element={<SignUp />}></Route>
      <Route exact path="/adminPoll" element={<AdminPoll/>}></Route>
    </Routes>
  );
}

export default AllRoutes;
