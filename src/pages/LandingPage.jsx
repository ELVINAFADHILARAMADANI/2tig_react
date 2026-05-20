import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import { products, testimonials } from '../data/webData';

const LandingPage = () => {
  return (
    <div className="bg-white font-sans scroll-smooth">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. ABOUT SECTION */}
      <About />

      {/* 3. MENU SECTION - Warna Parador & Tombol Lancip */}
      <section id="menu" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#00B074] font-bold uppercase tracking-[0.3em] text-xs">Our Signature</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C3E50] mt-4">
              Menu Unggulan <span className="text-[#00B074]">Sedap</span>
            </h2>
            <div className="w-20 h-1 bg-[#00B074] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {products && products.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[#00B074] font-bold text-xs uppercase tracking-widest">
                    Best Seller
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-2">{item.name}</h3>
                  <p className="text-[#00B074] font-black text-2xl mb-6">{item.price}</p>
                  
                  {/* Tombol Lancip Khas Parador */}
                  <button className="w-full bg-[#00B074] text-white py-4 rounded-none font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-[#2C3E50] transition-colors duration-300">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIAL SECTION */}
      <section id="ulasan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-16 uppercase tracking-widest text-sm">What They Say</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {testimonials && testimonials.map((testi) => (
              <div key={testi.id} className="max-w-md flex flex-col items-center text-center px-6">
                <img 
                  src={testi.avatar} 
                  className="w-24 h-24 rounded-full mb-8 border-4 border-[#F4F9FC] shadow-xl object-cover" 
                  alt={testi.name} 
                />
                <p className="text-slate-500 italic text-lg leading-relaxed mb-6">"{testi.review}"</p>
                <div className="h-px w-10 bg-[#00B074] mb-4"></div>
                <h4 className="font-bold text-[#2C3E50] uppercase text-xs tracking-[0.2em]">{testi.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER SECTION - Versi Input Putih Panjang & Tombol Merah */}
      <section className="py-24 bg-[#F4F9FC]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#2C3E50] mb-6">
            Subscribe & Get Special Discount!
          </h2>
          <p className="text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
            Don't Wanna Miss Somethings? Subscribe Right Now And Get The Special Discount And Monthly Newsletter.
          </p>

          <div className="relative max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-full overflow-hidden p-2 border border-white">
              <input 
                type="email" 
                placeholder="Enter Your Email Address..." 
                className="w-full px-10 py-5 bg-transparent text-[#2C3E50] focus:outline-none placeholder-slate-300 text-lg"
              />
              {/* Tombol Subscribe Merah Lancip (diatur md:rounded-none agar lancip saat di desktop) */}
              <button className="w-full md:w-auto bg-[#FF4C4C] hover:bg-[#2C3E50] text-white px-14 py-5 font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-full md:rounded-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;