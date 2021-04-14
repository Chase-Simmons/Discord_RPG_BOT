const axios = require('axios');

function* getSaga() {
  try {
    yield console.log('hello');
  } catch {}
}

module.exports = (data) => {
  const call = data.call;
  const payload = data.payload;

  switch (call) {
    case 'GET':
      // axios.get(`/api/user`);
      getSaga();
      break;
    case 'POST':
      break;
    case 'DELETE':
      break;
    case 'PUT':
      break;
  }
};
