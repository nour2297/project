import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editPersonnel, ValidCongés } from "../../Redux/PersonnelRedux/actions";
import { VALID_CONGES } from "../../Redux/PersonnelRedux/actionTypes";
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
const ValidVacation = ({ oldper }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newSoldeCongés, setNewSoldeCongés] = useState(oldper.soldeCongés);
  const dispatch = useDispatch();
  // handle submit
  const handlesubmit = (e) => {
    e.preventDefault();
    const editSoldeCongés = { ...oldper, soldeCongés: newSoldeCongés };
    dispatch(ValidCongés(editPersonnel));
    closeModal();
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button className="add-personnel-btn" onClick={openModal}>
        Valid vacation
      </button>
      <Modal
        id="mdl"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handlesubmit}>
          <input
            type="number"
            value={newSoldeCongés}
            onChange={(e) => setNewSoldeCongés(e.target.value)}
          />
          <button className=" btn btn-confirm" type="submit">
            Confirm
          </button>
          <button className=" btn btn-cancel" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ValidVacation;
