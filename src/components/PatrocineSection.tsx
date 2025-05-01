
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const PatrocineSection: React.FC = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleCtaClick = () => {
    toast({
      title: "Solicitação enviada!",
      description: "Em breve nossa equipe entrará em contato para discutir as opções de patrocínio.",
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-6 md:px-12 lg:px-24 bg-black text-white overflow-hidden before-appear"
      id="patrocine"
    >
      {/* Background speed lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-red-600 transform -rotate-12 opacity-20"></div>
        <div className="absolute top-1/3 left-0 w-full h-2 bg-red-600 transform -rotate-6 opacity-10"></div>
        <div className="absolute top-2/3 left-0 w-full h-1 bg-red-600 transform rotate-12 opacity-20"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-2 bg-red-600 transform rotate-6 opacity-10"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 transform translate-y-10 opacity-0 transition-all duration-700 delay-100 before-appear-element">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-widest">
            PATROCINE SUA MARCA NO <span className="text-red-600">MAIOR SHOW</span> DE MOTOS DO BRASIL
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-300 max-w-3xl mx-auto mt-4">
            Associe sua marca à adrenalina e alcance um público apaixonado
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 transform translate-y-10 opacity-0 transition-all duration-700 delay-200 before-appear-element">
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            Ao patrocinar o Brasil Moto Show, sua marca ganha visibilidade para milhares de entusiastas
            do motociclismo e esportes radicais. Oferecemos pacotes personalizados com exposição em
            materiais promocionais, presença digital, espaço físico no evento e muito mais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              title: "Visibilidade Nacional",
              description: "Exposição para público qualificado e apaixonado",
              icon: "📊",
            },
            {
              title: "Conteúdo para Redes Sociais",
              description: "Produções exclusivas mencionando sua marca",
              icon: "📱",
            },
            {
              title: "Ativações no Evento",
              description: "Ações promocionais exclusivas no local",
              icon: "🎯",
            },
            {
              title: "Relacionamento com o Público",
              description: "Conexão direta com consumidores potenciais",
              icon: "🤝",
            },
          ].map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gray-900 border border-red-600/30 rounded-lg p-6 card-hover transform translate-y-10 opacity-0 transition-all duration-500 before-appear-element"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center transform translate-y-10 opacity-0 transition-all duration-700 delay-600 before-appear-element">
          <Button 
            onClick={handleCtaClick}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-md font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.6)] group"
          >
            QUERO PATROCINAR
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatrocineSection;
