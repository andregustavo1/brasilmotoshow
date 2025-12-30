import React from 'react';

const Sponsors = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-red-800 to-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Nossos Parceiros e Patrocinadores
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Agradecemos aos nossos parceiros que tornam o Brasil Moto Show possível. Sua confiança e apoio impulsionam nossa paixão pelas motos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-2xl shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 flex items-center justify-center group">
            <img
              src="/img/p1.png"
              alt="Patrocinador 1"
              className="max-w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-2xl shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 flex items-center justify-center group">
            <img
              src="/img/p2.png"
              alt="Patrocinador 2"
              className="max-w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;