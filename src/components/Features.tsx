import { CheckCircle, Clock, Award, Coins } from 'lucide-react';

const Features = () => {
  return (
    <section className="section-padding bg-renovation-navy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">Почему выбирают нас</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Мы гордимся своей работой и строим долгосрочные отношения с клиентами,
            основанные на доверии и профессионализме.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-4 rounded-full bg-renovation-blue/10">
              <CheckCircle className="h-10 w-10 text-renovation-blue" />
            </div>
            <h3 className="text-xl font-playfair font-medium mb-2 text-white">Качество</h3>
            <p className="text-gray-300">
              Используем только проверенные материалы и технологии. Даем гарантию на все виды работ.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-4 rounded-full bg-renovation-blue/10">
              <Clock className="h-10 w-10 text-renovation-blue" />
            </div>
            <h3 className="text-xl font-playfair font-medium mb-2 text-white">Точные сроки</h3>
            <p className="text-gray-300">
              Соблюдаем установленные сроки. Составляем график работ и придерживаемся его.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-4 rounded-full bg-renovation-blue/10">
              <Award className="h-10 w-10 text-renovation-blue" />
            </div>
            <h3 className="text-xl font-playfair font-medium mb-2 text-white">Опыт</h3>
            <p className="text-gray-300">
              Более 10 лет на рынке. Квалифицированные специалисты с большим опытом работы.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-4 rounded-full bg-renovation-blue/10">
              <Coins className="h-10 w-10 text-renovation-blue" />
            </div>
            <h3 className="text-xl font-playfair font-medium mb-2 text-white">Прозрачная смета</h3>
            <p className="text-gray-300">
              Детальный расчет стоимости. Никаких скрытых платежей и дополнительных расходов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
