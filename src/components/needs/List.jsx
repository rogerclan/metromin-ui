import React from 'react';
import NeedCard from './Card';

const NeedsList = (props) => {
  const needs = () => {
    if (props.needs.length > 0) {
      return props.needs.map(n => <NeedCard key={n.id} need={n} selectNeed={props.slectNeed} />);
    }
    return;
  }

  return (
    <div className="metro-need-list-wrapper">
      <h3 className="metro-need-list-title">Current Needs</h3>
      <button className="metro-need-list-right-btn"><i className="fa fa-chevron-right"></i></button>
      <ul className="metro-need-list">
        {needs()}
      </ul>
    </div>
  )
}

export default NeedsList;