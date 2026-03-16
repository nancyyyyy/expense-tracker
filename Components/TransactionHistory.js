import React from 'react';

const TransactionHistory = (props) => {
  const {transactions, deleteTransaction} = props;

  return (
    <div className='transaction-history'>
      {<h3>Transaction History</h3>}
      {transactions.length=== 0 && <h5>No transactions</h5>}
      <ul className='transaction-list'>
        {transactions.map((transaction) => (
          <li 
            key={transaction.id} 
            className={`transaction-item ${transaction.amount > 0 ? 'income' : 'expense'}`}
          >
            <div className='transaction-content'>
              <span className='transaction-text'>{transaction.text}</span>
              <span className={`transaction-amount ${transaction.amount > 0 ? 'income' : 'expense'}`}>
                {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
              </span>
            </div>
            <button 
              className='delete-btn'
              onClick={() => deleteTransaction(transaction.id)}
              title='Delete transaction'
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;