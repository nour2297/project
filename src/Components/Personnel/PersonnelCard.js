import React from "react";

const PersonnelCard = ({ personnel }) => {
  return (
    <div className="personnel-card">
      <img src={personnel.image} alt="hi" />
      <div className="div">
        <h3>
          {personnel.lastName} {personnel.firstName}
        </h3>
        <p> {personnel.dateBirth}</p>
        <p>+216 {personnel.phone}</p>
        <p>{personnel.mail}</p>
        <p>{personnel.adress}</p>
        <div>
          <button className="btn-personnel">Add</button>
          <button className="btn-personnel">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default PersonnelCard;
