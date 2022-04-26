import React from "react";
import { useState } from "react";
import "./Login.css";

function LoginCheckbox() {
  //useState
  const [checked, setChecked] = useState();
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="checkbox">
      <label style={{ marginLeft: "3rem" }}>
        <input type="checkbox" checked={checked} onChange={handleChange}  style={{marginRight:"1rem"}}/>
        Remember Me
      </label>
    </div>
  );
}

export default LoginCheckbox;
