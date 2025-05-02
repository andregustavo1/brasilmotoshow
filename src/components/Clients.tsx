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
  const images = [
    "/img/1 (2).jpg",
    "/img/1 (3).jpg",
    "/img/1 (35).jpg", // Coloque a imagem 35 em terceiro lugar
    "/img/1 (4).jpg",
    "/img/1 (34).jpg",
    "/img/1 (5).jpg",
    "/img/1 (33).jpg",
    "/img/1 (6).jpg",
    "/img/1 (32).jpg",
    "/img/1 (7).jpg",
    "/img/1 (8).jpg",
    "/img/1 (31).jpg",
    "/img/1 (9).jpg",
    "/img/1 (30).jpg",
    "/img/1 (10).jpg",
    "/img/1 (29).jpg",
    "/img/1 (11).jpg",
    "/img/1 (28).jpg",
    "/img/1 (12).jpg",
    "/img/1 (13).jpg",
    "/img/1 (14).jpg",
    "/img/1 (15).jpg",
    "/img/1 (16).jpg",
    "/img/1 (17).jpg",
    "/img/1 (18).jpg",
    "/img/1 (19).jpg",
    "/img/1 (20).jpg",
    "/img/1 (21).jpg",
    "/img/1 (22).jpg",
    "/img/1 (23).jpg",
    "/img/1 (24).jpg",
    "/img/1 (25).jpg",
    "/img/1 (26).jpg",
    "/img/1 (27).jpg",
    
  ];

  return <section id="shows" ref={sectionRef} className="section-padding bg-gsx-black text-white">
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