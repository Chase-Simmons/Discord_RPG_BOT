const info = require('./info');
const Locations = require('./Locations');
const expAlg = require('../functions/Core/expAlg');

class UserEvent {
  static userData;
  static tfResponse;
  static loggedIn = false;

  GetInfo(userID = '') {
    this.userData = info.allUsers.filter(
      (user) => user.discord_id === userID
    )[0];

    return this.userData || userID;
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
    Locations.forEach((location) => {
      if (location.name === this.userData.map) {
        location.connects.forEach((connection) => {
          if (connection === map) {
            this.tfResponse = true;
          } else if (this.tfResponse !== true) {
            this.tfResponse = false;
          }
        });
      }
    });
    return this.tfResponse;
  }

  AddExp(userID = '', incomingExp) {
    this.GetInfo(userID);

    if (
      (this.userData.current_exp += incomingExp) >= expAlg(this.userData.level)
    ) {
      this.userData.needed_exp =
        expAlg(this.userData.level) + expAlg(this.userData.level + 1);
      this.userData.level++;
    }
    this.userData.current_exp += incomingExp;
  }
}

module.exports = new UserEvent();
