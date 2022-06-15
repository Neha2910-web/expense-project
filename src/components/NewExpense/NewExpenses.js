import react , {useState} from 'react';
import ExpenseForm from './ExpenseForm'; 
import './NewExpenses.css'

const NewExpense = (props) =>{
   const[isEditing ,setIsEditing]= useState(false)
const saveExpenseDataHandler =(enteredExpenseData)=>{
    const expenseData ={
        ...enteredExpenseData,
        id: Math.random().toString()
    };
   props.onAddExpense(expenseData);
}

const startEditingHandle = () =>{

    setIsEditing(true);
}
const stopEditingHAndle = () => {
    setIsEditing(false);
};


return( <div className='new-expense'>
    {!isEditing && (<button onClick={startEditingHandle}>Add New Expenses</button>)}
    {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
    onCancel={stopEditingHAndle}/>)}
</div>
);
}
export default NewExpense;