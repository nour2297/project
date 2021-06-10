import React, { useState } from "react";

import PersonnelCard from "./PersonnelCard";
import AddPersonnel from "./AddPersonnel";
import { useSelector } from "react-redux";

import SearchPersonnel from "./SearchPersonnel";
const Personnels = () => {
  const [searchValue, setSearchValue] = useState("");
  // handle search
  const handleSearch = (e) => setSearchValue(e.target.value);
  const personnellist = useSelector((state) => state.listpersonnel);
  return (
    <div>
      <div className="div1">
        <SearchPersonnel
          searchValue={searchValue}
          handleSearch={handleSearch}
        />
        <AddPersonnel />
      </div>
      <div className="personnel-list">
        {personnellist
          .filter(
            (per) =>
              per.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
              per.lastName.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((el) => (
            <PersonnelCard personnel={el}></PersonnelCard>
          ))}
      </div>
    </div>
  );
};

export default Personnels;
