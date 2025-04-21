
import { Shield, Clock, Award, Tool, Users, Calculator } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-renovation-blue" />,
    title: 'Гарантия на все работы',
    description: 'Предоставляем гарантию на все виды ремонтных работ сроком до 5 лет. Оформляем официальный договор.'
  },
  {
    icon: <Clock className="h-10 w-10 text-renovation-blue" />,
    title: 'Точные сроки',
    description: 'Соблюдаем установленные сроки выполнения работ. За каждый день просрочки выплачиваем компенсацию.'
  },
  {
    icon: <Award className="h-10 w-10 text-renovation-blue" />,
    title: '10 лет опыта',
    description: 'Более 10 лет успешной работы на рынке ремонтных услуг Сочи и Краснодарского края. Более 500 выполненных проектов.'
  },
  {
    icon: <Tool className="h-10 w-10 text-renovation-blue" />,
    title: 'Профессиональные мастера',
    description: 'В нашей команде только квалифицированные специалисты с опытом работы от 5 лет и профильным образованием.'
  },
  {
    icon: <Users className="h-10 w-10 text-renovation-blue" />,
    title: 'Индивидуальный подход',
    description: 'Учитываем все пожелания клиента и особенности помещения. Предлагаем оптимальные решения для каждого проекта.'
  },
  {
    icon: <Calculator className="h-10 w-10 text-renovation-blue" />,
    title: 'Прозрачная смета',
    description: 'Составляем детальную смету до начала работ. Фиксированная стоимость, никаких скрытых платежей и доплат.'
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-renovation-beige/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Почему выбирают нас</h2>
          <p className="text-renovation-gray max-w-3xl mx-auto">
            Компания «РемСочи» - это команда профессионалов, выполняющая ремонтные работы любой сложности. 
            Мы гарантируем высокое качество, соблюдение сроков и доступные цены.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-playfair font-bold text-xl mb-3 text-renovation-navy">{feature.title}</h3>
              <p className="text-renovation-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
