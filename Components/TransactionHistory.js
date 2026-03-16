import React from 'react';

const TransactionHistory = (props) => {
  const {transactions} = props;

  return (
    <div className='transaction-history'>
      {transactions.length > 0 && <h3>Transaction History</h3>}
      <ul className='transaction-list'>
        {transactions.map((transaction) => (
          <li 
            key={transaction.id} 
            className={`transaction-item ${transaction.amount > 0 ? 'income' : 'expense'}`}
          >
            <span className='transaction-text'>{transaction.text}</span>
            <span className={`transaction-amount ${transaction.amount > 0 ? 'income' : 'expense'}`}>
              {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;