import { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const Clients = () => {
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
  const images = Array.from({ length: 26 }, (_, i) => `/img/1 (${i + 2}).jpg`);
  return <section id="clientes" ref={sectionRef} className="section-padding bg-gsx-black text-white">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title appear-animation inline-block text-white after:bg-gsx-red mx-auto">Conheça um Pouco dos Nossos Shows</h2>
          <p className="section-subtitle appear-animation">Globo da Morte, Manobras e Shows ao Vivo!</p>
        </div>
        
        <div className="appear-animation max-w-5xl mx-auto px-8">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent>
              {images.map((image, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <img src={image} alt={`Trabalho ${index + 1}`} className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="flex bg-black" />
            <CarouselNext className="flex bg-black" />
          </Carousel>
        </div>

        <div className="mt-4 text-center">
  <p className="text-sm text-gray-400">
    &laquo; Arraste ou clique na seta para ver mais &raquo;
  </p>
</div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 appear-animation bg-gsx-red/20 px-6 py-3 rounded-lg hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
            <span className="text-lg">Atendemos as principais oficinas de funilaria e pintura de Maringá e seguradoras de todo o Brasil.</span>
          </div>
        </div>
      </div>
    </section>;
};
export default Clients;