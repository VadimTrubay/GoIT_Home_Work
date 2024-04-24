import styles from "./Options.module.css";

function Options({ updateFeedback, clearState, total }) {
  return (
    <div className={styles.options}>
      <button
        type="button"
        onClick={(e) => updateFeedback(e.target.textContent)}
      >
        good
      </button>
      <button
        type="button"
        onClick={(e) => updateFeedback(e.target.textContent)}
      >
        neutral
      </button>
      <button
        type="button"
        onClick={(e) => updateFeedback(e.target.textContent)}
      >
        bad
      </button>
      {total ? (
        <button type="button" onClick={clearState}>
          reset
        </button>
      ) : null}
    </div>
  );
}

export default Options;
