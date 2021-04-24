const a = 'armour shop';
const b = 'blacksmith';
const d = 'dungeon guide';
const i = 'inn';
const iv = 'item vendor';
const j = 'jeweller';
const m = 'magic shop';
const t = 'tavern';
const w = 'weapon shop';

const hS = 'heros square';
const tA = 'twilight alley';

module.exports = [
  {
    name: 'deep sea port',
    connects: [hS, 'shady path'],
    subLocations: [b, i],
  },
  {
    name: 'shady path',
    connects: ['deep sea port', tA],
    subLocations: [],
  },
  {
    name: 'heros square',
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
    connects: ['heros square', 'ministry of arcanum'],
    subLocations: [j, iv, w, a, m, b],
  },
  {
    name: 'ministry of arcanum',
    connects: ['bustling market'],
    subLocations: [],
  },
  { name: 'caligrase sewers', connects: [hS, tA], subLocations: [] },
  { name: 'deltis keep', connects: [hS, tA], subLocations: [] },
  { name: 'golden dragon ruins', connects: [hS, tA], subLocations: [] },
  { name: 'aria reservoir', connects: [hS, tA], subLocations: [] },
  { name: 'temple of oblivion', connects: [hS, tA], subLocations: [] },
  { name: 'old sewers', connects: [hS, tA], subLocations: [] },
  { name: 'underground dragoon ruins', connects: [hS, tA], subLocations: [] },
  { name: 'descension ruins', connects: [hS, tA], subLocations: [] },
  { name: 'roswald deep fort', connects: [hS, tA], subLocations: [] },
  { name: 'ruined chamber', connects: [hS, tA], subLocations: [] },
  { name: 'facility 13', connects: [hS, tA], subLocations: [] },
  { name: 'dark roundtable', connects: [hS, tA], subLocations: [] },
  { name: 'sangent ruins', connects: [hS, tA], subLocations: [] },
];
