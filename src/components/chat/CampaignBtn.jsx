import React from 'react';

const CampaignBtn = (props) => {
  return (
    <div className="metro-chat-campaign">
      <p className="metro-chat-user-info">
        {props.userCase.contactName}<br/>
        {props.userCase.location}<br/>
        {props.userCase.message}<br/>
      </p>
      <button className="metro-chat-campaign-btn" onClick={() => props.startCampaign()}>Start Campaign</button>
    </div>
  )
}

export default CampaignBtn;