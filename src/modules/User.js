const info = require('./info');
const Locations = require('./Locations');

class UserEvent {
  render() {
    console.log('hello');
    return;
  }

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
}

module.exports = new UserEvent();
