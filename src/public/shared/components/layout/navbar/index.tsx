import { Bars3Icon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelector from '../../langueSelector';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { to: '/public/home', label: t('NAV.HOME') },
    { to: '/public/projects', label: t('NAV.PROJECTS') },
    { to: '/public/skills', label: t('NAV.SKILLS') },
    { to: '/public/contact', label: t('NAV.CONTACT') }
    // { to: '/public/about', label: t('NAV.ABOUT') }
  ];

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 z-50 w-full flex items-center justify-between bg-gray-800 p-4">
        {/* Bouton menu mobile */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Nom "JOHNY" */}
        <div className="hidden lg:flex items-center space-x-4 ">
          <span className="text-white text-lg font-bold">Johny</span>
        </div>

        {/* Navigation Desktop */}
        <ul className="hidden lg:flex lg:flex-row lg:space-x-8 lg:items-center">
          {navigationLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="text-white hover:text-gray-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sélecteur de langue */}
        <div className="text-white font-semibold ">
          <LanguageSelector />
        </div>
      </div>

      {/* Navigation Mobile */}
      {mobileMenuOpen && (
        <div className="fixed top-14 left-0 z-40 w-full bg-gray-800 p-4 lg:hidden">
          <ul className="flex flex-col space-y-4">
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
