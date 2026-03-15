const TotalIncomeExpense = ()=>{
    return (
        <div className="income-expense-container">
            <div className="income-container">
              <div className="income-head"> <h2>Income</h2> </div> 
                <p className="income-amount">$0.00</p> 
            </div>

            <div className="expense-container">
              <div className="expense-head"> <h2>Expense</h2> </div> 
                <p className="expense-amount"> $0.00 </p> 
            </div>
        </div>
    )
}

export default TotalIncomeExpense