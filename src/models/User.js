export default class User {
    constructor(id, userName, fullName, loggedIn) {
        this.id = id || null;
        this.userName = userName || '';
        this.fullName = fullName || '';
        this.loggedIn = loggedIn || false;
    }
  }