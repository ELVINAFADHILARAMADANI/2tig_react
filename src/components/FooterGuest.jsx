import React from 'react';

const FooterGuest = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Sedap<span className="text-[#00B074]">.</span></h2>
          <p className="text-sm leading-relaxed">Menyajikan kelezatan terbaik untuk Anda setiap hari. Hubungi kami untuk reservasi atau katering.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Kontak Kami</h4>
          <ul className="space-y-3 text-sm">
            <li>📍 Jl. Kuliner No. 123, Jakarta</li>
            <li>📞 +62 812 3456 7890</li>
            <li>✉️ hello@sedap.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Sosial Media</h4>
          <div className="flex space-x-4">
             {/* Logo partner/sosmed bisa berupa icon atau text */}
             <span className="hover:text-[#00B074] cursor-pointer">Instagram</span>
             <span className="hover:text-[#00B074] cursor-pointer">Twitter</span>
             <span className="hover:text-[#00B074] cursor-pointer">Facebook</span>
          </div>
        </div>
      </div>
      <div className="text-center pt-8 text-xs text-slate-500">
        © 2025 Sedap Restaurant. Built for UTS Project.
      </div>
    </footer>
  );
};
export default FooterGuest;