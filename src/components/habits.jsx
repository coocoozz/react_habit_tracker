import React, { memo } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

const Habits = memo((props) => {
    return (
        <div className="habits">
            <HabitAddForm handleHabitAdd={props.handleHabitAdd} />
            <ul>
                {props.habits.map((habit) => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        handleHabitPlus={props.handleHabitPlus}
                        handleHabitMinus={props.handleHabitMinus}
                        handleHabitRemove={props.handleHabitRemove}
                    />
                ))}
            </ul>
            <button className="habits-reset" onClick={props.handleHabitReset}>
                Reset All
            </button>
        </div>
    );
});

export default Habits;
