export default class User {
    constructor(id, userName, fullName, loggedIn) {
        this.id = id || null;
        this.name = userName || '';
        this.fullName = fullName || '';
        this.loggedIn = loggedIn || false;
    }
  }