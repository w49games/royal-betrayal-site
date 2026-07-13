import { motion } from 'framer-motion';
import { Feather, Sparkles, Swords, Shield, Skull, Palette, Package, Heart } from 'lucide-react';

const sections = [
  {
    icon: Sparkles,
    title: 'The Spark of Chaos',
    body: [
      'The seed for Royal Betrayal was planted back in Hong Kong. After exhausting days working as an engineer, I would gather with my architect and building consultant colleagues to dive deep into heavy tabletop games. I loved the intense strategy, but I kept dreaming of creating something distinct: a game that captures the loud, chaotic energy of a party game, yet secretly demands cutthroat teamwork and calculation.',
      'When I moved to Melbourne, Australia, and married my wife, Tara.U, this passion project truly ignited. Tara brought a secret weapon to the design table: a fresh perspective. Unlike my hardcore gaming group, she played fewer board games. Every time I designed a mechanic that was too convoluted, she became our ultimate "accessibility filter." Her grounded feedback ensured we were building a semi-coop survival game for 4-6 players that plays in a tight 25-40 minutes, which both veterans and newcomers could instantly enjoy.',
    ],
  },
  {
    icon: Swords,
    title: 'The Core Premise: How It Plays',
    body: [
      'Before diving into the design process, here is a quick overview of how the game actually plays. Royal Betrayal is a semi-cooperative boss-battler. All players must work together to defeat the Bad Overlord, Wolloofy, using a unique system where your hand of cards is also your health pool (Hand = Life). Every time you attack or defend, you must spend or discard cards, constantly bleeding your own life to survive.',
      'However, hidden roles change everything: Traitors are secretly hiding among the group waiting to assassinate the Prince, while a hidden Guard stands ready to protect him. You must deeply cooperate to survive the Boss, while constantly trying to deduce who is waiting to backstab you.',
    ],
  },
  {
    icon: Shield,
    title: 'The 20-Version Crucible & International Standards',
    body: [
      'We didn\'t wait for fancy components to start testing. Our very first prototype was literally just text printed on standard A4 paper, cut out, and sleeved with my personal collection of Pokémon and One Piece trading cards just to give them that professional snap and shuffling weight.',
      'We playtested aggressively, simulating massive 4, 5, and 6-player games by controlling multiple hands ourselves, then unleashing it on relatives and church friends. We listened, analyzed the feedback like engineers, and relentlessly rebuilt the game. We tore it apart and reconstructed it over 20 times.',
      'To ensure our game could stand up to global standards, we even submitted our core concepts to prestigious contests like the Cardboard Edison Award and the 45th International Contest of Boulogne-Billancourt. The invaluable professional feedback from industry veterans helped us lock in the intense mechanics you will soon experience.',
    ],
  },
  {
    icon: Swords,
    title: 'Designing the Mind Games: Why Every Turn Hurts',
    body: [
      'When designing the turn structure, I didn\'t want players to just optimally spend action points like a math puzzle. I wanted every single decision to be an agonizing choice between survival, progression, and trust. Here is how we engineered the psychological warfare:',
    ],
    subSections: [
      {
        title: 'The Agony of "Hand = Life"',
        body: 'In most games, playing a powerful Weapon or Armor feels great. In Royal Betrayal, because your hand size is literally your HP, playing a card costs you your lifeblood. You are constantly staring at your hand, sweating over whether to equip an item to help kill the Boss, or hold onto it because you suspect the smiling player next to you is a Traitor waiting to backstab you.',
      },
      {
        title: 'The "Support" Bluff',
        body: 'We wanted a mechanic that purely drives social deduction. Once per turn, you can pass a card face-down to another player, and then you draw a replacement. This is the ultimate tool for manipulation. As a Loyalist, you might be desperately passing a shield to a dying friend. But as a Traitor, I can pass you a completely useless card just to buy your absolute trust, setting you up for a lethal strike later.',
      },
      {
        title: 'Brawling the Turtles (PvP)',
        body: 'During early playtests, we noticed players would sometimes "turtle up" by equipping massive walls of Armor. To break this, we designed the Unarmed Brawl. You roll dice against each other, and if the attacker wins, the defender loses a card. Crucially, Armor cannot block a Brawl! It forces heavily armored players to still fear the poorest, unarmed player at the table. You don\'t shoot them; you physically wrestle them.',
      },
      {
        title: 'The Cinematic Climax: The King\'s Shield',
        body: 'We didn\'t just want a standard "counter" spell; we wanted a cinematic movie moment. The secret Guard holds the King\'s Shield. We gave it the "Flash" ability so it can be revealed instantly, even on someone else\'s turn. There is no better feeling in this game than watching a Traitor smugly launch a lethal assassination at the Prince, only for the quiet player across the table to slam the Shield token face-up and take the bullet. The table always erupts in cheers.',
      },
    ],
  },
  {
    icon: Skull,
    title: 'The Chaos Engine: Breaking the "Alpha Gamer"',
    body: [
      'A major design flaw in many cooperative games is the "Alpha Gamer" problem—where one player just calculates the optimal move for everyone. We shattered that using total unpredictability.',
    ],
    subSections: [
      {
        title: 'The Environment Hates You',
        body: 'You cannot plan perfectly because the game actively fights back. Drawing a Wolves card from the deck forces you to immediately take damage or break your armor. And at the end of every round, ALL players must roll a die to dodge Wolloofy\'s Trample. When someone rolls a 1 and takes a Critical Hit (2 Damage), the entire dynamic shifts. It forces players to constantly react to sudden, terrifying poverty.',
      },
      {
        title: 'The Mutating Boss',
        body: 'To prevent the Boss fight from feeling like a static punching bag, we tied Wolloofy\'s HP to physical dice. Every time a die breaks, a permanent Mutation card is drawn. If Soul Siphon drops, suddenly every missed Unarmed attack actively heals the Boss! A strategy that worked perfectly on turn two will completely destroy your team on turn five.',
      },
    ],
  },
  {
    icon: Skull,
    title: 'Designing the Betrayal: A Web of Multiple Endings',
    body: [
      'From a design perspective, we didn\'t just want a simple "Good vs. Evil" ending. We wanted paranoia. Depending on the choices made, the game branches into wildly different conclusions:',
    ],
    endings: [
      { label: 'The Loyalist Victory', text: 'The Overlord dies, and The Prince survives to rule another day.' },
      { label: 'The Overlord Victory', text: 'Wolloofy devours everyone, reducing all players\' hands to zero.' },
      { label: 'The Regicide Victory (Traitors)', text: 'The Overlord dies, and The Prince is successfully assassinated.' },
    ],
    bodyAfter: [
      'But here is where the game truly earns the name Royal Betrayal. You cannot even trust your fellow Traitors. We engineered a system where Traitors might be pursuing an "Ambition" victory. This means they only care about completing the secret condition printed on their personal Destiny Card, regardless of whether the Prince lives or dies!',
      'If the Traitor faction is losing, a player holding the Dragonslayer destiny card can completely abandon the assassination plot. They can pretend to be a Loyalist, help the team survive, and steal a solo victory by landing the final blow on the Boss themselves. You have to constantly read the table and question the motives of everyone—even your fellow conspirators.',
    ],
  },
  {
    icon: Skull,
    title: 'Total Despair: The Sudden Death Climax',
    body: [
      'One of the biggest flaws in many survival games is the late-game stall—players turtle up, and the game drags. We needed a ruthless timer. The clock is always ticking; if the Story Deck runs out, or if the Traitors successfully assassinate the Prince, the game plunges into Total Despair Mode.',
      'We engineered a frantic sudden death. The Overlord goes Berserk, dealing unblockable damage to everyone at the end of every round. Furthermore, Stagnation freezes the board, preventing anyone from equipping new items. It forces players to stop planning carefully and start swinging desperately.',
      'But my absolute favorite narrative design is what happens to the Guard. If the Prince dies, the Guard is forced into Public Shame, permanently flipping their Shield face-up and losing all its powers.',
      'However, they transform into the "Eternal Failed Loyalist"—an avenger who cannot win and cannot join the Traitors. Their ONLY goal is pure vengeance: hunting down and killing the remaining Traitors before the Berserk Boss wipes the entire table out. It transforms a calculating cold war into a bloody, glorious slasher movie where the Guard has nothing left to lose.',
    ],
  },
  {
    icon: Palette,
    title: 'Human Souls Only & The Legendary KOUKI SAITOU',
    body: [
      'When it came time to find the right art style, we made a firm decision: we explicitly stated in all our artist contracts that the use of AI-generated art is strictly forbidden. We wanted real human soul in our game. We found our lead illustrator, Syakir from Indonesia, whose illustrations perfectly capture that classic RPG video game feel for our main cards.',
      'But as a massive TCG collector, I wanted to push the immersion further. I wanted players to hold Artcards that make them feel fully immersed in the brutal world of Royal Betrayal. So, I sent cold emails to various professional TCG artists.',
      'After multiple conversations, we are incredibly honored to announce that the legendary artist KOUKI SAITOU has joined our project! For his very first board game project, Saitou-sensei is crafting a breathtaking, cinematic scene. We made sure the core artwork explicitly depicts a Guard protecting the Prince—ensuring everyone instantly knows this is a heavily cooperative game, rather than a solo mission.',
      'As for the rest of this masterpiece? We are keeping the chilling details and the true faces of the Traitors shrouded in mystery. You will have to get your hands on the First Edition to see the full, glorious picture for yourself.',
    ],
  },
  {
    icon: Package,
    title: 'The Hidden Iceberg of Indie Publishing',
    body: [
      'Designing the game was only 10% of the work. Once the mechanics were solid, a massive wave of administrative tasks hit us. Suddenly, I wasn\'t just a designer; I had to become a project manager. We had to register a company, set up a postal address, build a website, and ensure all our business documentation and tax reporting were perfectly in order.',
      'We spent weeks getting quotes for graphic design, prototyping, and mass manufacturing. We had to study shipping routes, calculate exact box weights, and research legal regulations.',
      'And the hardest part? Doing all of that just means you have a product. The real Final Boss of indie publishing is Marketing. Navigating the world of community building and trying to get a passion project noticed is a daunting new adventure, and we are learning every single day.',
    ],
  },
  {
    icon: Heart,
    title: 'Building a Lasting IP & The First Edition Exclusives',
    body: [
      'Despite the stress and the steep learning curve, I wouldn\'t trade this experience for anything. My hope is simply that this campaign earns enough to cover our costs so I can continue this journey. I want to build Royal Betrayal into a lasting IP, and I have already started mapping out a two-player sequel!',
      'But every franchise starts with a single step. That is why our Gamefound First Edition Set will be incredibly special. It will exclusively include the Limited Edition Artcards illustrated by KOUKI SAITOU. We want this box to hold immense collectible value for the early believers who back us when we are just starting out.',
      'We are a small indie team pouring our hearts into this, and we rely entirely on the support of the community to bring Royal Betrayal to life.',
      'Thank you for reading, for playtesting, and for joining us on this crazy ride.',
    ],
  },
];

