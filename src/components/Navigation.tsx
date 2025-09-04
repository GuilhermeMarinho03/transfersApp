import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Car, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navigation.css';

type Section = 'home' | 'prices' | 'about' | 'contacts' | 'help';

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'prices', label: 'Preços' },
    { id: 'about', label: 'Sobre Nós' },
    { id: 'contacts', label: 'Contactos' },
    { id: 'help', label: 'Ajuda' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="navigation"
    >
      <div className="navigation-container">
        <div className="navigation-inner">
          {/* Logo */}
          <div className="logo" onClick={() => onSectionChange('home')}>
            <div className="logo-icon">
              <Car className="icon" />
            </div>
            <div className="logo-text">
              <span className="title">TransferPro</span>
              <div className="subtitle">Premium Transfers</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="nav-menu">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => onSectionChange(item.id as Section)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <div className="separator"></div>
            <a href="tel:+351211234567" className="cta-phone">
              <Phone className="icon" />
              <span>+351 21 123 4567</span>
            </a>
            <button className="cta-button" onClick={() => onSectionChange('home')}>
              Reservar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu"
            >
              <div className="mobile-menu-inner">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => {
                      onSectionChange(item.id as Section);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}

                <a href="tel:+351211234567" className="mobile-phone">
                  <Phone className="icon" />
                  <span>+351 21 123 4567</span>
                </a>

                <button
                  className="mobile-cta-button"
                  onClick={() => {
                    onSectionChange('home');
                    setIsMenuOpen(false);
                  }}
                >
                  Reservar Agora
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
