import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative bg-renovation-navy overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/placeholder.svg')" }}
      ></div>
      
      <div className="container-custom relative z-10 flex flex-col items-start justify-center min-h-[600px] py-20">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Ремонт помещений под ключ в Сочи
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Профессиональный ремонт квартир, домов и коммерческих помещений любой сложности. 
            Выполним ваш проект качественно и в срок.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-renovation-blue hover:bg-renovation-blue/90 text-white">
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Наши работы
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