export function DesignerDiary() {
  return (
    <section id="designer-diary" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-600/40 to-dark-500" />
      <div className="absolute inset-0 atmospheric-bg opacity-50" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
            <Feather className="w-4 h-4 text-primary-400" />
            <span className="font-sans text-xs font-medium text-primary-400 uppercase tracking-wider">
              Designer Diary
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 bg-clip-text text-transparent">
            Royal Betrayal: Attack of Wolloofy
          </h1>

          <p className="font-body text-secondary-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto italic">
            Welcome to the comprehensive, unfiltered designer diary for Royal Betrayal: Attack of Wolloofy. I'm Oscar.S,
            the lead designer. As we gear up for our Gamefound launch, I want to pull back the curtain and share the
            complete, obsessive journey of how this game came to life—from the initial spark and the grueling mechanics
            design, to our strict anti-AI art stance and the realities of indie publishing.
          </p>

          <div className="flex items-center justify-center gap-2 mt-8 text-secondary-500 text-sm font-sans">
            <span>By Oscar.S</span>
            <span className="w-1 h-1 rounded-full bg-secondary-600" />
            <span>Lead Designer</span>
          </div>
        </motion.div>

        <div className="space-y-16 md:space-y-20">
          {sections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 flex items-center justify-center border border-primary-500/20">
                  <section.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-secondary-100">
                  {section.title}
                </h2>
              </div>

              <div className="pl-0 md:pl-16 space-y-5">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="font-body text-secondary-300 text-base md:text-lg leading-[1.8]">
                    {paragraph}
                  </p>
                ))}

                {section.subSections?.map((sub) => (
                  <div key={sub.title} className="mt-8 pl-4 md:pl-6 border-l-2 border-primary-500/20">
                    <h3 className="font-display text-lg md:text-xl font-semibold text-primary-400 mb-3">
                      {sub.title}
                    </h3>
                    <p className="font-body text-secondary-300 text-base md:text-lg leading-[1.8]">
                      {sub.body}
                    </p>
                  </div>
                ))}

                {section.endings && (
                  <div className="mt-8 grid gap-4">
                    {section.endings.map((ending) => (
                      <div
                        key={ending.label}
                        className="flex flex-col md:flex-row gap-2 md:gap-4 p-4 rounded-xl bg-dark-400/50 border border-dark-50/10"
                      >
                        <span className="font-display text-sm md:text-base font-semibold text-primary-400 md:w-64 md:flex-shrink-0">
                          {ending.label}
                        </span>
                        <span className="font-body text-secondary-300 text-sm md:text-base leading-relaxed">
                          {ending.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {section.bodyAfter?.map((paragraph, i) => (
                  <p key={`after-${i}`} className="font-body text-secondary-300 text-base md:text-lg leading-[1.8]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-10 border-t border-dark-50/10 text-center"
        >
          <div className="inline-flex items-center gap-2 text-secondary-500 text-sm font-sans">
            <Heart className="w-4 h-4 text-primary-500" />
            <span>Royal Betrayal: Attack of Wolloofy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
