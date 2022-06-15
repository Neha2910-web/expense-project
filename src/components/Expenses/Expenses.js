import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import ExpensesTable from './ExpensesTable';
import ExpensesTableFilter from './ExpensesTableFilter';

import './Expenses.css';



const Expenses=(props)=> {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  const [TablefilteredYear, setTableFilteredYear] = useState('2020');

  const TablefilterChangeHandler = selectedYear => {
    setTableFilteredYear(selectedYear);
  };

  const TablefilteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === TablefilteredYear;
  })
  

  return (
    <div className='expense-control'>
    <Card className="expenses">

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    
      < ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>

        
    </Card>

    <Card className="expenses">

      <ExpensesTableFilter selected={TablefilteredYear} onChangeFilter={TablefilterChangeHandler} />
    
      < ExpensesTable expenses={TablefilteredExpenses}/>
        <ExpensesList items={TablefilteredExpenses}/>

        
    </Card>
</div>
  );
}

export default Expenses;