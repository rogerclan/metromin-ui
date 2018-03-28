import React from 'react';
import model from '../models/CaseTypes';

export function CaseTypes(props) {
  let options = () => {
    return model.map((caseType, i) => (
      <option key={i} value={caseType}>{caseType}</option>
    ))
  }

  return (
    <select className="metro-input metro-input-select" value={props.value} onChange={ev => props.change(ev.target.value)} required>
      {options()}
    </select>
  )
}

export default CaseTypes;