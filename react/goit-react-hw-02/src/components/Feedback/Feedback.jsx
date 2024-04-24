import styles from "./Feedback.module.css";

function Feedback({ good, bad, neutral, total, positive }) {
  return (
    <div className={styles.feedback}>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positive} %</li>
      </ul>
    </div>
  );
}

export default Feedback;
