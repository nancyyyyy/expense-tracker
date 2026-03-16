const TotalIncomeExpense = ({transactions})=>{
    return (
        <div className="income-expense-container">
            <div className="income-container">
              <div className="income-head"><h2>Income</h2></div> 
                <p className="income-amount">
                    +${transactions.filter((t)=> t.amount>0)
                    .reduce((acc,t)=>acc + t.amount ,0)
                    .toFixed(2)}
                </p> 
            </div>

            <div className="expense-container">
              <div className="expense-head"><h2>Expense</h2></div> 
                <p className="expense-amount">
                    ${transactions.filter((t)=> t.amount<0)
                    .reduce((acc,t)=>acc + t.amount , 0)
                    .toFixed(2)}
                </p> 
            </div>
        </div>
    )
}

export default TotalIncomeExpense;