import React from "react";
import { Link } from "react-router-dom";
 
export const Events = () => {
  return (
    <div className="events">
      <Link to="/https://www.youtube.com/">
      <h1>Bible</h1>
      </Link>
    </div>
  );
};
 
export const EventsOne = () => {
  return (
    <div className="events">
      <h1>Old Testimony</h1>
    </div>
  );
};
 
export const EventsTwo = () => {
  return (
    <div className="events">
      <h1>New Testimony</h1>
    </div>
  );
};