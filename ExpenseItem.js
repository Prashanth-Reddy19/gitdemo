
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

import React, { useState } from 'react';


function ExpenseItem(props) {

    const [amount, setAmount] = useState(props.amount)
    function clickHandler() {
        setAmount('100')
        console.log(amount)
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}

export default ExpenseItem;