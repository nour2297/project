import React from "react";
import { PersonnelsData } from "../../data/personnel";
import PersonnelCard from "./PersonnelCard";
import { useSelector, useDispatch } from "react-redux";
const Personnels = () => {
  const personnellist = useSelector((state) => state.listpersonnel);
  return (
    <div className="personnel-list">
      {personnellist.map((el) => (
        <PersonnelCard personnel={el}></PersonnelCard>
      ))}
    </div>
  );
};

export default Personnels;
