import { motion } from 'framer-motion';
import { Camera, ShieldCheck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const prototypePhotos = [
  'real play photo (1).jpg',
  'real play photo (2).jpg',
  'real play photo (3).jpg',
  'real play photo (4).jpg',
  'real play photo (5).jpg',
  'real play photo (6).jpg',
  'real play photo (7).jpg',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function PrototypeGallery() {
  useSEO({
    title: 'Prototype Gallery',
    description:
      'Behind-the-scenes prototype photos of Royal Betrayal: Attack of Wolloofy. See the physical components, real play sessions, and handmade prototypes ahead of our Gamefound launch.',
    keywords:
      'Royal Betrayal prototype, board game prototype, playtest photos, Gamefound preview, tabletop prototype gallery',
  });

  return (
    <section id="prototype-gallery" className="relative py-24 md:py-32 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
            <Camera className="w-4 h-4 text-primary-400" />
            <span className="font-sans text-xs font-medium text-primary-400 uppercase tracking-wider">
              Prototype Gallery
            </span>
          </div>

          <h2 className="section-title mb-4">From the Workbench</h2>
          <p className="section-subtitle">
            Real prototype components and live play sessions. This is how Royal Betrayal: Attack of Wolloofy
            looked before it reached your table.
          </p>

          <div className="inline-flex items-center gap-1.5 mt-6 px-3 py-1.5 rounded-full bg-dark-400/60 border border-dark-50/10">
            <ShieldCheck className="w-3.5 h-3.5 text-primary-500" />
            <span className="font-sans text-xs text-secondary-400 select-none">
              Prototype photos are protected
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {prototypePhotos.map((photo, index) => (
            <motion.figure
              key={photo}
              variants={itemVariants}
              className={`relative group overflow-hidden rounded-xl bg-dark-400 border border-dark-50/10 shadow-lg hover:shadow-glow hover:border-primary-500/30 transition-all duration-500 select-none ${
                index === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
              onContextMenu={(e) => e.preventDefault()}
            >
              <div className="relative w-full h-full pointer-events-none">
                <img
                  src={`/${photo}`}
                  alt={`Royal Betrayal prototype play session photo ${index + 1}`}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className={`w-full object-cover prevent-download select-none pointer-events-none ${
                    index === 0 ? 'h-64 sm:h-80 lg:h-full min-h-[20rem]' : 'h-48 sm:h-56 lg:h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-transparent pointer-events-none" />
              </div>

              <figcaption className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                <span className="font-sans text-xs text-secondary-400/80 tracking-wider uppercase">
                  Prototype Session {String(index + 1).padStart(2, '0')}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-secondary-500 text-sm font-sans"
        >
          Every component you see was hand-assembled, playtested, and rebuilt over 20 iterations.
        </motion.p>
      </div>
    </section>
  );
}
