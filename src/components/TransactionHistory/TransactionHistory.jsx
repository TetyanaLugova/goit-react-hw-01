import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr className={css.transactionTh}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.transactionTd} key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
