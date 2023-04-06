import './ExpenseItem.css';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem({ title, price, date }) {
    const [changedTitle, setTitle] = React.useState(title);

    const clickHandler = () => {
        setTitle("Updated");
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{changedTitle}</h2>
                    <div className="expense-item__price">${price}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;