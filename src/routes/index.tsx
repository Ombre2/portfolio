import { store } from "public/main/redux-store/store";
import PublicRoutes from 'public/router';
import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import "../config/i18n";
const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route>
            <Route path="public/*" element={<PublicRoutes />} />
            <Route path="*" element={<Navigate to="/public/home" replace={true} />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default AppRoutes;
