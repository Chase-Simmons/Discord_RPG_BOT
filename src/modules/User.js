const info = require('../modules/info');

const mapping = [
  { name: 'deep sea port', connects: ['heros square'] },
  { name: 'heros square', connects: ['deep sea port'] },
];

class UserEvent {
  static tfResponse;
  static userData;
  static loggedIn = false;

  GetInfo(userID = '') {
    info.allUsers.forEach((user) => {
      if (user.discord_id === userID) {
        this.userData = user;
      }
    });
    return this.userData || false;
  }

  LoginCheck(userID = '') {
    info.loggedInUsers.forEach((user) => {
      if (user === userID) {
        this.loggedIn = true;
      }
    });
    return this.loggedIn;
  }

  Move(userID = '', map = '') {
    this.GetInfo(userID);
    mapping.forEach((location) => {
      if (location.name === this.userData.map) {
        location.connects.forEach((connection) => {
          if (connection === map) {
            this.tfResponse = true;
            return;
          } else {
            this.tfResponse = false;
          }
        });
      }
    });
    return this.tfResponse;
  }
}

module.exports = new UserEvent();
