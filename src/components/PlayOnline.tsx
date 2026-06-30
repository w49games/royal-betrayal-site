import { motion } from 'framer-motion';
import { Play, ExternalLink, Monitor, Users, Zap } from 'lucide-react';

const features = [
  { icon: Monitor, label: 'Digital Board' },
  { icon: Users, label: 'Online Multiplayer' },
  { icon: Zap, label: 'No Setup Required' },
];

const screenshots = [
  { src: 'Tabletopiaphoto.webp', alt: 'Tabletopia gameplay screenshot showing the main board' },
  { src: 'Tabletopiaphoto2.webp', alt: 'Tabletopia gameplay screenshot showing player hands' },
];

export function PlayOnline() {
  return (
    <section id="play" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-600/30 to-dark-500" />
      <div className="absolute inset-0 atmospheric-bg opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Play on Tabletopia</h2>
          <p className="section-subtitle">
            Experience Royal Betrayal: Attack of Wolloofy in your browser with Tabletopia
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-secondary-100 mb-4">
                No Download Required
              </h3>
              <p className="font-body text-secondary-400 leading-relaxed mb-6">
                Jump straight into the action with our fully digital Tabletopia version.
                Play with friends online, no physical copy needed. The perfect way to learn
                the game and test your strategies.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                'Full 4-6 player support',
                'Built-in rules reference',
                'Automated setup',
                'Play in your browser or Steam',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-secondary-300 font-sans text-sm">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-6">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2">
                  <feature.icon className="w-4 h-4 text-primary-500" />
                  <span className="text-sm text-secondary-400 font-sans">{feature.label}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="https://www.tabletopia.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(242, 117, 15, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              <Play className="w-5 h-5" />
              Play on Tabletopia
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
          >
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative group"
              >
                <div className="rounded-xl overflow-hidden bg-dark-400 border border-dark-50/10 shadow-2xl transition-all duration-300 group-hover:border-primary-500/30 group-hover:shadow-glow">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
