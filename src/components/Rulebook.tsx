import { motion } from 'framer-motion';
import { Download, Hand, Eye, Zap } from 'lucide-react';

const features = [
  {
    icon: Hand,
    title: 'HAND = LIFE',
    description: 'Your Hand Size represents your Health Points. Take 1 unblocked damage? Discard 1 card. Manage your hand wisely—it\'s your lifeline!',
  },
  {
    icon: Eye,
    title: 'HIDDEN FACTIONS',
    description: 'Loyalists (The Prince & The hidden Guard holding the King\'s Shield) versus hidden Traitors with their own secret victory conditions. Trust no one completely.',
  },
  {
    icon: Zap,
    title: 'TOTAL DESPAIR MODE',
    description: 'If the Prince falls, Wolloofy goes BERSERK, dealing unblockable damage to everyone! The game transforms into a desperate fight for survival.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function Rulebook() {
  return (
    <section id="rulebook" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-600/30 to-dark-500" />
      <div className="absolute inset-0 atmospheric-bg opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Rulebook & Mechanics</h2>
          <p className="section-subtitle">
            Master the core mechanics before diving into the full experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="feature-card group"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 flex items-center justify-center border border-primary-500/20 group-hover:border-primary-500/40 transition-colors">
                <feature.icon className="w-7 h-7 text-primary-400 group-hover:text-primary-500 transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-secondary-100 mb-3 group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              <p className="font-body text-secondary-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="/rulebook.pdf"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(242, 117, 15, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Full Rulebook (PDF)
          </motion.a>

          <p className="mt-4 text-secondary-500 text-sm font-sans">
            Complete rules, detailed card descriptions, and strategy tips included
          </p>
        </motion.div>
      </div>
    </section>
  );
}
