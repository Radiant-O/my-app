import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     newTitle: "",
    //     newAmount: "",
    //     newDate: ""
    // })

    const changeTitleHandler = (e)=> {
        setNewTitle(e.target.value);
        // setUserInput({
        //     ...userInput, 
        //     newTitle: e.target.value,
        // });
        //This function is actually more preferred in a situation where there's multiple useState cases, so the memory wont be lost.
        //And its useful when you depend on the previous state to update the variable.
        // setUserInput((prevState) => {
        //     return {
        //     ...prevState, 
        //     newTitle: e.target.value,
        //     };
        // });
    }
    const changeAmountHandler = (e)=> {
        setNewAmount(e.target.value);
        // setUserInput({
        //     ...userInput, 
        //     newAmount: e.target.value,
        // });
    }
    const changeDateHandler = (e)=> {
        setNewDate(e.target.value);
        // setUserInput({
        //     ...userInput, 
        //     newDate: e.target.value,
        // });
    }

    const submitFormHandler = (e) => {
        e.preventDefault();
        
        const submittedForm = {
            title: newTitle,
            date: new Date(newDate),
            amount: newAmount
        }

        props.onSubmitForm(submittedForm);
        // console.log(submittedForm)
        setNewTitle('')
        setNewAmount('')
        setNewDate('')
    }

    return(
        <form onSubmit={submitFormHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={newTitle} onChange={changeTitleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={newAmount} onChange={changeAmountHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2028-12-31' value={newDate} onChange={changeDateHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;