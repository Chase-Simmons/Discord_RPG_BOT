const Locations = require('../modules/Locations');

function cityLocations() {
  const citiesLocationsArray = [];

  Locations.forEach((location) => {
    if (location.type === 'city') {
      citiesLocationsArray.push({
        name: location.name.toUpperCase(),
        value: `*connects to* : ***${connectionArray.join('***, ***')}***`,
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
