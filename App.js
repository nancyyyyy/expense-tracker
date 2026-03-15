import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Balance from './Components/Balance';
import TotalIncomeExpense from './Components/TotalIncomeExpense';
import AddTransaction from './Components/AddTransaction';
import TransactionHistory from './Components/TransactionHistory';

const App = () =>{
    return <div className="main-container">
        <Header/>
        <Balance/>
        <TotalIncomeExpense/>
        <AddTransaction/>
        <TransactionHistory/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);



