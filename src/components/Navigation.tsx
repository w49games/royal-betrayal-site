import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Crown } from 'lucide-react';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'rulebook', label: 'Rulebook' },
  { id: 'how-to-play', label: 'How to Play' },
  { id: 'gallery', label: 'Cards' },
  { id: 'play', label: 'Play Online' },
  { id: 'devlog', label: 'Devlog' },
  { id: 'community', label: 'Community' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark-500/95 backdrop-blur-md border-b border-dark-50/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.button
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 group"
            >
              <img
                src="Logo Royal Betrayal RGB.webp"
                alt="Royal Betrayal Logo"
                className="h-10 w-auto"
              />
              <span className="font-boogaloo text-xl md:text-2xl font-semibold text-secondary-100 group-hover:text-primary-400 transition-colors">
                ROYAL BETRAYAL
              </span>
            </motion.button>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ y: -2 }}
                  className={`nav-link font-sans text-sm font-medium ${
                    activeSection === link.id ? 'text-primary-400' : ''
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-secondary-300 hover:text-primary-400 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-dark-950/80 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-dark-400 border-l border-dark-50/10 z-50 md:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-dark-50/10">
                <div className="flex items-center gap-2">
                  <Crown className="w-6 h-6 text-primary-500" />
                  <span className="font-display font-semibold text-secondary-100">Menu</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-secondary-300 hover:text-primary-400 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left px-4 py-3 rounded-lg font-sans text-sm font-medium transition-all ${
                      activeSection === link.id
                        ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                        : 'text-secondary-300 hover:bg-dark-300/50 hover:text-secondary-100'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
