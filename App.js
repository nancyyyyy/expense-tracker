import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Header from './Components/Header';
import Balance from './Components/Balance';
import TotalIncomeExpense from './Components/TotalIncomeExpense';
import AddTransaction from './Components/AddTransaction';
import TransactionHistory from './Components/TransactionHistory';

const App = () =>{

 const [transactions, setTransactions] = useState([]);

 const addTransaction = (transaction)=>{
    setTransactions([...transactions, transaction]);
 }

const deleteTransaction=(id) =>{
    return setTransactions(transactions.filter((t)=>t.id != id));
}

 console.log(transactions);

    return <div className="main-container">
        <Header/>
        <Balance transactions={transactions}/>
        <TotalIncomeExpense transactions={transactions}/>
        <AddTransaction addTransaction={addTransaction}/>
        <TransactionHistory transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);



