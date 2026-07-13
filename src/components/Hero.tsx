import { motion } from 'framer-motion';
import { Play, Users, Clock, Shield, Swords, Rocket, Skull } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const badges = [
  { icon: Users, label: '4-6 Players' },
  { icon: Clock, label: '25-40 Minutes' },
  { icon: Swords, label: 'Semi-Coop Survival & Social Deduction' },
];

export function Hero() {
  useSEO({
    title: 'Royal Betrayal: Attack of Wolloofy',
    description: 'A semi-cooperative survival and social deduction board game for 4-6 players. The Bad Overlord Wolloofy is awake and hangry. Protect the Prince or prepare to survive the Chaos!',
    keywords: 'Royal Betrayal, Attack of Wolloofy, board game, semi-cooperative, social deduction, hidden roles, card game, boss battler, party game, indie board game',
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-600/50 to-dark-500" />

      <div className="absolute inset-0 atmospheric-bg" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl animate-pulse-glow delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-6"
          >
            <img
              src="Logo Royal Betrayal RGB.webp"
              alt="Royal Betrayal Logo"
              className="prevent-download h-40 w-auto mx-auto drop-shadow-lg"
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-boogaloo text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 bg-clip-text text-transparent glow-text"
          >
            ROYAL BETRAYAL
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary-200 mb-8"
          >
            Attack of Wolloofy
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-dark-400/50 backdrop-blur-sm border border-dark-50/10 rounded-full"
              >
                <badge.icon className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-sans font-medium text-secondary-200">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-secondary-300 leading-relaxed mb-12 font-body"
          >
            The Bad Overlord, Wolloofy, is awake and hangry. The Prince keeps the beast weak. Players must cooperate to protect the Prince, but beware—{' '}
            <span className="text-accent-400 font-semibold">Traitors are hiding among you</span>, and they want the Prince dead! Protect the Prince, or prepare to survive the Chaos!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://www.gamefound.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(242, 117, 15, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-500 text-dark-950 font-sans font-bold text-lg rounded-lg shadow-glow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Launch on Gamefound
            </motion.a>

            <motion.a
              href="https://tabletopia.com/games/royalbetrayal-6d8zi1/play-now"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(242, 117, 15, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2 text-lg"
            >
              <Play className="w-5 h-5" />
              Play on Tabletopia
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="mt-16 flex justify-center gap-8 text-secondary-400"
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-500" />
              <span className="text-sm font-sans">Deception</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-500" />
              <span className="text-sm font-sans">Cooperation</span>
            </div>
            <div className="flex items-center gap-2">
              <Skull className="w-5 h-5 text-primary-500" />
              <span className="text-sm font-sans">Survival</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-secondary-500/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary-500/30 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
