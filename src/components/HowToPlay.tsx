import { motion } from 'framer-motion';
import { Play, Youtube, ExternalLink } from 'lucide-react';

const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function HowToPlay() {
  return (
    <section id="how-to-play" className="relative py-24 md:py-32 overflow-hidden">
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
          <h2 className="section-title mb-4">How to Play</h2>
          <p className="section-subtitle">
            Watch the full gameplay walkthrough to master the rules and strategies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-2xl overflow-hidden bg-dark-400/50 backdrop-blur-sm border border-dark-50/10 hover:border-primary-500/30 transition-all duration-300"
          >
            <div className="p-4 border-b border-dark-50/10 flex items-center gap-3">
              <Youtube className="w-5 h-5 text-primary-500" />
              <h3 className="font-display text-lg font-semibold text-secondary-100">
                Gameplay Walkthrough
              </h3>
            </div>

            <div className="relative aspect-video bg-dark-950">
              <iframe
                src={`https://www.youtube.com/watch?v=Hfm94aHAbYQ`}
                title="Royal Betrayal: How to Play"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <div className="p-6">
              <p className="font-body text-secondary-400 leading-relaxed mb-4">
                New to Royal Betrayal? This video covers everything you need to know:
                setup, turn structure, combat, hidden factions, and the dreaded Despair Mode.
              </p>
              <motion.a
                href={`https://www.youtube.com/watch?v=Hfm94aHAbYQ`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center gap-2 text-sm"
              >
                <Play className="w-4 h-4" />
                Watch on YouTube
                <ExternalLink className="w-3 h-3" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
