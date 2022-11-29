import React, { useState } from "react";
import "./popup.css";

function Popup({open,close}) {
  const data="samet";
  console.log(data);
  if(!open) return null;
  return (
    <><p onClick={close}>popup</p>
     <div>
      <form>
        <input type="text" placeholder="task add "></input>
      </form>
      </div></>
    
  );
}

export default Popup