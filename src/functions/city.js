const Locations = require('../modules/Locations');

function cityLocations() {
  const partsOfCity = [
    'deep sea port',
    'shady path',
    'heros square',
    'twilight alley',
    'bustling market',
    'ministry of arcanum',
  ];
  const citiesLocationsArray = [];

  Locations.forEach((location) => {
    location.connects = location.connects.filter((connection) =>
      partsOfCity.includes(connection)
    );
    if (location.type === 'city') {
      citiesLocationsArray.push({
        name: location.name.toUpperCase(),
        value: `*connects to* : ***${location.connects.join('***, ***')}***`,
      });
    }
  });
  console.log(citiesLocationsArray);

  const rep = {
    content: {
      title: `City Locations`,
      description: '',
      fields: [
        ...citiesLocationsArray,
        // {
        //   name: '***Classes***',
        //   value:
        //     '---> **warrior**\n---> **cleric**\n---> **rogue**\n---> **mage**\n---> **archer**',
        //   inline: true,
        // },
      ],
    },
  };

  return rep;
}
module.exports = (incomingUser) => {
  return cityLocations();
};
