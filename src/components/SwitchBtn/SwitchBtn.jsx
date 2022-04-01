import "./SwitchBtn.css";

import React from "react";

function SwitchBtn({ checked }) {
  return (
    <label class="switch">
      <input type="checkbox" checked={checked} />
      <span class="slider round"></span>
    </label>
  );
}

export default SwitchBtn;
