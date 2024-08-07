import React from 'react';
import styles from './FeedbackList.module.css';

const feedbacks = [
  { name: 'Jenny Wilson', stars: 5, comment: 'The food was excellent and so was the service.' },
  { name: 'Dianne Russell', stars: 4, comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread.' },
  { name: 'Devon Lane', stars: 5, comment: 'Normally wings are wings, but theirs are lean meaty and tender.' },
];

const FeedbackList = () => {
  return (
    <div className={styles.feedbackList}>
      <h2>Customer's Feedback</h2>
      {feedbacks.map(feedback => (
        <div key={feedback.name} className={styles.feedbackItem}>
          <strong>{feedback.name}</strong>
          <div>{'⭐'.repeat(feedback.stars)}</div>
          <p>{feedback.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
