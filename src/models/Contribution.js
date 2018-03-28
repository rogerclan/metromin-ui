import moment from 'moment';

export default class Campaign {

  constructor (id, campaignId, contactName, amount, dateCreated) {
    this.id = id || null;
    this.campaignId = campaignId || null;
    this.contactName = contactName || '';
    this.amount = amount || 0;
    this.dateCreated = dateCreated? moment(dateCreated): null;
  }
}