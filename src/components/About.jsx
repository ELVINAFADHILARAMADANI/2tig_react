import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-20 items-center">
        {/* Gambar di Kiri */}
        <div className="relative group">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80" 
            className="rounded-[2.5rem] shadow-xl group-hover:scale-[1.02] transition-transform duration-500" 
            alt="Our Kitchen" 
          />
          <div className="absolute -bottom-10 -right-10 bg-[#00B074] p-8 rounded-3xl text-white shadow-2xl hidden lg:block">
            <p className="text-4xl font-bold">10+</p>
            <p className="text-xs uppercase font-bold tracking-widest">Tahun Pengalaman</p>
          </div>
        </div>

        {/* Teks di Kanan */}
        <div>
          <span className="text-[#00B074] font-black uppercase tracking-[0.25em] text-xs">Tentang Sedap</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Komitmen Kami Terhadap <br/> Kualitas Kuliner.
          </h2>
          <p className="text-slate-500 leading-loose mb-8">
            Di Sedap, kami percaya bahwa makanan adalah bahasa universal. Setiap menu yang kami sajikan melalui proses kurasi yang ketat, mulai dari pemilihan bahan organik lokal hingga teknik memasak modern yang menjaga nutrisi dan rasa.
          </p>
          
          {/* Poin Keunggulan (Poin 3 Soal) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-2 rounded-lg text-[#00B074]">✔</div>
              <div>
                <h4 className="font-bold text-slate-900">Bahan Segar</h4>
                <p className="text-xs text-slate-500">Langsung dari petani lokal setiap pagi.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-2 rounded-lg text-[#00B074]">✔</div>
              <div>
                <h4 className="font-bold text-slate-900">Koki Berbakat</h4>
                <p className="text-xs text-slate-500">Berpengalaman lebih dari 10 tahun.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;