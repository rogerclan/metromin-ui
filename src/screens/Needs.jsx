import React, { Component } from 'react';
import NeedCardList from '../components/needs/List';
import Api from '../api';
import Campaign from '../models/Campaign';

export class Needs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needs: [],
      need: null,
      donation: null
    }
  }

  componentWillMount() {
    const me = this;
    Api.getActiveCampaigns().then(res => {
      const needs = res.content.map(n => new Campaign(n.id, n.caseId, n.title, n.description, n.campaignType, n.fundsNeeded, n.fundsReceived, n.publicFlag, n.dateCreated));
      me.setState({needs});
    }).catch(err => console.dir(err));
  }

  handleSelectCard(need) {
    this.setState({need});
  }

  render() {
    return (
      <div>
        <section className="metro-hero">
          <h2 className="metro-hero__title">People Helping People</h2>
        </section>
        <section className="metro-need-section">
          <h2 className="metro-need-title">How can you help?</h2>
          <NeedCardList needs={this.state.needs} selectNeed={this.handleSelectCard.bind(this)} />
        </section>
      </div>
    )
  }
}

export default Needs;