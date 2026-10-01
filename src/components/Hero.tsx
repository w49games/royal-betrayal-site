import { motion } from 'framer-motion';
import { Users, Clock, Shield, Swords, Skull, ExternalLink } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const GAMEFOUND_URL = 'https://gamefound.com/en/projects/w49-games/royal-betrayal-attack-of-wolloofy';

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, type: 'spring' }}
            className="mb-16 md:mb-20 select-none pointer-events-none"
          >
            <img
              src="/Game_Logo.png"
              alt="Royal Betrayal: Attack of Wolloofy"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              className="prevent-download w-full max-w-2xl mx-auto drop-shadow-2xl select-none pointer-events-none"
            />
          </motion.div>

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
            Wolloofy, the Bad Overlord, is awake and ravenous. Only the Prince's presence keeps the beast weakened. Should the Prince fall, the seal shatters, and Wolloofy will go completely BERSERK, unleashing absolute chaos on the board! Trust no one as  {' '}
            <span className="text-accent-400 font-semibold">Traitors are lurking in the shadows, scheming to eliminate both the Prince and Wolloofy to claim the win.</span>Fortunately, the secret Guard stands ready with the King's Shield to absorb the damage.Protect the Prince, face the wrath of an unstoppable monster, or selfishly pursue your own hidden goal. 

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center justify-center"
          >
            <motion.a
              href={GAMEFOUND_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(242, 117, 15, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-primary-500 hover:bg-primary-400 text-dark-950 font-sans font-bold text-lg md:text-xl rounded-xl shadow-glow-lg animate-pulse-glow transition-all duration-300 flex items-center gap-3 cursor-pointer"
            >
              <ExternalLink className="w-5 h-5" />
              Follow on Gamefound
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
