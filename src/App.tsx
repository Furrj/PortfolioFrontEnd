import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//VIEWS
import Home from "./views/Home";
import Blog from "./views/Blog";
import About from "./views/About";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
