
import { useEffect, useRef } from 'react';
import { Award, MessageSquare, Activity, Handshake, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.appear-animation');
            elements?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
                el.classList.remove('opacity-0');
              }, i * 200);
            });
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="patrocine" 
      ref={sectionRef}
      className="section-padding bg-gsx-black text-white relative overflow-hidden"
    >
      {/* Decorative speed lines */}
      <div className="absolute -top-10 right-0 w-full h-32 opacity-20">
        <div className="w-full h-1 bg-gsx-red transform -rotate-12 mb-6"></div>
        <div className="w-3/4 h-1 bg-gsx-red transform -rotate-6 mb-6"></div>
        <div className="w-1/2 h-1 bg-gsx-red transform rotate-3"></div>
      </div>
      <div className="absolute -bottom-10 left-0 w-full h-32 opacity-20">
        <div className="w-full h-1 bg-gsx-red transform rotate-12 mt-6"></div>
        <div className="w-3/4 h-1 bg-gsx-red transform rotate-6 mt-6"></div>
        <div className="w-1/2 h-1 bg-gsx-red transform -rotate-3"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-4xl mb-2 appear-animation inline-block text-white after:bg-gsx-red mx-auto">PATROCINE SUA MARCA NO MAIOR SHOW DE MOTOS DO BRASIL</h2>
          <p className="section-subtitle appear-animation">Associe sua marca à adrenalina e alcance um público apaixonado</p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-14 appear-animation">
          <p className="text-center text-gray-300">
            Ao patrocinar o Brasil Moto Show, sua marca ganha visibilidade para milhares de entusiastas do motociclismo e esportes radicais. 
            Oferecemos pacotes personalizados com exposição em materiais promocionais, presença digital, espaço físico no evento e muito mais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {/* Card 1 */}
          <div className="bg-[#111] border border-gsx-red/30 rounded-lg p-6 card-hover appear-animation group">
            <div className="bg-gsx-red rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all duration-300">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="font-rajdhani font-bold text-xl mb-3 text-center">Visibilidade Nacional</h3>
            <p className="text-sm text-gray-300 text-center">Exposição para público qualificado e apaixonado</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-[#111] border border-gsx-red/30 rounded-lg p-6 card-hover appear-animation group">
            <div className="bg-gsx-red rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all duration-300">
              <MessageSquare className="text-white" size={24} />
            </div>
            <h3 className="font-rajdhani font-bold text-xl mb-3 text-center">Conteúdo para Redes Sociais</h3>
            <p className="text-sm text-gray-300 text-center">Produções exclusivas mencionando sua marca</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-[#111] border border-gsx-red/30 rounded-lg p-6 card-hover appear-animation group">
            <div className="bg-gsx-red rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all duration-300">
              <Activity className="text-white" size={24} />
            </div>
            <h3 className="font-rajdhani font-bold text-xl mb-3 text-center">Ativações no Evento</h3>
            <p className="text-sm text-gray-300 text-center">Ações promocionais exclusivas no local</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-[#111] border border-gsx-red/30 rounded-lg p-6 card-hover appear-animation group">
            <div className="bg-gsx-red rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all duration-300">
              <Handshake className="text-white" size={24} />
            </div>
            <h3 className="font-rajdhani font-bold text-xl mb-3 text-center">Relacionamento com o Público</h3>
            <p className="text-sm text-gray-300 text-center">Conexão direta com consumidores potenciais</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center appear-animation">
          <Button 
            className="bg-gsx-red hover:bg-gsx-redLight text-white text-lg font-rajdhani font-bold py-6 px-8 rounded-md transition-all duration-300 transform group hover:scale-105"
          >
            QUERO PATROCINAR
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
