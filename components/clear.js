import React from "react";

const ClearBtn = props => {
  return (
    <div className="clear-btn" onClick={props.handleClear}>
      {props.children}
    </div>
  );
};

export default ClearBtn;
