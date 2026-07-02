import { motion } from 'framer-motion';
import { Heart, ExternalLink, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden border-t border-dark-50/10">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 to-dark-600/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <img
              src="Logo Royal Betrayal RGB.png"
              alt="Royal Betrayal Logo"
              className="h-10 w-auto"
            />
            <span className="font-display text-lg font-semibold text-secondary-100">
              Royal Betrayal: Attack of Wolloofy
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6 text-sm font-sans text-secondary-400"
          >
            <a
              href="https://tabletopia.com/games/royalbetrayal-6d8zi1/play-now"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors flex items-center gap-1"
            >
              Tabletopia
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://discord.gg/CuQMZ2Nk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors flex items-center gap-1"
            >
              Discord
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.instagram.com/royalbetrayal.attackofwolloofy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors flex items-center gap-1"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
              Instagram
              <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-secondary-500 text-sm font-sans flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="w-4 h-4 text-accent-500" /> for tabletop gamers
            </p>
            <p className="text-secondary-600 text-xs font-sans mt-1">
              &copy; 2026 W49 Games. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
