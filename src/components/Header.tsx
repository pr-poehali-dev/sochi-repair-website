
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className={`font-playfair font-bold text-2xl ${isScrolled ? 'text-renovation-navy' : 'text-white'}`}>
              РемСочи
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-renovation-navy hover:text-renovation-blue' : 'text-white hover:text-renovation-beige'
              }`}
            >
              Главная
            </a>
            <a 
              href="#" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-renovation-navy hover:text-renovation-blue' : 'text-white hover:text-renovation-beige'
              }`}
            >
              Услуги
            </a>
            <a 
              href="#" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-renovation-navy hover:text-renovation-blue' : 'text-white hover:text-renovation-beige'
              }`}
            >
              Наши работы
            </a>
            <a 
              href="#" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-renovation-navy hover:text-renovation-blue' : 'text-white hover:text-renovation-beige'
              }`}
            >
              О компании
            </a>
            <a 
              href="#" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-renovation-navy hover:text-renovation-blue' : 'text-white hover:text-renovation-beige'
              }`}
            >
              Контакты
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center">
              <MapPin className={`h-5 w-5 mr-2 ${isScrolled ? 'text-renovation-blue' : 'text-renovation-beige'}`} />
              <span className={`${isScrolled ? 'text-renovation-navy' : 'text-white'}`}>
                г. Сочи
              </span>
            </div>
            <div className="flex items-center">
              <Phone className={`h-5 w-5 mr-2 ${isScrolled ? 'text-renovation-blue' : 'text-renovation-beige'}`} />
              <a 
                href="tel:+78625554433" 
                className={`font-medium ${isScrolled ? 'text-renovation-navy' : 'text-white'}`}
              >
                +7 (862) 555-44-33
              </a>
            </div>
            <Button 
              size="sm" 
              className={`${
                isScrolled 
                  ? 'bg-renovation-blue hover:bg-renovation-blue/90 text-white' 
                  : 'bg-white hover:bg-white/90 text-renovation-navy'
              }`}
            >
              Заказать звонок
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden p-2"
            aria-label="Открыть меню"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-renovation-navy' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-renovation-navy' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container-custom py-6">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="font-medium text-renovation-navy hover:text-renovation-blue">
              Главная
            </a>
            <a href="#" className="font-medium text-renovation-navy hover:text-renovation-blue">
              Услуги
            </a>
            <a href="#" className="font-medium text-renovation-navy hover:text-renovation-blue">
              Наши работы
            </a>
            <a href="#" className="font-medium text-renovation-navy hover:text-renovation-blue">
              О компании
            </a>
            <a href="#" className="font-medium text-renovation-navy hover:text-renovation-blue">
              Контакты
            </a>
          </nav>

          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-renovation-blue" />
              <span className="text-renovation-navy">
                г. Сочи, ул. Приморская, д. 17
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-renovation-blue" />
              <a href="tel:+78625554433" className="font-medium text-renovation-navy">
                +7 (862) 555-44-33
              </a>
            </div>
            <Button size="sm" className="w-full bg-renovation-blue hover:bg-renovation-blue/90 text-white">
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
