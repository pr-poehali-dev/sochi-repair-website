import { useState } from 'react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Квартира в жилом комплексе «Морской»',
    category: 'Квартиры',
    image: '/placeholder.svg',
    description: 'Капитальный ремонт трехкомнатной квартиры в современном стиле.'
  },
  {
    id: 2,
    title: 'Коттедж в поселке «Сосновый бор»',
    category: 'Дома',
    image: '/placeholder.svg',
    description: 'Полный ремонт под ключ двухэтажного коттеджа с отделкой фасада.'
  },
  {
    id: 3,
    title: 'Ресторан «Морская волна»',
    category: 'Коммерческие',
    image: '/placeholder.svg',
    description: 'Ремонт и отделка помещения ресторана площадью 250 кв.м.'
  },
  {
    id: 4,
    title: 'Апартаменты с видом на море',
    category: 'Квартиры',
    image: '/placeholder.svg',
    description: 'Ремонт апартаментов премиум-класса в стиле минимализм.'
  },
  {
    id: 5,
    title: 'Таунхаус в «Олимпийском парке»',
    category: 'Дома',
    image: '/placeholder.svg',
    description: 'Отделка трехуровневого таунхауса с террасой и гаражом.'
  },
  {
    id: 6,
    title: 'Офис IT-компании',
    category: 'Коммерческие',
    image: '/placeholder.svg',
    description: 'Современный ремонт офисного пространства в стиле лофт.'
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
            Ознакомьтесь с примерами наших последних работ.
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
