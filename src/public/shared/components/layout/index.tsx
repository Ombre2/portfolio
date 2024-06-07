import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen max-h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col flex-grow lg:ml-64">
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
