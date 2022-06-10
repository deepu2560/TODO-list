import { Routes, Route } from "react-router-dom";

import { LoginSignup } from "./Pages/loginSignup";
import { Todomain } from "./Pages/todo";
import { Home } from "./Pages/home";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<LoginSignup />} />
      <Route path="/events" element={<Todomain />} />
    </Routes>
  );
};
