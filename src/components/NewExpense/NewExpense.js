import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense({ onAddExpense }) {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        onAddExpense(expenseData);
    }

    const [isOpen, setIsOpen] = React.useState(false);

    const onAddHandlerOpen = () => {
        setIsOpen(true);
    }

    const onAddHandlerCancel = () => {
        setIsOpen(false);
    }


    return (
        <div className="new-expense">
            {(isOpen === true) ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onAddHandlerCancel={onAddHandlerCancel} /> : <button onClick={onAddHandlerOpen}>Add New Expense</button>}
        </div>
    );
}

export default NewExpense;