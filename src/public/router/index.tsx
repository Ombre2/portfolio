import About from "public/pages/about/About";
import Contact from "public/pages/contact";
import Home from "public/pages/home";
import Project from "public/pages/project";
import Skills from "public/pages/skills";
import Layout from "public/shared/components/layout";
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
