import React from 'react';
import { RequestItem } from './RequestItem';

export function RequestList (props) {

  const listItems = () => {
    if(props.requests.length > 0) {
      return this.props.requests.map(item => (
        <RequestItem item={item} key={item.id} />
      ))
    }
    return <li>No requests pending</li>
  }

  return (
    <ul>
      { listItems() }
    </ul>
  )
}

export default RequestList;