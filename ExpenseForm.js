import React, { useState } from 'react';
import './ExpenseForm.css'
 

function ExpenseForm(props) {
    const [enteredTitle,setEneteredTitle]=useState('');
    const [eneteredAmount,setEneteredAmount]=useState('');
    const [enteredDate,setEneteredDate]=useState('');

    function titleChangeHandler(event) {
        setEneteredTitle(event.target.value)
    }
    function amountChangeHandler(event) {
        setEneteredAmount(event.target.value)
    }
    function dateChangeHandler(event) {
        setEneteredDate(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault()

        const expenseData={
            title:enteredTitle,
            amount:eneteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEneteredTitle('')
        setEneteredAmount('')
        setEneteredDate('')
    }
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'value={eneteredAmount}onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-02-12' max='2022-8-19' value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
    </form>
}

export default ExpenseForm;