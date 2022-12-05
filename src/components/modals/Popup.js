/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "react-bootstrap";
import "./popup.css";

function Popup({ open, close }) {
  const [data, setData] = useState("");
  console.log(data);

  function Change (event) {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      console.log("Enter key was pressed. Run your function.");}
      else{
      setData(event.target.value)
      console.log(data)}
    }


  if (!open) return null;
  return (
    <>
      <div className="popup-container">
        <div className="popup-body">
          <form>
            <p onClick={close}>x</p>
            <input
            onKeyPress={(e) => e.key === 'Enter' && Change}
              value={data}
              onChange={Change}
              onClick={Change}
              //page refresh when enter
              onKeyDown={(e) => e.key === 'Enter' && Change}
              placeholder="task add "
            ></input>
            <p>{data} : try</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Popup;
