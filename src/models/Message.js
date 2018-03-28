import User from './User';
import moment from 'moment';

export default class Message {

  constructor (id, caseId, user, content, dateCreated) {
    this.id = id||null;
    this.caseId = caseId||null;
    this.user = (user)? new User(user.id, user.userName, user.fullName, user.loggedIn) : null;
    this.content = content||null;
    this.dateCreated = dateCreated? moment(dateCreated): null;
  }
}