import './ExpensesList.css'

import ExpenseItem from './ExpenseItem';

function ExpensesList (props) {

    let expenseContent = <p>No Expenses Found</p>;

    if(props.item.length > 0 ){
        expenseContent = props.item.map( (expense) => (
                        <ExpenseItem
                            key= {expense.id} 
                            title = {expense.title} 
                            amount={expense.amount} 
                            date={expense.date} 
                        />
                ))
    }
}

export default ExpensesList;