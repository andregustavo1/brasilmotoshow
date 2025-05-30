import { useEffect, useRef } from 'react';
const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
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
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  const whatsappUrl = "https://wa.me/5511947428136";
  return <section id="cta" ref={sectionRef} className="relative py-20">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{
      backgroundImage: "url('/img/1 (21).jpg')",
      filter: "brightness(0.3) blur(0px)"
    }}></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-rajdhani font-bold mb-6 appear-animation">FALE CONOSCO</h2>
          
          <p className="text-lg md:text-xl mb-10 opacity-90 appear-animation">Agende uma reunião agora mesmo e conte com a melhor equipe do Brasil.</p>
          
          <div className="appear-animation">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-8 py-4">Contate-nos</a>
          </div>
        </div>
      </div>
    </section>;
};
export default CallToAction;