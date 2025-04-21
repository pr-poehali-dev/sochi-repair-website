import { Home, Building2, Building, Paintbrush, Hammer, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';

const servicesList = [
  {
    icon: <Home className="h-10 w-10 text-renovation-blue" />,
    title: 'Ремонт квартир',
    description: 'Капитальный и косметический ремонт квартир любой сложности с учетом всех ваших пожеланий.'
  },
  {
    icon: <Building className="h-10 w-10 text-renovation-blue" />,
    title: 'Ремонт домов и коттеджей',
    description: 'Комплексный ремонт загородных домов, коттеджей и таунхаусов с использованием качественных материалов.'
  },
  {
    icon: <Building2 className="h-10 w-10 text-renovation-blue" />,
    title: 'Коммерческие помещения',
    description: 'Ремонт офисов, магазинов, ресторанов и других коммерческих помещений с соблюдением всех норм.'
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-renovation-blue" />,
    title: 'Дизайн интерьера',
    description: 'Разработка уникальных дизайн-проектов интерьера, отражающих ваш вкус и соответствующих потребностям.'
  },
  {
    icon: <Hammer className="h-10 w-10 text-renovation-blue" />,
    title: 'Отдельные виды работ',
    description: 'Выполнение отдельных видов ремонтных работ: монтаж, сантехника, электрика, отделка и т.д.'
  },
  {
    icon: <Ruler className="h-10 w-10 text-renovation-blue" />,
    title: 'Черновые работы',
    description: 'Качественное выполнение черновых работ: выравнивание стен, стяжка пола, штукатурка и другие виды работ.'
  }
];

const Services = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Наши услуги</h2>
          <p className="text-renovation-gray max-w-3xl mx-auto">
            Предлагаем полный комплекс ремонтно-отделочных работ для вашей недвижимости в Сочи и Адлере.
            Выполним ремонт любой сложности точно в срок.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="section-subtitle">{service.title}</h3>
              <p className="text-renovation-gray mb-6">{service.description}</p>
              <Button variant="outline" className="text-renovation-blue border-renovation-blue hover:bg-renovation-blue hover:text-white">
                Подробнее
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
