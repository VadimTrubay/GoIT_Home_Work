import styles from './TransactionHistory.module.css';
import PropTypes from "prop-types";


function TransactionHistory({items}) {
  return (
    <div>
      <table className={styles.transaction}>
        <thead className={styles.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
        </thead>

        <tbody className={styles.body}>
        {items.map(({id, type, amount, currency}) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }))
};

export default TransactionHistory;
