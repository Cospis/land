import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const Events = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="events" id="events">
      <div className="title">
        <h3>Events by Industries </h3>
      </div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};
export default Events;
