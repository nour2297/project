import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addPersonnel } from "../../Redux/PersonnelRedux/actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AddPersonnel = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  // const [name, setName] = useState("");
  // const [imageUrl, setImageURL] = useState("");
  // const [date, setDate] = useState("");
  // const [rate, setRate] = useState(1);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    image: "",
    firstName: "",
    lastName: "",
    dateBirth: "",
    phone: "",
    mail: "",
    adress: "",
    soldeCongés: "",
  });
  // handle change in the form input
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button className="add-personnel-btn " onClick={openModal}>
        Add Personnel
      </button>

      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let newPersonnel = {
              ...form,
              matricule: Math.random(),
            };
            dispatch(addPersonnel(newPersonnel));

            closeModal();
          }}
        >
          <label> First Name</label>
          <input
            type="text"
            value={form.firstName}
            name="firstName"
            onChange={handleChange}
            // required
          />

          <label> Last Name</label>
          <input
            type="text"
            value={form.lastName}
            name="lastName"
            onChange={handleChange}
            // required
          />
          <label> Date of Birth</label>
          <input
            type="date"
            value={form.dateBirth}
            name="dateBirth"
            onChange={handleChange}
            // required
          />

          <label> Phone number </label>
          <input
            type="text"
            value={form.phone}
            name="phone"
            onChange={handleChange}
            // required
          />
          <label> Mail </label>
          <input
            type="text"
            value={form.mail}
            name="mail"
            onChange={handleChange}
            // required
          />
          <label> Adress</label>
          <input
            type="text"
            value={form.adress}
            name="adress"
            onChange={handleChange}
            // required
          />
          <label>Photo</label>
          <input
            type="url"
            value={form.image}
            name="image"
            onChange={handleChange}
            // required
          />
          <label>Vacation pay</label>
          <input
            type="number"
            value={form.soldeCongés}
            name="soldeCongés"
            onChange={handleChange}
            // required
          />
          <div>
            <div>
              <button className="btn btn-confirm" type="submit">
                Add
              </button>
              <button className="btn btn-cancel" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddPersonnel;
