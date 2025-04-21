
import { Home, Building2, Building, Paintbrush, Hammer, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';

const servicesList = [
  {
    icon: <Home className="h-10 w-10 text-renovation-blue" />,
    title: 'Ремонт квартир',
    description: 'Капитальный и косметический ремонт квартир под ключ. Работаем с новостройками и вторичным жильем. Стоимость от 6000 ₽/м².'
  },
  {
    icon: <Building className="h-10 w-10 text-renovation-blue" />,
    title: 'Ремонт домов и коттеджей',
    description: 'Комплексный ремонт загородных домов и коттеджей. Выполняем внутреннюю и наружную отделку. Стоимость от 7500 ₽/м².'
  },
  {
    icon: <Building2 className="h-10 w-10 text-renovation-blue" />,
    title: 'Коммерческие помещения',
    description: 'Ремонт офисов, магазинов, ресторанов и других коммерческих помещений. Соблюдение всех СНиПов. Стоимость от 8000 ₽/м².'
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-renovation-blue" />,
    title: 'Дизайн интерьера',
    description: 'Разработка дизайн-проектов для жилых и коммерческих помещений. Визуализация в 3D. Стоимость от 1200 ₽/м².'
  },
  {
    icon: <Hammer className="h-10 w-10 text-renovation-blue" />,
    title: 'Отдельные виды работ',
    description: 'Выполнение отдельных видов работ: сантехника (от 3500 ₽), электрика (от 3000 ₽), плиточные работы (от 1200 ₽/м²).'
  },
  {
    icon: <Ruler className="h-10 w-10 text-renovation-blue" />,
    title: 'Черновые работы',
    description: 'Выравнивание стен (от 450 ₽/м²), стяжка пола (от 500 ₽/м²), штукатурка (от 400 ₽/м²), шпаклевка (от 300 ₽/м²).'
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
            Выполним ремонт любой сложности точно в срок и с фиксированной сметой.
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
