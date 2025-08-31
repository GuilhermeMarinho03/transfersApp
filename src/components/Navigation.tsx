import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Car, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => onSectionChange('home')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Car className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                TransferPro
              </span>
              <div className="text-sm font-medium text-muted-foreground -mt-1.5">
                Premium Transfers
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id as Section)}
                className={`relative py-2 px-1 transition-all duration-200 font-medium text-sm ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-3 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/80 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="w-px h-8 bg-border/50"></div>
            <a
              href="tel:+351211234567"
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
            >
              <Phone className="h-4 w-4" />
              <span>+351 21 123 4567</span>
            </a>
            <Button
              onClick={() => onSectionChange('home')}
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2.5 font-medium"
            >
              Reservar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:bg-muted/50 w-10 h-10"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:hidden absolute top-18 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-border/50 shadow-xl overflow-hidden"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="px-6 py-6 space-y-1"
              >
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    onClick={() => {
                      onSectionChange(item.id as Section);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-200 font-medium ${
                      activeSection === item.id
                        ? 'text-primary bg-primary/5'
                        : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="pt-4 border-t border-border/50 space-y-3"
                >
                  <a
                    href="tel:+351211234567"
                    className="flex items-center space-x-3 text-primary p-4 hover:bg-primary/5 rounded-xl transition-colors font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+351 21 123 4567</span>
                  </a>

                  <Button
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white shadow-lg py-3 font-medium"
                    onClick={() => {
                      onSectionChange('home');
                      setIsMenuOpen(false);
                    }}
                  >
                    Reservar Agora
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
