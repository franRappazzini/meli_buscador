import "./SwitchBtn.css";

import React from "react";

function SwitchBtn({ checked, onClick }) {
  return (
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
  );
}

export default SwitchBtn;
