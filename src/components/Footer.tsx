import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-renovation-navy text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">РемонтСочи</h3>
            <p className="mb-4 text-gray-300">
              Профессиональный ремонт квартир, домов и коммерческих помещений под ключ в Сочи и Адлере.
              Гарантия качества на все виды работ.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-300 hover:text-renovation-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-renovation-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-renovation-blue transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-renovation-blue transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-renovation-blue transition-colors">Портфолио</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-renovation-blue transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-renovation-blue transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-renovation-blue" />
                <span className="text-gray-300">
                  г. Сочи, ул. Приморская, 17, офис 42
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-renovation-blue" />
                <a href="tel:+78625550123" className="text-gray-300 hover:text-renovation-blue transition-colors">
                  +7 (862) 555-0123
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-renovation-blue" />
                <a href="mailto:info@remont-sochi.ru" className="text-gray-300 hover:text-renovation-blue transition-colors">
                  info@remont-sochi.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} РемонтСочи. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
