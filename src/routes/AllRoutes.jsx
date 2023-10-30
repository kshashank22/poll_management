import React from "react";
import LogIn from "./login/LogIn";
import SignUp from "./signup/SignUp";
import { Route, Routes } from "react-router-dom";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />}></Route>
      <Route exact path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}

export default AllRoutes;
