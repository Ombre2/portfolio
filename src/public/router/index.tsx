import { AppDispatch } from 'public/main/redux-store/store';
import Contact from 'public/pages/contact';
import Home from 'public/pages/home';
import Project from 'public/pages/project';
import ProjectDetail from 'public/pages/project/ProjectDetail';
import Skills from 'public/pages/skills';
import Layout from 'public/shared/components/layout';
import { setListProject } from 'public/shared/reduxStore/projects/reducers';
import { setListSkill, setLoading } from 'public/shared/reduxStore/skills/reducers';
import { getProjects } from 'public/shared/service/project.service';
import { getSkills } from 'public/shared/service/skills.service';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';

const PublicRoutes: React.FC = () => {
  /**
   * TRADUCTION
   */
  const { t } = useTranslation();

  /**
   * REDUX
   */
  const dispatch = useDispatch<AppDispatch>();

  /**
   * LYFECICLE
   */
  useEffect(() => {
    fetchProjects();
    fetchSkills();
  }, []);

  /**
   * API
   */
  const fetchProjects = async () => {
    try {
      const fetchedProjects = await getProjects();
      dispatch(setListProject(fetchedProjects));
    } catch (error) {
      toast.error(t('ERROR.FETCH_PROJECTS', { name: 'ANDRIARILALAO Johny Lino' }));
    }
  };

  const fetchSkills = async () => {
    try {
      dispatch(setLoading(true));
      const fetchedSkills = await getSkills();
      dispatch(setListSkill(fetchedSkills));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      toast.error(t('ERROR.FETCH_SKILLS', { name: 'ANDRIARILALAO Johny Lino' }));
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
