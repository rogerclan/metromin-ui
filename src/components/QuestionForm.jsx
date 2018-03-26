import React from 'react';

export function QuestionForm (props) {
  return (
    <form className="metro-question">
      <label className="metro-question-label">What would you like to be called?</label>
      <input className="metro-question-input" itemType="text" value={props.value} onChange={ev => props.valueChanged(ev.target.val)} autoFocus />
    </form>
  );
}

export default QuestionForm;