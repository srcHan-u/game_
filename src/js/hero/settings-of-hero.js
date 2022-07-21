export const HERO = {
  name: null,
  level: 1,
  experience: {
    have: 0,
    need: 100,
  },
  totalArmor: 0,
  totalDamage: 0,
  race: null,
  class: null,
  abilities: {
    health: 0,
    strength: 0,
    agility: 0,
    intelligence: 0,
    luck: 0.0,
  },
  equip: {
    weapon: {
      name: null,
      damage: 0,
      critChance: 1,
    },

    arms: {
      name: null,
      armor: 0,
    },
  },
  capabilities: {
    classAbilities: null,
    magicAbilities: null,
  },
};

const HERO_BAG = {
  weapon: {},
  arms: {},
};

export const BASIC_CHARACTERISTICS_OF_CLASSES = {
  magician: {
    abilities: {
      health: 740,
      strength: 8,
      agility: 5,
      intelligence: 15,
      luck: 0.25,
    },
  },
  warrior: {
    abilities: {
      health: 0,
      strength: 0,
      agility: 0,
      intelligence: 0,
      luck: 0,
    },
  },
  knight: {
    abilities: {
      health: 0,
      strength: 0,
      agility: 0,
      endurance: 0,
      intelligence: 0,
      luck: 0,
    },
  },
  archer: {
    abilities: {
      health: 0,
      strength: 0,
      agility: 0,
      endurance: 0,
      intelligence: 0,
      luck: 0,
    },
  },
  hunter: {
    abilities: {
      health: 0,
      strength: 0,
      agility: 0,
      endurance: 0,
      intelligence: 0,
      luck: 0,
    },
  },
};
// warrior hunter archer knight magician
