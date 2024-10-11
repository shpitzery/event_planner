import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return ( 
        <div className="event-planner-container"> 
        <header>
            <h1>Welcome to Event Planner</h1>
        </header>
        <section className="description">
            <p>
                Plan and organize your events effortlessly with Event Planner.<br /> {/*React requires all tags to be explicitly closed, even self-closing ones. Therefore, in React, you should use <br /> instead of just <br>.*/}
                From birthdays to corporate meetings, we've got you covered.
            </p>

        </section>
        <section className="events_categories">

        </section>
        <section className="features">

        </section>
        <section className="testimonials">

        </section>
        <section className="contact">

        </section>
    </div>
    );
};

export default EventPlanner;
