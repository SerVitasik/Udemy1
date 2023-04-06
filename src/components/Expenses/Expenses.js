import React from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';

function Expense({ data }) {

    const [filteredYear, setSelectedYear] = React.useState('2020');

    const selectYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    let filteredExpenses = data.filter((expense) => expense.date.getFullYear().toString() === filteredYear);



    return (

        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={selectYearHandler} />
            <ExpensesList filteredExpenses={filteredExpenses} />
            {/* <ExpenseItem date={data[0].date} title={data[0].title} price={data[0].amount} />
            <ExpenseItem date={data[1].date} title={data[1].title} price={data[1].amount} />
            <ExpenseItem date={data[2].date} title={data[2].title} price={data[2].amount} />
            <ExpenseItem date={data[3].date} title={data[3].title} price={data[3].amount} /> */}
        </Card>
    );
}

export default Expense;