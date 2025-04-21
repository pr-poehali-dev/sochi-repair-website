import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <Features />
        <Services />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
