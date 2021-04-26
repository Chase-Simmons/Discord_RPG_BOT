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
        value: `*connects to* : ***${location.connects.join('***, ***')}***.
        *places of interest* : ***${location.subLocations.join(
          '***, ***'
        )}***.`,
      });
    }
  });

  const reply = {
    title: `City Locations`,
    description: '',
    fields: [...citiesLocationsArray],
  };

  const statusCode = 2;

  return { reply, statusCode };
}
module.exports = (incomingUser) => {
  return cityLocations();
};
