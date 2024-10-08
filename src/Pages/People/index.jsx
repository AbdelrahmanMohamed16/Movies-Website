import React, { useContext } from "react";
import PersonCard from "../../components/PersonCard";
import { PersonsContext } from "../../components/Store/PersonsContextProvider";

export default function People() {
  let { personsData } = useContext(PersonsContext);
  return personsData
    .filter((person) => person.name && person.profile_path)
    .map((person) => <PersonCard person={person} key={person.id} />);
}
