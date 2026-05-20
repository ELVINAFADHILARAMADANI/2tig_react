import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarGuest from '../components/NavbarGuest';
import FooterGuest from '../components/FooterGuest';

const GuestLayout = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <NavbarGuest />
      <main>
        {/* Outlet akan merender LandingPage.jsx */}
        <Outlet />
      </main>
      <FooterGuest />
    </div>
  );
};

export default GuestLayout;