import { useEffect, useState } from 'react';
// import Card from './Card';

import './Expenses.css';
import ExpensesFilter from './NewExpense/ExpensesFilter';
import ExpensesList from './NewExpense/ExpensesList';
import ExpensesChart from './NewExpense/ExpensesChart';



function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')
    const[expenseFiltered,setexpenseFiltered] = useState([])

    const filetrChangeHandler = selectedYear => {
        setFilteredYear(selectedYear) 
    }
    useEffect(() => {
        const filteredExpense = props.items.filter((expense) => {
          return expense.date.getFullYear().toString() === filteredYear;
        });
        setexpenseFiltered(filteredExpense)
      }, [filteredYear])
      


    return (
        <div className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filetrChangeHandler} />
           <ExpensesChart expenses={expenseFiltered}/>
           <ExpensesList items={expenseFiltered}/>

            
        </div>
    )
}

export default Expenses