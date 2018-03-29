import React from 'react';

const NeedCard = (props) => {
  const divStyle = {
    height: (props.need.fundsNeeded > 0) ? (props.need.fundsRecieved / props.need.fundsNeeded * 100).toFixed(0) + '%': '100%'
  }


  return (
    <li className="metro-need-card" onClick={ev => props.selectCard(props.need)}>
      <aside className="metro-need-card-graph">
        <div className="metro-need-card-bar"><div style={divStyle} className="metro-need-card-bar-fill"></div></div>
      </aside>
      <article className="metro-need-card-info">
        <h4 className="metro-card-title">{props.need.title}</h4>
        <h5 className="metro-card-subtitle">{props.need.campaignType}</h5>
      </article>
    </li>
  )
}

export default NeedCard;