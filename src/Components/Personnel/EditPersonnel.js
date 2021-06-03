import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editPersonnel } from "../../Redux/PersonnelRedux/actions";

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
const EditPersonnel = ({ oldpersonnel }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  //   const [edited, setEdited] = useState(oldMovie)
  // const [name, setName] = useState("");
  // const [imageUrl, setImageURL] = useState("");
  // const [date, setDate] = useState("");
  // const [rate, setRate] = useState(1);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    matricule: oldpersonnel.matricule,
    image: oldpersonnel.image,
    firstName: oldpersonnel.firstName,
    lastName: oldpersonnel.lastName,
    dateBirth: oldpersonnel.dateBirth,
    phone: oldpersonnel.phone,
    mail: oldpersonnel.mail,
    adress: oldpersonnel.adress,
    soldeCongés: oldpersonnel.soldeCongés,
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
      <button className="btn-personnel" onClick={openModal}>
        Edit
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

            dispatch(editPersonnel(form));
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
          <label> Date of Birth </label>
          <input
            type="date"
            value={form.dateBirth}
            name="dateBirth"
            onChange={handleChange}
            // required
          />

          <label> Phone Number</label>
          <input
            type="text"
            value={form.phone}
            name="phone"
            onChange={handleChange}
            // required
          />
          <label> Mail</label>
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
          <div>
            <button className="btn btn-primary" type="submit">
              Edit
            </button>
            <button className="btn btn-danger" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditPersonnel;
