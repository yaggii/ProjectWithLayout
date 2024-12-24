import React from 'react';
import { useLocation } from 'react-router-dom';
import CallToAction from './CallToAction';
import MainFooter from './MainFooter';

export default function Footer() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <footer className="space-y-4">
      {!isLoginPage && <CallToAction />}
      <MainFooter />
    </footer>
  );
}