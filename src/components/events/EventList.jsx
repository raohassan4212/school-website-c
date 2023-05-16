import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./event.css";

const events = [
  {
    title: "Hawan",
    date: "5",
    month: "Apr",
    location: "new session start",
  },
  {
    title: "Vaisakhi--Dance Activity",
    date: "14",
    month: "Apr",
    location: "Pre primary classes",
  },
  {
    title: "Budh Purnima",
    date: "5",
    month: "May",
    location: "-",
  },
  {
    title: "Mother Day",
    date: "13",
    month: "May",
    location: "Activities of Mother",
  },
];

const EventList = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    // setSelectedEvent(event);
  };

  const gotoEvent = () => {
    navigate("/events");
  };

  return (
    <div className="event-bg">
      <div className="event-list-container">
        <div className="event-header">
          <h2>Events 2023-24</h2>
          <h4 onClick={gotoEvent}>View All</h4>
        </div>
        <div className="event-list">
          {events.map((event, index) => (
            <div
              key={index}
              className={`event-item ${
                selectedEvent === event ? "selected" : ""
              }`}
              onClick={() => handleEventClick(event)}
            >
              <div className="event-date">
                <span class="date-big">{event.date}</span>
                {event.month}
              </div>
              <div className="event-info">
                <div className="event-title">{event.title}</div>
                <div className="event-location">{event.location}</div>
              </div>
            </div>
          ))}
        </div>
        {/* {selectedEvent && (
        <div className="event-details">
          <h3>{selectedEvent.title}</h3>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(selectedEvent.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>
            <strong>Location:</strong> {selectedEvent.location}
          </p>
        </div>
      )} */}
      </div>
    </div>
  );
};

export default EventList;
