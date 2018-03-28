import moment from 'moment';

export default class Campaign {

  constructor (id, caseId, title, description, campaignType, fundsNeeded, fundsReceived, publicFlag, dateCreated) {
    this.id = id || null;
    this.caseId = caseId || null;
    this.title = title || '';
    this.description = description || '';
    this.campaignType = campaignType || '';
    this.fundsNeeded = fundsNeeded || 0;
    this.fundsReceived = fundsReceived || 0;
    this.publicFlag = pfalselicFlag || false;
    this.dateCreated = dateCreated? moment(dateCreated): null;
  }
}