import MetMinUser from './MetMinUser';
import moment from 'moment';

export default class Message {

  constructor (id, caseId, metminUser, content, dateCreated) {
      id = id||null;
      caseId = caseId||null;
      metminUser = (metminUser)? new MetMinUser(metminUser.id, metminUser.userName, metminUser.fullName, metminUser.loggedIn) : null;
      content = content||null;
      dateCreated = dateCreated? moment(dateCreated): null;
  }
}