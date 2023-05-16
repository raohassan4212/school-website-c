import React, { useState } from "react";
import Back from "../common/back/Back";
import Heading from "../common/heading/Heading";
import "./event.css";

const Events = () => {
  const events = [
    {
      title: "Hawan",
      date: "Apr 5",
      location: "new session start",
    },
    {
      title: "Vaisakhi--Dance Activity",
      date: "Apr 14",
      location: "Pre primary classes",
    },
    {
      title: "Budh Purnima",
      date: "May 5",
      location: "-",
    },
    {
      title: "Budh Purnima",
      date: "May 9",
      location: "Hindi Poem Competition",
    },
    {
      title: "Mother Day",
      date: "May 13",
      location: "Activities of Mother",
    },
    {
      title: "Guru Purnima",
      date: "Jul 3",
      location: "Activities of Mother",
    },
    {
      title: "Group dance activity",
      date: "Aug 15",
      location: "3rd to 5th",
    },
    {
      title: "Rakhi Making Competition",
      date: "Aug 29",
      location: "4th to 6th classes",
    },
    {
      title: "Speech Competition",
      date: "Sep 5",
      location: "6th to 8th class",
    },
    {
      title: "Speech Competition",
      date: "Sep 5",
      location: "6th to 8th class",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };
  return (
    <div>
      <Back title="Events" />
      <Heading title="New Events 2023-24" />
      <div className="event-list">
        {events.map((event, index) => (
          <div
            key={index}
            className={`event-items even ${
              selectedEvent === event ? "selected" : ""
            }`}
            onClick={() => handleEventClick(event)}
          >
            <div className="event-date">
              {new Date(event.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </div>
            <div className="event-info">
              <div className="event-title">{event.title}</div>
              <div className="event-location">{event.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
