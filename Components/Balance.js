import React from 'react';


const Balance = ({transactions}) =>{
    const totalBalance = transactions.reduce((acc, t)=>acc + t.amount,0);
    return (
        <div className="balance-container">
            <div className="balance-heading">Current Balance</div>
            <div className="balance-amount">${totalBalance.toFixed(2)}</div>
        </div>
    )
}

export default Balance;