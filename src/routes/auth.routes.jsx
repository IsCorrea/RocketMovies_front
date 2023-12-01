/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from "../pages/SignIn";

export function AuthRoutes() {
  const user = localStorage.getItem("@rocketmovies:user");

  return(
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  )

}