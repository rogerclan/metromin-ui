import moment from 'moment';

export default class Campaign {

  constructor (id, campaignId, contactName, amount, dateCreated) {
      id = id || null;
      campaignId = campaignId || null;
      contactName = contactName || '';
      amount = amount || 0;
      dateCreated = dateCreated? moment(dateCreated): null;
  }
}