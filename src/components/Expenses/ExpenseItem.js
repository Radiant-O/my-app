import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItems(props) {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    // const month = props.date.toLocaleString('en-US', {month: 'long'});
    // const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    // const year = props.date.getFullYear();
    const getButton = () => {
        setTitle('New Title');
        setAmount(600)
        console.log('Button Clicked')
    }

    return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${amount}</div>
        </div>
        <button onClick={getButton}>Change Title</button>
    </div>
  
    );
}

export default ExpenseItems;