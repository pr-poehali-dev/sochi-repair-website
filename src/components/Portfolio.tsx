
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Квартира в ЖК «Морской»',
    category: 'Квартиры',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?q=80&w=1374&auto=format&fit=crop',
    description: 'Капитальный ремонт трехкомнатной квартиры в современном стиле. Площадь 85 м².'
  },
  {
    id: 2,
    title: 'Коттедж в «Сосновом бору»',
    category: 'Дома',
    image: 'https://images.unsplash.com/photo-1600607687644-c7e43560156c?q=80&w=1470&auto=format&fit=crop',
    description: 'Полный ремонт под ключ двухэтажного коттеджа с отделкой фасада. Площадь 230 м².'
  },
  {
    id: 3,
    title: 'Ресторан «Морская волна»',
    category: 'Коммерческие',
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1374&auto=format&fit=crop',
    description: 'Ремонт и отделка помещения ресторана в морском стиле. Площадь 250 м².'
  },
  {
    id: 4,
    title: 'Апартаменты в ЖК «Фрегат»',
    category: 'Квартиры',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1370&auto=format&fit=crop',
    description: 'Ремонт апартаментов премиум-класса в стиле минимализм с панорамными окнами. Площадь 120 м².'
  },
  {
    id: 5,
    title: 'Таунхаус в Олимпийском парке',
    category: 'Дома',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1480&auto=format&fit=crop',
    description: 'Отделка трехуровневого таунхауса с террасой и гаражом. Современный стиль. Площадь 180 м².'
  },
  {
    id: 6,
    title: 'Офис IT-компании «ЮгСофт»',
    category: 'Коммерческие',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1469&auto=format&fit=crop',
    description: 'Современный ремонт офисного пространства в стиле лофт. Открытая планировка. Площадь 320 м².'
  }
];

const categories = ['Все', 'Квартиры', 'Дома', 'Коммерческие'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredProjects = activeCategory === 'Все' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Наши работы</h2>
          <p className="text-renovation-gray max-w-3xl mx-auto">
            За 10 лет работы мы реализовали более 500 проектов различной сложности. 
            Ознакомьтесь с примерами наших последних работ в Сочи и Адлере.
          </p>
        </div>

        {/* Categories filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-renovation-blue text-white'
                  : 'bg-white text-renovation-navy hover:bg-renovation-beige'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-renovation-beige text-renovation-navy rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="section-subtitle">{project.title}</h3>
                <p className="text-renovation-gray mb-4">{project.description}</p>
                <Button variant="outline" className="w-full justify-center">
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-renovation-blue hover:bg-renovation-blue/90">
            Смотреть все работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
