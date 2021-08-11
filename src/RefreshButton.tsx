import React from "react";

function RefreshButton(props) {
  return (
    <div className="refreshbutton">
      <button onClick={props.refreshImage}>Click for a new moment</button>
    </div>
  );
}

export default RefreshButton;
