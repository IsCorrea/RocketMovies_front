import { Routes, Route, Navigate } from "react-router-dom";

import { New } from "../pages/New";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/New" element={<New />} />
      <Route path="/Details" element={<Details />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}