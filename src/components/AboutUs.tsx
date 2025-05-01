
import { useEffect, useRef } from 'react';

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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-rajdhani font-bold text-xl mb-1">Shows radicais de manobras e Wheeling</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-3 appear-animation">
                <div className="shrink-0 bg-gsx-red p-2 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-rajdhani font-bold text-xl mb-1">Globo da Morte com pilotos experientes</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-3 appear-animation">
                <div className="shrink-0 bg-gsx-red p-2 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-rajdhani font-bold text-xl mb-1">Infraestrutura completa para público e participantes</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-3 appear-animation">
                <div className="shrink-0 bg-gsx-red p-2 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
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
              <div className="absolute bottom-6 left-6 right-6">
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
