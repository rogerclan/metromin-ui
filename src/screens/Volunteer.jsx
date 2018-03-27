import React, { Component } from 'react';
import { RequestList } from '../components/volunteer/RequestList';

export class Voulenteer extends Component {
  constructor(props) {
    super(props)
    this.state={
      requests:[]
    }
  }

  render() {

    return (
      <div>
        <section className="metro-vol-request-list">
          <h3>Requests</h3>
          <RequestList requests={this.state.requests}/>
        </section>
        <div className="metro-vol-container">
          <section className="metro-vol-chat">
            <h3>Chats</h3>
            <ul>
              <li>
                No current chats
              </li>
            </ul>
          </section>
          <section className="metro-vol-need">
            <form className="metro-vol-need__form">
              <label className="metro-label">Title</label>
              <input className="metro-input" type="text" />
              <label className="metro-label">Description</label>
              <input className="metro-input" type="text" />
              <label className="metro-label">Amount Requested</label>
              <input className="metro-input" type="number" />
              <label className="metro-label">Request Type</label>
              <select className="metro-select">
                <option>Financial</option>
              </select>
              <div className="metro-btn-bar">
                <button className="metro-btn">Create Need</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default Voulenteer;