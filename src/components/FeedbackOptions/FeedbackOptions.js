import React from 'react';
// import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <button
        className={s.good}
        type="button"
        name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>

      <button
        className={s.neutral}
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>

      <button
        className={s.bad}
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </>
  );
}

// FeedbackOptions.propTypes = {
//   onLeaveFeedback: PropTypes.func,
// };

export default FeedbackOptions;
