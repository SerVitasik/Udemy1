import Expense from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React from 'react';
// import './App.css';

const EXPENSES = [
  { id: 'e1', title: 'Car Insurance1', amount: 1294.67, date: new Date(2020, 3, 25) },
  { id: 'e2', title: 'Car Insurance2', amount: 2294.67, date: new Date(2020, 3, 25) },
  { id: 'e3', title: 'Car Insurance3', amount: 3294.67, date: new Date(2021, 3, 25) },
  { id: 'e4', title: 'Car Insurance4', amount: 4294.67, date: new Date(2023, 3, 25) },
  { id: 'e5', title: 'Car Insurance6', amount: 5294.67, date: new Date(2022, 1, 25) },
];

const USERS = [
  { login: 'Yobik', password: '12345' },
  { login: 'Yobik', password: '12345' },
]

function App() {

  let [expenses, setExpenses] = React.useState(EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => { return [expense, ...prevExpenses] });
  }

  return (
    <div className="App">

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense data={expenses} />

    </div>
  );

}

export default App;
