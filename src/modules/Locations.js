const a = 'armour shop';
const b = 'blacksmith';
const d = 'dungeon guide';
const i = 'inn';
const iv = 'item vendor';
const j = 'jeweller';
const m = 'magic shop';
const t = 'tavern';
const w = 'weapon shop';
const n = 'none';

const hS = 'heros square';
const tA = 'twilight alley';

const cT = 'city';
const dG = 'dungeon';

module.exports = [
  {
    name: 'deep sea port',
    type: cT,
    connects: [hS, 'shady path'],
    subLocations: [b, i],
    level: '1',
  },
  {
    name: 'shady path',
    type: cT,
    connects: ['deep sea port', tA],
    subLocations: [n],
    level: '1',
  },
  {
    name: 'heros square',
    type: cT,
    connects: [
      'deep sea port',
      tA,
      'bustling market',
      'caligrase sewers',
      'deltis keep',
      'golden dragon ruins',
      'aria reservoir',
      'temple of oblivion',
      'old sewers',
      'underground dragoon ruins',
      'descension ruins',
      'roswald deep fort',
      'ruined chamber',
      'facility 13',
      'dark roundtable',
      'sangent ruins',
    ],
    subLocations: [i, iv, b, t, j, d],
    level: '1',
  },
  {
    name: 'twilight alley',
    type: cT,
    connects: [
      hS,
      'caligrase sewers',
      'deltis keep',
      'golden dragon ruins',
      'aria reservoir',
      'temple of oblivion',
      'old sewers',
      'underground dragoon ruins',
      'descension ruins',
      'roswald deep fort',
      'ruined chamber',
      'facility 13',
      'dark roundtable',
      'sangent ruins',
    ],
    subLocations: [i, iv, b, j, d],
    level: '1',
  },
  {
    name: 'bustling market',
    type: cT,
    connects: ['heros square', 'ministry of arcanum'],
    subLocations: [j, iv, w, a, m, b],
    level: '1',
  },
  {
    name: 'ministry of arcanum',
    type: cT,
    connects: ['bustling market'],
    subLocations: [n],
    level: '1',
  },
  {
    name: 'caligrase sewers',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
    level: '1',
  },

  {
    name: 'deltis keep',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
    level: '4',
  },
  {
    name: 'golden dragon ruins',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
    level: '6',
  },
  {
    name: 'aria reservoir',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
    level: '9',
  },
  {
    name: 'temple of oblivion',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
    level: '11',
  },
  {
    name: 'old sewers',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
    level: '14',
  },
  {
    name: 'underground dragoon ruins',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
    level: '16',
  },
  {
    name: 'descension ruins',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
    level: '18',
  },
  {
    name: 'roswald deep fort',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
    level: '20',
  },
  {
    name: 'ruined chamber',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
    level: '22',
  },
  {
    name: 'facility 13',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
    level: '25',
  },
  {
    name: 'dark roundtable',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
    level: '27',
  },
  {
    name: 'sangent ruins',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
    level: '30',
  },
];
