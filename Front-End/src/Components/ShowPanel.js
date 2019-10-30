import React from "react";

const ShowPanel = () => {
  // If there is no person selected from the sidebar this component should render an empty div with the id "show-panel", else it should render the format below with the selected person's info
  return (
    <div id="show-panel">
      <button className="delete-button"> Delete </button>
      <img className="show-image" src="" alt="" />
      <h1> The person's name goes here</h1>
      <span>The person's bio should REPLACE this span tag</span>
    </div>
  );
};

export default ShowPanel;
