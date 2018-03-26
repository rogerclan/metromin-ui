import React from 'react';

export function RequestItem (props) {

  return (
    <li>
      <h3>props.item.contact_name</h3>
      <p>props.item.message</p>
    </li>
  )
}

export default RequestItem;