const info = require('../modules/info');

class UserEvent {
  static basicResponse;
  static userData;
  static loggedIn = false;
  static mapping = [
    { name: 'deep sea port', connects: ['heros square'] },
    { name: 'heros square', connects: ['deep sea port'] },
  ];

  GetInfo(userID = '') {
    info.allUsers.forEach((user) => {
      if (user.discord_id === userID) {
        this.userData = user;
      }
    });
    return this.userData;
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
            this.basicResponse === true;
          }
        });
      }
    });
    return this.basicResponse;
  }
}

module.exports = new UserEvent();
