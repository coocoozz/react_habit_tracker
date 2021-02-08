import React, { memo, useRef } from "react";

const HabitAddForm = memo((props) => {
    const formRef = useRef(null);
    const inputRef = useRef(null);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const habitName = inputRef.current.value;
        habitName && props.handleHabitAdd(habitName);
        formRef.current.reset();
    };

    return (
        <form
            ref={formRef}
            className="habit-add-form"
            onSubmit={handleOnSubmit}
        >
            <input
                ref={inputRef}
                type="text"
                className="habit-input"
                placeholder="Habit"
            />
            <button className="habit-add">Add</button>
        </form>
    );
});

export default HabitAddForm;
