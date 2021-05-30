import {
  ADD_PERSONNEL,
  DELETE_PERSONNEL,
  EDIT_PERSONNEL,
  SEARCH_PERSONNEL,
} from "./actionTypes";

//add personnel
export const addPersonnel = (newpersonnel) => {
  return {
    type: ADD_PERSONNEL,
    payload: newpersonnel,
  };
};
//delete personnel
export const deletePErsonnel = (matricule) => {
  return {
    type: DELETE_PERSONNEL,
    payload: matricule,
  };
};
//edit personnel
export const editPersonnel = (editedpersonnel) => {
  return {
    type: EDIT_PERSONNEL,
    payload: editedpersonnel,
  };
};
