import { ArrowDown } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const whatsappUrl = "https://wa.me/5511947428136";

  return (
    <section
      id="inicio"
      className={`relative min-h-screen flex items-center bg-gsx-black overflow-hidden ${
        isVideoLoaded ? "" : ""
      } transition-opacity duration-500`}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gsx-black/95 to-gsx-black/65 z-10"></div>
      
      <img 
        src="/img/hero.jpg" 
        alt="" 
        className="absolute top-[-180px] w-screen object-cover z-0" 
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="max-w-3xl opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-rajdhani font-bold mb-2">
            Adrenalina sobre duas rodas!
          </h1>
          <p className="text-xl md:text-2xl text-gsx-gray mb-8 opacity-0 animate-fade-in-delay-1">
            Shows Radicais de Manobras, Wheeling e Globo da Morte!
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delay-2">
            <a 
              href="#shows"
              className="btn btn-primary"
            >
              Conheça Nossos Shows
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              Contate-nos
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#sobre"
        className="absolute bottom-10 hidden md:flex left-1/2 transform -translate-x-1/2 flex-col items-center text-white opacity-0 animate-fade-in-delay-3"
      >
        <span className="text-sm mb-2">Saiba mais</span>
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
