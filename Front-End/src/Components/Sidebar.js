import React from "react";

const Sidebar = (props) => {
  // console.log(props.person)
  // debugger
  return <ul className="sidebar-ul">
    {props.people.map((person => {
        return <li key={person.id}> {person.name} </li>
      }))}
  </ul>;
};

export default Sidebar;
