import React from "react";
import "./SignUp.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";

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
    //   Name
    <>
      <div className="container" style={{ height: "20rem" }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "38ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              type="text"
              id="full-name"
              label="Full Name"
              defaultValue="John"
            />
          </div>
          <TextField
            type="text"
            id="outlined-name"
            label="Email"
            defaultValue="email"
          />
          {/* Password */}
          <div className="pass">
            <TextField
              type={values.showPassword ? "text" : "password"}
              id="password"
              label="Password"
              onChange={handlePasswordChange("password")}
              value={values.password}
            />
            <i
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </i>
          </div>

          <div className="c-pass">
            <TextField
              type={values.showPassword ? "text" : "password"}
              id="confirm Password"
              label="Confirm Password"
              onChange={handlePasswordChange("password")}
              value={values.password}
            />
            <i
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </i>
          </div>
        </Box>
      </div>
    </>
  );
}

export default LoginTextFeildBox;
