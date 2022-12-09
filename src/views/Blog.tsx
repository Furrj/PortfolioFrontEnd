import React from "react";
import { Routes, Route } from "react-router-dom";

//COMPS
import BlogPost from "../components/BlogPost";

const Blog: React.FC = () => {
  return (
        <Routes>
          <Route path="/" element={<div>Hello</div>} />
          <Route path="/first" element={<BlogPost />} />
        </Routes>
  );
};

export default Blog;
