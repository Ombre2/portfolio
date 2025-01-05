import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen max-h-screen overflow-hidden bg-slate-100">
      {/* <Navbar /> */}
      <div className="flex flex-col flex-grow relative bg-gradient-to-br from-blue-900 via-blue-950 to-black">
        {/* Divs rondes pour l'arrière-plan */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-400 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute top-32 right-16 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-16 left-32 w-64 h-64 bg-pink-400 rounded-full opacity-25 blur-xl"></div>

        <main className="flex-grow overflow-auto relative">
          <Outlet />
        </main>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
