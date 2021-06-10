import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ValidCongés } from "../../Redux/PersonnelRedux/actions";
import "./ValidationCongés.css";
import ValidVacation from "./ValidVacation";
const ValidationCongés = () => {
  const perCongéslist = useSelector((state) => state.listpersonnel);
  const dispatch = useDispatch();
  return (
    <div className="valid">
      {perCongéslist
        .filter((el) => el.soldeCongés > 0)
        .map((cong) => (
          <div className="congés-container">
            <img src={cong.image} alt="ff" />
            <h2>{cong.firstName}</h2>
            <h2>{cong.lastName}</h2>
            <h1>{cong.soldeCongés}</h1>
            <ValidVacation oldper={cong}></ValidVacation>
          </div>
        ))}
    </div>
  );
};

export default ValidationCongés;
