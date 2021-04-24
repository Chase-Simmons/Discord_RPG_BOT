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
  },
  {
    name: 'shady path',
    type: cT,
    connects: ['deep sea port', tA],
    subLocations: [n],
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
  },
  {
    name: 'bustling market',
    type: cT,
    connects: ['heros square', 'ministry of arcanum'],
    subLocations: [j, iv, w, a, m, b],
  },
  {
    name: 'ministry of arcanum',
    type: cT,
    connects: ['bustling market'],
    subLocations: [n],
  },
  { name: 'caligrase sewers', type: dG, connects: [hS, tA], subLocations: [] },
  { name: 'deltis keep', type: dG, connects: [hS, tA], subLocations: [] },
  {
    name: 'golden dragon ruins',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
  },
  { name: 'aria reservoir', type: dG, connects: [hS, tA], subLocations: [] },
  {
    name: 'temple of oblivion',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
  },
  { name: 'old sewers', type: dG, connects: [hS, tA], subLocations: [] },
  {
    name: 'underground dragoon ruins',
    type: dG,
    connects: [hS, tA],
    subLocations: [],
  },
  { name: 'descension ruins', type: dG, connects: [hS, tA], subLocations: [] },
  { name: 'roswald deep fort', type: dG, connects: [hS, tA], subLocations: [] },
  { name: 'ruined chamber', type: dG, connects: [hS, tA], subLocations: [] },
  { name: 'facility 13', type: dG, connects: [hS, tA], subLocations: [] },
  { name: 'dark roundtable', type: dG, connects: [hS, tA], subLocations: [] },
  { name: 'sangent ruins', type: dG, connects: [hS, tA], subLocations: [] },
];
