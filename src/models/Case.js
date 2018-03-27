import moment from 'moment';

export default class Case {

  constructor (id, caseType, user, contactName, contactEmail, contactPhone, location, message, dateCreated) {
      id = id || null;
      caseType = caseType || '';
      assignee = (user)? new User(user.id, user.userName, user.fullName, user.loggedIn) : null;
      contactName = contactName || '';
      contactEmail = contactEmail || '';
      contactPhone = contactPhone || '';
      location = location || '';
      message = message || '';
      dateCreated = dateCreated? moment(dateCreated): null;
  }
}