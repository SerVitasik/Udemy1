import React from "react";

import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

function ExpensesList({ filteredExpenses }) {

    if (filteredExpenses.length === 0) {
        return (<h2 className="expenses-list__fallback">Haven't expenses in this year</h2>);
    }

    return (
        <ul className="expenses-list">
            {filteredExpenses.map((expense) => <ExpenseItem key={expense.id} date={expense.date} title={expense.title} price={expense.amount} />)}
        </ul>
    );
}

export default ExpensesList;