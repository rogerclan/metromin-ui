import React from 'react';
import CampaignTypes from '../models/CampaignTypes';

export function CampaignType(props) {
  let options = () => {
    return CampaignTypes.map((campaignType, i) => (
      <option key={i} value={campaignType}>{campaignType}</option>
    ))
  }

  return (
    <select className="metro-input metro-input-select" value={props.value} onChange={ev => props.change(ev.target.value)} required>
      {options()}
    </select>
  )
}

export default CampaignType;