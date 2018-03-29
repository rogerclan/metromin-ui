import React from 'react';
import DonationForm from './DonationForm';

const NeedView = (props) => {

  let classNames = 'metro-need-view';
  if (props.donation) {
    classNames += ' metro-show-donation';
  }

  return (
    <div className={classNames}>
      <button className="metro-close-btn" onClick={ev => props.closeViewClicked()}><i className="fa fa-times"></i></button>
      <article className="metro-need-view-details">
        <h4 className="metro-need-view-title">{props.campaign.title}</h4>
        <h5 className="metro-need-view-type">{props.campaign.campaignType}</h5>
        <p className="metro-need-view-description">{props.campaign.description}</p>
        <p className="metro-need-view-funds">${props.campaign.fundsReceived} of ${props.campaign.fundsNeeded} collected</p>
        <div className="metro-btn-bar"><button className="metro-btn metro-need-help-btn" onClick={ev => props.helpClicked()}>Help</button></div>
      </article>
      <DonationForm campaign={props.campaign} donateClicked={props.donateClicked}/>
    </div>
  )
}

export default NeedView;