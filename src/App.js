import React, { useState } from "react";
import Popup from "./components/modals/Popup";
import "./App.css";

function App() {
  const [Modelopen, setModelOpen] = useState(false);

  return (
    <div className="all-div">
      <button className="button-popup" onClick={() => setModelOpen(true)}>
        Click to Open Popup
      </button>
      <Popup open={Modelopen} close={() => setModelOpen(false)} />
      {/* <div>{Popup.data}</div> */}
    </div>
  );
}
export default App;
