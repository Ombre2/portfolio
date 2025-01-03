import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';

const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen max-h-screen overflow-hidden bg-gray-100">
      <Navbar />
      <div className="flex flex-col flex-grow mt-12">
        <main className="flex-grow overflow-auto px-4 lg:px-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
