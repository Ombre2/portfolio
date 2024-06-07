import PublicRoutes from 'public/router';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import "../config/i18n";
const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="public/*" element={<PublicRoutes />} />
          <Route path="*" element={<Navigate to="/public/home" replace={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
