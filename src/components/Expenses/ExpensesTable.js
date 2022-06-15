import React from 'react'
import Table from '../Table/Table';
const ExpensesTable=(props)=> {
    const tableDataPoints = [
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'JUl',value:0},
        {label:'Aug',value:0},
        {label:'Sept',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},

        
    ];
    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        tableDataPoints[expenseMonth].value += expense.amount; 
    }
  return <Table dataPoints = {tableDataPoints}/>;
}
export default ExpensesTable;