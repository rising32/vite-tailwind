import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="pt-28">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
