const info = require('../modules/info');

class UserEvent {
  static userData;

  GetInfo(userID = '') {
    info.allUsers.forEach((user) => {
      if (user.discord_id === userID) {
        this.userData = user;
      }
    });
    return this.userData;
  }
}

module.exports = new UserEvent();
