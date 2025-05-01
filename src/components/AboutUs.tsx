
import { useEffect, useRef } from 'react';
import { Shield, CircleDot, MapPin, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
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
      id="sobre" 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title appear-animation">O MAIOR ESPETÁCULO DE MOTOS DO BRASIL</h2>
            
            <p className="appear-animation mb-6">
              O Brasil Moto Show é o evento mais adrenalínico do calendário nacional para amantes de motociclismo. Reunimos os melhores pilotos do país em apresentações que desafiam a gravidade e impressionam o público. Com muita adrenalina, técnica e ousadia, nossos shows são garantia de emoção do início ao fim.
            </p>
            
            <p className="appear-animation mb-8">
              Adrenalina e emoção garantidas em cada apresentação
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 appear-animation">
                <div className="shrink-0 bg-gsx-red p-2 rounded-full flex items-center justify-center mt-1">
                  <Shield width="20" height="20" className="text-white" />
                </div>
                <div>
                  <h3 className="font-rajdhani font-bold text-xl mb-1">Shows radicais de manobras e Wheeling</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-3 appear-animation">
                <div className="shrink-0 bg-gsx-red p-2 rounded-full flex items-center justify-center mt-1">
                  <CircleDot width="20" height="20" className="text-white" />
                </div>
                <div>
                  <h3 className="font-rajdhani font-bold text-xl mb-1">Globo da Morte com pilotos experientes</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-3 appear-animation">
                <div className="shrink-0 bg-gsx-red p-2 rounded-full flex items-center justify-center mt-1">
                  <MapPin width="20" height="20" className="text-white" />
                </div>
                <div>
                  <h3 className="font-rajdhani font-bold text-xl mb-1">Infraestrutura completa para público e participantes</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-3 appear-animation">
                <div className="shrink-0 bg-gsx-red p-2 rounded-full flex items-center justify-center mt-1">
                  <ShieldCheck width="20" height="20" className="text-white" />
                </div>
                <div>
                  <h3 className="font-rajdhani font-bold text-xl mb-1">Ambiente seguro com equipe especializada</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="appear-animation">
            <div className="relative scale-90">
              <img 
                src="/img/about.png" 
                alt="Foto da equipe do Brasil Moto Show" 
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gsx-black/70 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 right-6 hidden">
                <div className="bg-gsx-red text-white px-6 py-4 rounded inline-block">
                  <h3 className="font-rajdhani font-bold text-xl mb-1">ATRAÇÕES QUE TIRAM O FÔLEGO</h3>
                  <p className="text-sm">Globo da Morte, manobras e pura emoção.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
