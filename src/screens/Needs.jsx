import React, { Component } from 'react';
import NeedCardList from '../components/needs/List';
import NeedsView from '../components/needs/View';
import Api from '../api';
import Campaign from '../models/Campaign';

export class Needs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needs: [],
      need: null,
      donation: false
    }

    this.handleDonateClicked = this.handleDonateClicked.bind(this);
    this.handleHelpClicked = this.handleHelpClicked.bind(this);
    this.handleSelectCard = this.handleSelectCard.bind(this);
    this.handleCloseViewClicked = this.handleCloseViewClicked.bind(this);
  }

  componentWillMount() {
    this.loadCampaigns();
  }

  loadCampaigns() {
    const me = this;
    Api.getActiveCampaigns().then(res => {
      const needs = res.content.map(n => new Campaign(n.id, n.caseId, n.title, n.description, n.campaignType, n.fundsNeeded, n.fundsReceived, n.publicFlag, n.dateCreated));
      me.setState({needs});
    }).catch(err => console.dir(err));
  }

  handleSelectCard(need) {
    this.setState({need});
  }

  handleHelpClicked() {
    this.setState({donation: true});
  }

  handleCloseViewClicked() {
    this.setState({donation: false, need: null});
  }

  handleDonateClicked(id, name, amount) {
    const me = this;
    me.setState({donation: false, need: null});
    Api.addContribution(id, name, amount).then(() => {
      me.loadCampaigns();
    })
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
          { this.state.need && <NeedsView closeViewClicked={this.handleCloseViewClicked} helpClicked={this.handleHelpClicked} donateClicked={this.handleDonateClicked} campaign={this.state.need} donation={this.state.donation} />}
        </section>
      </div>
    )
  }
}

export default Needs;