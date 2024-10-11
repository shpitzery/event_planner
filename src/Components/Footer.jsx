// basic boilerplate for a functional component in React
import React from "react";
const Footer = () => {
    return (
        <>
        <footer>
            <p>&copy; 2024 Event Planner Inc. All rights reserved.</p>
            <nav>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="privacy">Privacy Policy</a></li>
                </ul>
            </nav>
        </footer>
        </>
    )
}
export default Footer