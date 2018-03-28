import React from 'react';
import CaseTypes from '../models/CaseTypes';

export function CaseType(props) {
  let options = () => {
    return CaseTypes.map(caseType => (
      <option value={caseType}>caseType</option>
    ))
  }

  return (
    <select className="metro-input metro-input-select" value={props.value} onChange={ev => props.change(ev.target.value)} required>
      {options()}
    </select>
  )
}

export default CaseType;