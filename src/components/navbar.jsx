import React, { memo } from "react";

const Navbar = memo((props) => {
    return (
        <nav className="navbar">
            <i className="navbar-logo fas fa-leaf"></i>
            <span>Habit Tracker</span>
            <span className="navbar-counter">{props.count}</span>
        </nav>
    );
});

export default Navbar;
