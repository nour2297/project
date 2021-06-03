import React from "react";
import { useDispatch } from "react-redux";
import { deletePersonnel } from "../../Redux/PersonnelRedux/actions";
import EditPersonnel from "./EditPersonnel";
const PersonnelCard = ({ personnel }) => {
  const dispatch = useDispatch();
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
          <EditPersonnel oldpersonnel={personnel}></EditPersonnel>
          <button
            className="btn-personnel"
            onClick={() => dispatch(deletePersonnel(personnel.matricule))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonnelCard;
