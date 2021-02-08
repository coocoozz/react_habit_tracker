import React, { memo } from "react";

const Habit = memo((props) => {
    const { name, count } = props.habit;

    const handleHabitPlus = () => {
        props.handleHabitPlus(props.habit);
    };

    const handleHabitMinus = () => {
        props.handleHabitMinus(props.habit);
    };

    const handleHabitRemove = () => {
        props.handleHabitRemove(props.habit);
    };

    return (
        <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-counter">{count}</span>
            <button className="habit-plus" onClick={handleHabitPlus}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-minus" onClick={handleHabitMinus}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-remove" onClick={handleHabitRemove}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );
});

export default Habit;
