import React from "react";
// import "../../src/App.css";
import logo from "../../logo192.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import "./Login.css";
function LoginTextFeildBox() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  //Show Password
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Box
      className="textfields"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          type="text"
          id="outlined-name"
          label="Email"
          defaultValue="Email"
        />
      </div>
      <div>
        <TextField
          type={values.showPassword ? "text" : "password"}
          id="outlined-password"
          label="Password"
          onChange={handlePasswordChange("password")}
          value={values.password}
        />

        <i
          className="pass-wrapper"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          
        >
          {values.showPassword ? <Visibility style={{position:"relative"}}/> : <VisibilityOff />}
        </i>
      </div>
    </Box>
  );
}

export default LoginTextFeildBox;
