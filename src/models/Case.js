import moment from 'moment';
import User from './User';

export default class Case {

  constructor (id, caseType, user, contactName, contactEmail, contactPhone, location, message, dateCreated) {
      this.id = id || null;
      this.caseType = caseType || '';
      this.user = (user)? new User(user.id, user.userName, user.fullName, user.loggedIn) : null;
      this.contactName = contactName || '';
      this.contactEmail = contactEmail || '';
      this.contactPhone = contactPhone || '';
      this.location = location || '';
      this.message = message || '';
      this.dateCreated = dateCreated? moment(dateCreated): null;
  }
}