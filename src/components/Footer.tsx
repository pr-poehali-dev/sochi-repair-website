
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-renovation-navy text-white">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6">РемСочи</h3>
            <p className="text-gray-300 mb-4">
              Профессиональный ремонт квартир, домов и коммерческих помещений в Сочи и Адлере. 
              Выполняем работы любой сложности с гарантией качества.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-renovation-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-renovation-blue transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Ремонт квартир</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Ремонт домов и коттеджей</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Ремонт коммерческих помещений</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Дизайн интерьера</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Отдельные виды работ</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-renovation-blue mr-3 mt-0.5" />
                <span className="text-gray-300">г. Сочи, ул. Приморская, д. 17, офис 305</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-renovation-blue mr-3" />
                <span className="text-gray-300">+7 (862) 555-44-33</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-renovation-blue mr-3" />
                <span className="text-gray-300">info@remsochi.ru</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-renovation-blue mr-3 mt-0.5" />
                <span className="text-gray-300">Пн-Пт: 9:00 - 19:00<br/>Сб: 10:00 - 15:00</span>
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6">Полезная информация</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">О компании</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Портфолио</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Цены на услуги</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Отзывы клиентов</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Вакансии</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ООО «РемСочи». Все права защищены. ИНН: 2317012345
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
