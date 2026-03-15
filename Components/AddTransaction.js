import React from 'react';


const AddTransaction =()=>{
    return (
    <div className='add-transaction-section'>
    <h2>Add new transaction</h2>
    <div>
        <p>Text</p>
        <p><input placeholder='Enter Text'></input></p>
    </div>
    <div>
        <p>Amount</p>
        <p>Negative - expense, Positive - income</p>
        <p><input placeholder='Enter amount'></input></p>
    </div>
    <button>Add transaction</button>
    </div>
    )
}

export default AddTransaction