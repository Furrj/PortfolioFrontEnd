import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//VIEWS
import Home from "./views/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
