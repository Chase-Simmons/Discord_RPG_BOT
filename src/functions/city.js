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
  const citiesLocationsArray = Locations.filter(
    (location) =>
      partsOfCity.includes(location.name) && location.type === 'city'
  ).map((location) => ({
    name: location.name.toUpperCase(),
    value: `*connects to* : ***${location.connects.join('***, ***')}***.
      *places of interest* : ***${location.subLocations.join('***, ***')}***.`,
  }));

  const reply = {
    title: `City Locations`,
    description: '',
    fields: [...citiesLocationsArray],
  };

  const statusCode = 2;

  return { reply, statusCode };
}
module.exports = () => {
  return cityLocations();
};
