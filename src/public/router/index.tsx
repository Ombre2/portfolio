import { AppDispatch } from "public/main/redux-store/store";
import About from "public/pages/about/About";
import Contact from "public/pages/contact";
import Home from "public/pages/home";
import Project from "public/pages/project";
import Skills from "public/pages/skills";
import Layout from "public/shared/components/layout";
import { setListProject } from "public/shared/reduxStore/projects/reducers";
import { getProjects } from "public/shared/service/Project";
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from 'react-router-dom';

const PublicRoutes: React.FC = () => {

  /**
   * REDUX
   */
  const dispatch = useDispatch<AppDispatch>();

  /**
  * LYFECICLE
  */
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getProjects();
        dispatch(setListProject(fetchedProjects))
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        // setLoading(false);
      }
    };

    fetchProjects();
  }, []);
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
