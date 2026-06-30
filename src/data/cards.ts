export interface Card {
  id: number;
  name: string;
  type: 'Destiny' | 'Story' | 'Mutation' | 'Action' | 'Reference' | 'Setup';
  frontImage: string;
}

export const cards: Card[] = [
  { id: 1, name: 'DEATHWARDEN', type: 'Destiny', frontImage: 'Destiny Cards_DEATHWARDEN.png' },
  { id: 2, name: 'DESERTER', type: 'Destiny', frontImage: 'Destiny Cards_DESERTER.png' },
  { id: 3, name: 'DRAGON SLAYER', type: 'Destiny', frontImage: 'Destiny Cards_DRAGON SLAYER.png' },
  { id: 4, name: 'DUELIST', type: 'Destiny', frontImage: 'Destiny Cards_DUELIST.png' },
  { id: 5, name: 'EXECUTIONER', type: 'Destiny', frontImage: 'Destiny Cards_EXECUTIONER.png' },
  { id: 6, name: 'FIGHTER', type: 'Destiny', frontImage: 'Destiny Cards_FIGHTER.png' },
  { id: 7, name: 'KING SHIELD', type: 'Destiny', frontImage: 'Destiny Cards_KING SHIELD.png' },
  { id: 8, name: 'NURSE', type: 'Destiny', frontImage: 'Destiny Cards_NURSE.png' },
  { id: 9, name: 'PACIFIST', type: 'Destiny', frontImage: 'Destiny Cards_PACIFIST.png' },
  { id: 10, name: 'ROYAL CROWN', type: 'Destiny', frontImage: 'Destiny Cards_ROYAL CROWN.png' },
  { id: 11, name: 'TREASURE HUNTER', type: 'Destiny', frontImage: 'Destiny Cards_TREASURE HUNTER.png' },
  { id: 12, name: 'WARLORD', type: 'Destiny', frontImage: 'Destiny Cards_WARLORD.png' },
  { id: 13, name: 'ACID RAIN', type: 'Story', frontImage: 'Story Cards_ACID RAIN.png' },
  { id: 14, name: 'ADRENALINE', type: 'Story', frontImage: 'Story Cards_ADRENALINE.png' },
  { id: 15, name: 'CHARGING', type: 'Story', frontImage: 'Story Cards_CHARGING.png' },
  { id: 16, name: 'CONFUSION', type: 'Story', frontImage: 'Story Cards_CONFUSION.png' },
  { id: 17, name: 'CRITICAL', type: 'Story', frontImage: 'Story Cards_CRITICAL.png' },
  { id: 18, name: 'CULL', type: 'Story', frontImage: 'Story Cards_CULL.png' },
  { id: 19, name: 'DISARM', type: 'Story', frontImage: 'Story Cards_DISARM.png' },
  { id: 20, name: 'GAZE', type: 'Story', frontImage: 'Story Cards_GAZE.png' },
  { id: 21, name: 'MINEFIELD', type: 'Story', frontImage: 'Story Cards_MINEFIELD.png' },
  { id: 22, name: 'PLAGUE', type: 'Story', frontImage: 'Story Cards_PLAGUE.png' },
  { id: 23, name: 'ROAR', type: 'Story', frontImage: 'Story Cards_ROAR.png' },
  { id: 24, name: 'ROCKFALL', type: 'Story', frontImage: 'Story Cards_ROCKFALL.png' },
  { id: 25, name: 'SACRIFICE', type: 'Story', frontImage: 'Story Cards_SACRIFICE.png' },
  { id: 26, name: 'SCREAM', type: 'Story', frontImage: 'Story Cards_SCREAM.png' },
  { id: 27, name: 'STRIDE', type: 'Story', frontImage: 'Story Cards_STRIDE.png' },
  { id: 28, name: 'SUPPLY DROP', type: 'Story', frontImage: 'Story Cards_SUPPLY DROP.png' },
  { id: 29, name: 'SWIPE', type: 'Story', frontImage: 'Story Cards_SWIPE.png' },
  { id: 30, name: 'TRAMPLE', type: 'Story', frontImage: 'Story Cards_TRAMPLE.png' },
  { id: 31, name: 'ANTI-MAGIC', type: 'Mutation', frontImage: 'Mutation Cards_ANTI-MAGIC.png' },
  { id: 32, name: 'BLOOD THIRST', type: 'Mutation', frontImage: 'Mutation Cards_BLOOD THIRST.png' },
  { id: 33, name: 'BLOOM', type: 'Mutation', frontImage: 'Mutation Cards_BLOOM.png' },
  { id: 34, name: 'BURNING', type: 'Mutation', frontImage: 'Mutation Cards_BURNING.png' },
  { id: 35, name: 'CURSE', type: 'Mutation', frontImage: 'Mutation Cards_CURSE.png' },
  { id: 36, name: 'GRAVITY', type: 'Mutation', frontImage: 'Mutation Cards_GRAVITY.png' },
  { id: 37, name: 'OPEN WOUND', type: 'Mutation', frontImage: 'Mutation Cards_OPEN WOUND.png' },
  { id: 38, name: 'SCALES', type: 'Mutation', frontImage: 'Mutation Cards_SCALES.png' },
  { id: 39, name: 'SOUL SIPHON', type: 'Mutation', frontImage: 'Mutation Cards_SOUL SIPHON.png' },
  { id: 40, name: 'SPIKES', type: 'Mutation', frontImage: 'Mutation Cards_SPIKES.png' },
  { id: 41, name: 'ACID', type: 'Action', frontImage: 'Action Cards_ACID.png' },
  { id: 42, name: 'ARMOR', type: 'Action', frontImage: 'Action Cards_ARMOR.png' },
  { id: 43, name: 'HEAVY HIT', type: 'Action', frontImage: 'Action Cards_HEAVY HIT.png' },
  { id: 44, name: 'NEGATE', type: 'Action', frontImage: 'Action Cards_NEGATE.png' },
  { id: 45, name: 'SEARCH', type: 'Action', frontImage: 'Action Cards_SEARCH.png' },
  { id: 46, name: 'STEAL', type: 'Action', frontImage: 'Action Cards_STEAL.png' },
  { id: 47, name: 'TRANSFUSION', type: 'Action', frontImage: 'Action Cards_TRANSFUSION.png' },
  { id: 48, name: 'TRAP', type: 'Action', frontImage: 'Action Cards_TRAP.png' },
  { id: 49, name: 'WEAPON', type: 'Action', frontImage: 'Action Cards_WEAPON.png' },
  { id: 50, name: 'WOLVES', type: 'Action', frontImage: 'Action Cards_WOLVES.png' },
  { id: 51, name: 'FRONT', type: 'Reference', frontImage: 'Reference Card_FRONT.png' },
  { id: 52, name: 'FRONT', type: 'Setup', frontImage: 'Setup Cards_FRONT.png' },
];

export const filterCategories = ['All', 'Destiny', 'Story', 'Mutation', 'Action', 'Reference', 'Setup'] as const;

export const getBackImage = (type: Card['type']): string => {
  const backImageMap: Record<Card['type'], string> = {
    Destiny: 'Destiny Cards_BACK.png',
    Story: 'Story Cards_BACK.png',
    Mutation: 'Mutation Cards_BACK.png',
    Action: 'Action Cards_BACK.png',
    Reference: 'Reference Card_BACK.png',
    Setup: 'Setup Cards_BACK.png',
  };
  return backImageMap[type];
};
