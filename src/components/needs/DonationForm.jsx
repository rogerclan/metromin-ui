import React, { Component } from 'react';

export class DonationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      account:'',
      cvv: '',
      month: '',
      year: '',
      amount: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleDonateClick = this.handleDonateClick.bind(this);
  }

  handleChange(field, value) {
    let change = {};
    change[field] = value;
    this.setState(change);
  }

  handleDonateClick() {
    this.props.donateClicked(this.props.campaign.id, this.state.name, this.state.amount);
  }

  render() {
    return (
      <form className="metro-need-donation-form">
        <div className="metro-form-group">
          <label>Name on Card</label>
          <input type="text"  value={this.state.name} onChange={ev => this.handleChange('name', ev.target.value)} />
        </div>
        <div className="metro-form-group">
          <label>Email</label>
          <input type="email"  value={this.state.email} onChange={ev => this.handleChange('email', ev.target.value)} />
        </div>
        <div className="metro-form-group">
          <label>Amount</label>
          <input type="number"  value={this.state.amount} onChange={ev => this.handleChange('amount', ev.target.value)} />
        </div>
        <div className="metro-form-group metro-form-group-cc">
          <div>
            <label>Card Number</label>
            <input type="text"  value={this.state.account} onChange={ev => this.handleChange('account', ev.target.value)} />
          </div>
          <div>
            <label>CVV</label>
            <input placeholder="###" type="text"  value={this.state.cvv} onChange={ev => this.handleChange('cvv', ev.target.value)} />
          </div>
        </div>
        <div className="metro-form-group metro-form-group-expiration">
          <div>
            <label>Month</label>
            <input placeholder="MM" type="text"  value={this.state.month} onChange={ev => this.handleChange('month', ev.target.value)} />
          </div>
          <div>
            <label>Year</label>
            <input placeholder="YY" type="text"  value={this.state.year} onChange={ev => this.handleChange('year', ev.target.value)} />
          </div>
        </div>
        <div className="metro-btn-bar"><button className="metro-btn metro-btn-donate" onClick={ev => this.handleDonateClick()} >Donate</button></div>
      </form>
    )
  }
}

export default DonationForm;