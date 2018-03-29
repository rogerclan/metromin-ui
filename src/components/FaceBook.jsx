import React from 'react';

const FaceBook = (props) => {
  return (
    <div className="metro-fb-window">
      <button className="metro-fb-window-close-btn" onClick={ev => props.closeWindow()}><i className="fa fa-times"></i></button>
      <h3 className="metro-fb-title">Challenge your friends on</h3>
      <p className="metro-fb">
        <i className="fa fa-facebook-square"></i>
      </p>
      <p  className="metro-fb-share">
        <button className="metro-btn metro-fb-share-btn" onClick={ev => props.closeWindow()}>Challenge</button>
      </p>
    </div>
  )
}

export default FaceBook;