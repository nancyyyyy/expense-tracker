import React, {useState} from 'react';


const AddTransaction =(props)=>{

    const { addTransaction } = props;

    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const onSubmit = (e)=>{
        e.preventDefault();

        const newTransaction={
            id: Math.random(),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setText("");
        setAmount("");
    }

    return (
        <div className='add-transaction-section'>
        <form onSubmit={onSubmit}>
        <h2>Add New Transaction</h2>
        <div className='form-group'>
            <label>Description</label>
            <input 
                type='text'
                value={text} 
                onChange={(e)=>setText(e.target.value)} 
                placeholder='e.g., Grocery, Salary...'
                required
            />
        </div>
        <div className='form-group'>
            <label>Amount</label>
            <p>Negative for expense (-), Positive for income (+)</p>
            <input 
                type='number'
                value={amount} 
                onChange={(e)=>setAmount(e.target.value)} 
                placeholder='0.00'
                required
                step='0.01'
            />
        </div>
        <button type='submit' className='submit-btn'>✓ Add Transaction</button>
        </form>
    </div>
    )
}

export default AddTransaction;