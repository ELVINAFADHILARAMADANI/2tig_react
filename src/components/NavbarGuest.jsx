import React from 'react';
import { Link } from 'react-router-dom';

const NavbarGuest = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Sedap sesuai Branding Admin */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              Sedap<span className="text-[#00B074]">.</span>
            </span>
          </div>

          {/* Menu Navigasi Tengah */}
          <div className="hidden md:flex space-x-10 text-sm font-semibold text-slate-600">
            <a href="#" className="text-[#00B074]">Home</a>
            <a href="#about" className="hover:text-[#00B074] transition">Tentang Kami</a>
            <a href="#menu" className="hover:text-[#00B074] transition">Menu</a>
            <a href="#ulasan" className="hover:text-[#00B074] transition">Ulasan</a>
          </div>

          {/* Akses Login/Register */}
          <div className="flex items-center space-x-6">
            <Link to="/login" className="text-sm font-bold text-slate-700 hover:text-[#00B074]">Login</Link>
            <Link to="/register" className="bg-[#00B074] text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-[#009663] transition shadow-lg shadow-emerald-100">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarGuest;