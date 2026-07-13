import { motion } from 'framer-motion';
import { MessageCircle, ExternalLink, Users } from 'lucide-react';
import { GiscusComments } from './GiscusComments';
import { useSEO } from '../hooks/useSEO';

export function Community() {
  useSEO({
    title: 'Community',
    description: 'Join the Royal Betrayal community. Share strategies, discuss the game, and connect with other players on Discord and GitHub.',
    keywords: 'Royal Betrayal community, board game community, Discord, discussion, strategies, player forum',
  });

  return (
    <section id="community" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-600/40 to-dark-500" />
      <div className="absolute inset-0 atmospheric-bg opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Community</h2>
          <p className="section-subtitle">
            Join the discussion, share strategies, and connect with other players
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden bg-dark-400/50 backdrop-blur-sm border border-dark-50/10 min-h-[400px] flex flex-col">
              <div className="p-4 border-b border-dark-50/10 flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary-500" />
                <h3 className="font-display text-lg font-semibold text-secondary-100">
                  Comments & Discussion
                </h3>
              </div>

              <div className="flex-1 p-4">
                <GiscusComments />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="feature-card text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 flex items-center justify-center border border-primary-500/20">
                <Users className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="font-display text-lg font-semibold text-secondary-100 mb-2">
                Join Our Discord
              </h3>
              <p className="text-secondary-400 text-sm font-sans mb-4">
                Chat with players, find groups, and get the latest updates
              </p>
              <motion.a
                href="https://discord.gg/CuQMZ2Nk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(242, 117, 15, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2 w-full justify-center text-sm"
              >
                Join Discord
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}