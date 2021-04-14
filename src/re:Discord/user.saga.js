const axios = require('axios');

function* getSaga() {
  try {
    yield console.log('hello');
  } catch (err) {
    console.log(err);
  }
}

module.exports = (data) => {
  const call = data.call;
  const payload = data.payload;

  switch (call) {
    case 'GET':
      // axios.get(`/api/user`);
      getSaga().next;
      break;
    case 'POST':
      break;
    case 'DELETE':
      break;
    case 'PUT':
      break;
  }
};
