import Expense from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
// import './App.css';

function App() {

  const expenses = [
    { id: 'e1', title: 'Car Insurance1', amount: 1294.67, date: new Date(2023, 3, 25) },
    { id: 'e2', title: 'Car Insurance2', amount: 2294.67, date: new Date(2022, 3, 25) },
    { id: 'e3', title: 'Car Insurance3', amount: 3294.67, date: new Date(2023, 3, 25) },
    { id: 'e4', title: 'Car Insurance4', amount: 4294.67, date: new Date(2023, 3, 25) },
    { id: 'e5', title: 'Car Insurance6', amount: 5294.67, date: new Date(2022, 1, 25) },
  ];
  console.log(expenses[0].date);

  const addExpenseHandler = (expense) => {
    console.log('grgr');
    console.log(expense);

  }

  return (
    <div className="App">

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense data={expenses} />

    </div>
  );

}

export default App;
