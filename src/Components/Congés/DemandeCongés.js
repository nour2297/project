import React, { useState } from "react";
import "./CongésStyle.css";
import { useDispatch } from "react-redux";
import { AddConges } from "../../Redux/PersonnelRedux/actions";
const DemandeCongés = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    datedu: "",
    dateau: "",
    durée: 0,
  });
  // handle change in the form input
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  //vider tous les champs
  const handleReset = (e) => setForm({ ...form, [e.target.name]: " " });
  return (
    <div className="Congés">
      <form
        className="form-style-3"
        onSubmit={(e) => {
          e.preventDefault();
          let newCongés = {
            ...form,
            id: Math.random(),
          };
          dispatch(AddConges(newCongés));
        }}
      >
        <h1> Demande de Congés</h1>
        <label> Nom </label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        ></input>
        <label>Prénom </label>
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        ></input>
        <label>Date Du </label>
        <input
          type="date"
          name="datedu"
          value={form.datedu}
          onChange={handleChange}
        />
        <label>Date Au</label>
        <input
          type="date"
          name="dateau"
          value={form.dateau}
          onChange={handleChange}
        />
        <div className="btn-congés">
          <button type="submit" className=" btn btn-submit">
            Send
          </button>
          <button
            type="reset"
            className=" btn btn-cancel"
            onClick={handleReset}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemandeCongés;
