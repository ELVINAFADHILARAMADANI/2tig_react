import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-[#F4F9F4] min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#2C3E50] leading-tight mb-6">
            Nikmati Kelezatan <br /> 
            <span className="text-[#00B074]">Autentik Sedap</span>
          </h1>
          <p className="text-slate-500 text-lg mb-8 max-w-lg">
            Rasakan perpaduan bumbu tradisional dan bahan pilihan yang menciptakan kenangan rasa tak terlupakan di setiap hidangan.
          </p>
          <button className="bg-[#00B074] text-white px-10 py-4 rounded-md font-bold shadow-lg hover:bg-[#009663] transition-all">
            Pesan Sekarang
          </button>
        </div>
        
        <div className="relative">
          {/* Gambar Arch Melengkung ala Parador */}
          <div className="w-full h-[600px] rounded-t-full border-[15px] border-white overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" 
              className="w-full h-full object-cover"
              alt="Sedap Signature Dish" 
            />
          </div>
          {/* Elemen Dekoratif Dot Hijau */}
          <div className="absolute top-10 -left-10 opacity-20">
            <div className="grid grid-cols-5 gap-2">
              {[...Array(25)].map((_, i) => <div key={i} className="w-2 h-2 bg-[#00B074] rounded-full"></div>)}
            </div>
          </div>
        </div>
      </div>
      {/* Background Text "Sedap" samar */}
      <div className="absolute bottom-0 left-0 text-[250px] font-bold text-slate-200 opacity-20 select-none -z-0 translate-y-20">
        Sedap
      </div>
    </section>
  );
};

export default Hero;