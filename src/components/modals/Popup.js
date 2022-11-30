import React, { useState } from "react";
import "react-bootstrap";
import "./popup.css";

function Popup({ open, close }) {
  const [data, setData] = useState();
  console.log(data);

  const Change = (event) => {
    if (event.key === 'Enter')
    setData(event.target.value);
  };

  if (!open) return null;
  return (
    <>
      <div className="popup-container">
        <div className="popup-body">
          <form>
            <p onClick={close}>x</p>
            <input
              value={data}
              onClick={Change}
              //page refresh when enter
              onKeyDown={Change}
              placeholder="task add "
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Popup;
