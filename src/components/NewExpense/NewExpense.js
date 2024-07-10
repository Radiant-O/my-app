import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    const saveExpenseFormHandler = (submittedExpenseData) => {
        const expenseData = {
            ...submittedExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onSaveExpense(expenseData)
    }

    
    return( 
        <div className='new-expense'>
            <ExpenseForm onSubmitForm={saveExpenseFormHandler} />
        </div>
    )
};

export default NewExpense;