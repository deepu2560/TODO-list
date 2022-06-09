import { Routes, Route } from "react-router-dom";

import { LoginSignup } from "./Pages/loginSignup";
import { Todomain } from "./Pages/todo";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<LoginSignup />} />
      <Route path="/events" elemen={<Todomain />} />
    </Routes>
  );
};
