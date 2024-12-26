import React from 'react';
import { useLocation } from 'react-router-dom';
import CallToAction from './CallToAction';
import MainFooter from './MainFooter';

export default function Footer() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <footer className="space-y-4">
            {!isLoginPage && <CallToAction />}
          </footer>
        </div>
      </div>
      <MainFooter />
    </div>
    // <footer className="space-y-4">
    //   {!isLoginPage && <CallToAction />}
    //   <MainFooter />
    // </footer>
  );
}