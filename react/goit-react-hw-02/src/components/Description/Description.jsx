import styles from "./Description.module.css";

function Description() {
  return (
    <div className={styles.description}>
      <h1>Sip Happens Café</h1>
      <br />
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}

export default Description;
