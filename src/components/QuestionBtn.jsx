import React from 'react';

export function QuestionBtn (props) {
  return (
    <button className="metro-question-btn" onClick={ev => props.toggleQuestion()}>{props.text}</button>
  );
}

export default QuestionBtn;