import React, { Component } from 'react';
import Api from '../../api';
import CampaignTypes from '../CampaignTypes';

export default class CampaignForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      caseId: props.userCase.id,
      title: '',
      description: '',
      campaignType: '',
      fundsNeeded: 0,
      fundsReceived: 0,
      publicFlag: true
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleCampaignTypeChange = this.handleCampaignTypeChange.bind(this);
    this.handleFundsNeededChange = this.handleFundsNeededChange.bind(this);
  }

  handleTitleChange(title) {
    this.setState({title})
  }

  handleDescriptionChange(description) {
    this.setState({description})
  }

  handleCampaignTypeChange(campaignType) {
    this.setState({campaignType})
  }

  handleFundsNeededChange(fundsNeeded) {
    this.setState({fundsNeeded: parseInt(fundsNeeded, 10)})
  }

  handleSubmitCampaign(ev) {
    const me = this;
    const { caseId, title, description, campaignType, fundsNeeded, fundsReceived, publicFlag } = this.state;
    ev.preventDefault();
    Api.addCampaign(caseId, title, description, campaignType, fundsNeeded, fundsReceived, publicFlag).then(() => {
      me.props.closeForm();
    }).catch(err => {
      console.dir(err);
    });
  }

  render() {
    return (
      <form className="metro-vol-need__form">
        <label className="metro-label">Title</label>
        <input className="metro-input" type="text" onChange={ev => this.handleTitleChange(ev.target.value)} value={this.state.title}/>
        <label className="metro-label">Description</label>
        <textarea className="metro-textarea" onChange={ev => this.handleDescriptionChange(ev.target.value)} value={this.state.description}/>
        <label className="metro-label">Type</label>
        <CampaignTypes change={this.handleCampaignTypeChange} value={this.state.campaignType}/>
        <label className="metro-label">Amount</label>
        <input className="metro-input" type="number" onChange={ev => this.handleFundsNeededChange(ev.target.value)} value={this.state.fundNeeded}/>
        <div className="metro-btn-bar"><button className="metro-vol-need__btn" onClick={ev => this.handleSubmitCampaign(ev)}>Submit</button></div>
      </form>
    )
  }
}