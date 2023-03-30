import React from "react";
import { Link } from "react-router-dom";


export const Services = () => {
  return (
    <div className="services">
      <Link to="/audio">
        <h1 to="/audio">Here Audios</h1> 
      </Link>
     
    </div>
  );
};
 
export const ServicesOne = () => {
  return (
    <div className="services">
      <h1>Audio Books</h1>
    </div>
  );
};
 
export const ServicesTwo = () => {
  return (
    <div className="services">
      <h1>Songs</h1>
    </div>
  );
};
 
export const ServicesThree = () => {
  return (
    <div className="services">
      <h1>Preach</h1>
    </div>
  );
};