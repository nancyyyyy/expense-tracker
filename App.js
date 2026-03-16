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
 console.log(transactions);

    return <div className="main-container">
        <Header/>
        <Balance transactions={transactions}/>
        <TotalIncomeExpense transactions={transactions}/>
        <AddTransaction addTransaction={addTransaction}/>
        <TransactionHistory transactions={transactions} />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);



