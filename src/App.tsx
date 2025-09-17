import { useState } from 'react';
import Navigation from './components/Navigation';
import { HomeSection } from './components/sections/HomeSection';
import { PricesTable } from './components/sections/PricesSection';
import { AboutSection  } from './components/sections/AboutSection';
import { ContactsSection } from './components/sections/ContactSection';
import { HelpSection } from './components/sections/HelpSection';
import Footer from './components/Footer';


type Section = 'home' | 'prices' | 'about' | 'contacts' | 'help';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'prices':
        return <PricesTable />;
      case 'about':
        return <AboutSection />;
      case 'contacts':
        return <ContactsSection />;
        return <ContactsSection />;
      case 'help':
        return <HelpSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <main className="relative">
        {renderActiveSection()}
      </main>
      
      <Footer />
    </div>
  );
}
