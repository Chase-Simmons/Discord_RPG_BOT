const info = require('../modules/info');

class UserEvent {
  static userData;
  static loggedIn = false;

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
}

module.exports = new UserEvent();
