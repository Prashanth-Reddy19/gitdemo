import React from 'react';
// import './ExpensesFilter.css';

const ExpensesFilter=(props) => {
    const dropdownChangeHandler=(event) => {
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'></div>
            <label>Filter by year</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    )
}

export default ExpensesFilter;