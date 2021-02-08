import React, { useState } from "react";
import "./App.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

function App() {
    const [habits, setHabits] = useState([
        { id: 1, name: "guitar", count: 0 },
        { id: 2, name: "bass", count: 0 },
        { id: 3, name: "drum", count: 0 },
    ]);

    const handleHabitAdd = (habitName) => {
        console.log(`habit add: ${habitName}`);

        const newHabits = [
            ...habits,
            { id: Date.now(), name: habitName, count: 0 },
        ];

        setHabits(newHabits);
    };

    const handleHabitPlus = (habit) => {
        console.log(`habit plus: ${habit.name}`);

        const newHabits = habits.map((item) => {
            if (item.id === habit.id) {
                return { ...habit, count: habit.count + 1 };
            }
            return item;
        });

        setHabits(newHabits);
    };

    const handleHabitMinus = (habit) => {
        console.log(`habit minus: ${habit.name}`);

        const newHabits = habits.map((item) => {
            if (item.id === habit.id) {
                const count = habit.count - 1;
                return { ...habit, count: count < 0 ? 0 : count };
            }
            return item;
        });

        setHabits(newHabits);
    };

    const handleHabitRemove = (habit) => {
        console.log(`habit remove: ${habit.name}`);

        const newHabits = habits.filter((item) => item.id !== habit.id);
        setHabits(newHabits);
    };

    const handleHabitReset = () => {
        console.log(`habit reset`);

        const newHabits = habits.map((item) => ({ ...item, count: 0 }));
        setHabits(newHabits);
    };

    return (
        <>
            <Navbar count={habits.filter((item) => item.count > 0).length} />
            <Habits
                habits={habits}
                handleHabitPlus={handleHabitPlus}
                handleHabitMinus={handleHabitMinus}
                handleHabitRemove={handleHabitRemove}
                handleHabitReset={handleHabitReset}
                handleHabitAdd={handleHabitAdd}
            />
        </>
    );
}

export default App;
