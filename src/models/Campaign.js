import moment from 'moment';

export default class Campaign {

  constructor (id, caseId, title, description, campaignType, fundsNeeded, fundsReceived, publicFlag, dateCreated) {
      id = id || null;
      caseId = caseId || null;
      title = title || '';
      description = description || '';
      campaignType = campaignType || '';
      fundsNeeded = fundsNeeded || 0;
      fundsReceived = fundsReceived || 0;
      publicFlag = pfalselicFlag || false;
      dateCreated = dateCreated? moment(dateCreated): null;
  }
}