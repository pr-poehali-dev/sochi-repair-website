import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="font-playfair text-2xl font-bold text-renovation-navy">
              РемонтСочи
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-renovation-navy hover:text-renovation-blue transition-colors">
            Главная
          </Link>
          <Link to="/services" className="text-renovation-navy hover:text-renovation-blue transition-colors">
            Услуги
          </Link>
          <Link to="/portfolio" className="text-renovation-navy hover:text-renovation-blue transition-colors">
            Портфолио
          </Link>
          <Link to="/about" className="text-renovation-navy hover:text-renovation-blue transition-colors">
            О нас
          </Link>
          <Link to="/contacts" className="text-renovation-navy hover:text-renovation-blue transition-colors">
            Контакты
          </Link>
        </nav>

        {/* Call Button */}
        <div className="hidden md:flex">
          <Button variant="default" className="bg-renovation-blue hover:bg-renovation-blue/90">
            <Phone className="mr-2 h-4 w-4" />
            +7 (862) 555-0123
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-renovation-navy p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 text-renovation-navy hover:bg-renovation-beige/20 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/services" 
              className="px-4 py-2 text-renovation-navy hover:bg-renovation-beige/20 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link 
              to="/portfolio" 
              className="px-4 py-2 text-renovation-navy hover:bg-renovation-beige/20 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Портфолио
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-renovation-navy hover:bg-renovation-beige/20 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contacts" 
              className="px-4 py-2 text-renovation-navy hover:bg-renovation-beige/20 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button variant="default" className="w-full bg-renovation-blue hover:bg-renovation-blue/90">
              <Phone className="mr-2 h-4 w-4" />
              +7 (862) 555-0123
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
