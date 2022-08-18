import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Wailtlisthome from "./pages/Wailtlisthome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wailtlisthome />} />
      </Routes>
    </>
  );
}

export default App;
