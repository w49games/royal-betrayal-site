import { motion } from 'framer-motion';
import { Calendar, ArrowRight, BookOpen, Users, Zap } from 'lucide-react';

// ============================================================
//  DEVLOG ENTRIES — edit these freely to update the devlog.
//  Each entry controls a card on the homepage. The `url` field
//  is where the "Read More" button links to (full article).
// ============================================================
const posts = [
  {
    id: 1,
    title: 'Designing the Cooperative Mechanics',
    date: 'June 2026',
    excerpt:
      'How we balanced cooperation and betrayal to create tension without breaking player trust. Discover the design philosophy behind the unique semi-coop experience.',
    url: 'https://w49games.itch.io/royal-betrayal/devlog/designing-the-cooperative-mechanics',
    icon: Users,
    tag: 'Game Design',
  },
  {
    id: 2,
    title: 'Tabletopia Playtest Results',
    date: 'May 2026',
    excerpt:
      "Our first round of digital playtests revealed surprising player strategies and unexpected emergent gameplay. Here's what we learned from 200+ sessions.",
    url: 'https://w49games.itch.io/royal-betrayal/devlog/tabletopia-playtest-results',
    icon: Zap,
    tag: 'Playtesting',
  },
  {
    id: 3,
    title: 'Art Direction: Dark Fantasy Aesthetics',
    date: 'April 2026',
    excerpt:
      'From sketches to final cards: our journey creating a visual identity that captures dread, mystery, and the looming presence of Wolloofy.',
    url: 'https://w49games.itch.io/royal-betrayal/devlog/art-direction-dark-fantasy-aesthetics',
    icon: BookOpen,
    tag: 'Art & Visuals',
  },
];

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

export function Devlog() {
  return (
    <section id="devlog" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-600/40 to-dark-500" />
      <div className="absolute inset-0 atmospheric-bg opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Devlog</h2>
          <p className="section-subtitle">
            Behind the scenes of game design, art, and playtesting
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group feature-card flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/10 flex items-center justify-center border border-primary-500/20">
                  <post.icon className="w-5 h-5 text-primary-400" />
                </div>
                <span className="text-xs font-sans font-medium text-primary-400 bg-primary-500/10 px-2 py-1 rounded">
                  {post.tag}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-secondary-100 mb-2 group-hover:text-primary-400 transition-colors">
                {post.title}
              </h3>

              <div className="flex items-center gap-2 text-secondary-500 text-sm font-sans mb-4">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>

              <p className="font-body text-secondary-400 leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <motion.a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto inline-flex items-center gap-2 text-primary-400 font-sans text-sm font-medium hover:gap-3 transition-all w-fit"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-secondary-500 text-sm font-sans">
            More updates coming soon. Follow us on Discord for the latest devlog entries.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
