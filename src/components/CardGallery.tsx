import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cards, filterCategories, getBackImage, type Card } from '../data/cards';

interface FlipCardProps {
  card: Card;
}

function FlipCard({ card }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const backImage = getBackImage(card.type);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="cursor-pointer group"
      style={{ perspective: 1200 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full aspect-[2.5/3.5]"
      >
        <div
          className="absolute inset-0 rounded-xl overflow-hidden bg-dark-400 border border-dark-50/10 shadow-lg group-hover:shadow-glow group-hover:border-primary-500/30 transition-all"
          style={{ backfaceVisibility: 'hidden' }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div
            className="prevent-download w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(/${card.frontImage})` }}
            role="img"
            aria-label={card.name}
          />
          <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent flex items-center justify-center">
            <span className="text-secondary-500 font-display text-sm text-center px-2">
              {card.name}
            </span>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-xl overflow-hidden bg-dark-400 border border-primary-500/30 shadow-glow"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div
            className="prevent-download w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(/${backImage})` }}
            role="img"
            aria-label="Card back"
          />
          <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent flex items-center justify-center">
            <span className="text-secondary-500 font-display text-sm text-center px-2">
              Card Back
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export function CardGallery() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredCards = activeFilter === 'All'
    ? cards
    : cards.filter((card) => card.type === activeFilter);

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
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
          <h2 className="section-title mb-4">Card Gallery</h2>
          <p className="section-subtitle">
            Explore all 52 cards. Click to flip and reveal the back
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12 px-2"
        >
          {filterCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCards.map((card) => (
              <FlipCard key={card.id} card={card} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-secondary-500 text-sm font-sans">
            Showing {filteredCards.length} of {cards.length} cards
          </p>
        </motion.div>
      </div>
    </section>
  );
}
