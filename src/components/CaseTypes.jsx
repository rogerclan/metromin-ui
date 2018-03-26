import React from 'react';

export function CaseType(props) {
  return (
    <select className="metro-input" value={props.value} onChange={ev => props.change(ev.target.value)} required>
      <option value=""></option>
      <option value="financial assistance">Financial Assistance</option>
      <option value="goods/services requested">Goods and Services Request</option>
      <option value="shelter request">Shelter Request</option>
      <option value="volunteer">Volunteer</option>
      <option value="other">Other</option>
    </select>
  )
}

export default CaseType;