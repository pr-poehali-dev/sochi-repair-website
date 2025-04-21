
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title text-left">Контактная информация</h2>
            <p className="text-renovation-gray mb-8">
              Свяжитесь с нами любым удобным способом, и мы проконсультируем вас по всем вопросам 
              ремонта вашего помещения в Сочи. Также вы можете оставить заявку, заполнив форму.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-renovation-blue mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-renovation-navy mb-1">Телефон</h3>
                  <p className="text-renovation-gray">+7 (862) 555-44-33</p>
                  <p className="text-renovation-gray">+7 (918) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-renovation-blue mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-renovation-navy mb-1">Email</h3>
                  <p className="text-renovation-gray">info@remsochi.ru</p>
                  <p className="text-renovation-gray">zakaz@remsochi.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-renovation-blue mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-renovation-navy mb-1">Адрес офиса</h3>
                  <p className="text-renovation-gray">г. Сочи, ул. Приморская, д. 17, офис 305</p>
                  <p className="text-renovation-gray">г. Адлер, ул. Ленина, д. 45, офис 112</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-renovation-blue mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-renovation-navy mb-1">Режим работы</h3>
                  <p className="text-renovation-gray">Пн-Пт: 9:00 - 19:00</p>
                  <p className="text-renovation-gray">Сб: 10:00 - 15:00, Вс: выходной</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="section-title text-left">Оставьте заявку</h2>
            <p className="text-renovation-gray mb-8">
              Заполните форму ниже, и мы свяжемся с вами для обсуждения деталей вашего проекта
              и предоставим бесплатную консультацию.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-renovation-navy mb-2">
                  Ваше имя *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Иван Иванов"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-renovation-navy mb-2">
                  Телефон *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="+7 (XXX) XXX-XX-XX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-renovation-navy mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="example@mail.ru"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-renovation-navy mb-2">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full"
                  placeholder="Опишите ваш проект или задайте вопрос..."
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <p className="text-sm text-renovation-gray">* Обязательные поля для заполнения</p>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-renovation-blue hover:bg-renovation-blue/90"
                >
                  Отправить заявку
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
