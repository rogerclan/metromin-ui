import User from './User';
import moment from 'moment';

export default class Message {

  constructor (id, caseId, user, content, dateCreated) {
      id = id||null;
      caseId = caseId||null;
      user = (user)? new User(user.id, user.userName, user.fullName, user.loggedIn) : null;
      content = content||null;
      dateCreated = dateCreated? moment(dateCreated): null;
  }
}