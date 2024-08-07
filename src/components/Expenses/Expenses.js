import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })


    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList items={filteredExpenses} />
            {/* { filteredExpenses.length === 0 && <p>No Expenses Found</p>}
                {filteredExpenses.length > 0 && 
                    filteredExpenses.map( (expense) => (
                        <ExpenseItem
                            key= {expense.id} 
                            title = {expense.title} 
                            amount={expense.amount} 
                            date={expense.date} 
                        />
                ))
            } */}
            {/* <ExpenseItems title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
            <ExpenseItems title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
            <ExpenseItems title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
            <ExpenseItems title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/> */}
        </div>
    )
}

export default Expenses