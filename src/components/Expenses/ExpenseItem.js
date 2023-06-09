import './ExpenseItem.css';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem({ title, price, date }) {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${price}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;