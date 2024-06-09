import { Bars3Icon } from "@heroicons/react/20/solid";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import avatar from "../../../assets/image/johny.jpg"; // Assurez-vous que le chemin est correct

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Bouton de menu pour mobiles */}
      <div className="fixed top-0 z-50 w-full flex justify-between items-center bg-gray-800 p-2 lg:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="text-white text-xl font-semibold">Portfolio</div>
      </div>

      {/* Navbar qui s'affiche automatiquement sur les écrans plus larges */}
      <nav className={`bg-gray-800 text-white w-64 h-screen fixed top-0 left-0 overflow-y-auto z-20 ${mobileMenuOpen ? "block" : "hidden"} lg:block`}>
        <div className="flex flex-col justify-center items-center h-full">
          <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full mt-4 mb-4" />
          <h1 className="text-3xl font-semibold p-4">Portfolio</h1>
          <ul className="flex flex-col space-y-2 p-4">
            <li><Link to="/public/home">{t('NAV.HOME')}</Link></li>
            <li><Link to="/public/projects">{t('NAV.PROJECTS')}</Link></li>
            <li><Link to="/public/skills">{t('NAV.SKILLS')}</Link></li>
            <li><Link to="/public/contact">{t('NAV.CONTACT')}</Link></li>
            {/* <li><Link to="/public/about">{t('NAV.ABOUT')}</Link></li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
