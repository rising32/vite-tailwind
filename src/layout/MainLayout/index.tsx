import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import AOS from 'aos';

const MainLayout = () => {
  const mainRef = React.useRef<HTMLDivElement>(null);
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })
  useEffect(() => {
    mainRef.current?.scrollIntoView({'behavior': 'auto'});
    window.scroll({ top: 0 })
    mainRef.current?.scrollIntoView({'behavior': 'smooth'});
  }, [location.pathname]);
  return (
    <div ref={mainRef} className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <Outlet />
    </div>
  );
};

export default MainLayout;
