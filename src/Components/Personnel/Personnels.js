import React from "react";
import { PersonnelsData } from "../../data/personnel";
import PersonnelCard from "./PersonnelCard";

const Personnels = () => {
  const personnellist = PersonnelsData;
  return (
    <div className="personnel-list">
      {personnellist.map((el) => (
        <PersonnelCard personnel={el}></PersonnelCard>
      ))}
    </div>
  );
};

export default Personnels;
