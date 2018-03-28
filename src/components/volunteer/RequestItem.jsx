import React from 'react';

export function RequestItem (props) {

  return (
    <li className="metro-request-item">
      <h3 className="metro-request-item-header">props.item.contactName</h3>
      <h4 className="metro-request-item-subheader">props.item.caseType</h4>
      <p className="metro-request-item-msg">props.item.message</p>
      <button  className="metro-request-item-btn" onClick={ev => props.selectClick(props.item)}><i className="fa fa-comment"></i></button>
    </li>
  )
}

export default RequestItem;