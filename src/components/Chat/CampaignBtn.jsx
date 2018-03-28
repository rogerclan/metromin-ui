import React from 'react';

const CampaignBtn = (props) => {
  return (
    <div className="metro-chat-campaign">
      <button className="metro-chat-campaign-btn" onClick={ev => props.startCampaign()}>Start Campaign</button>
    </div>
  )
}

export default CampaignBtn;