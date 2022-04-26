import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

function PaymentPersonalDetailsTextFields() {
  //Setting Full Name
  const [name, setName] = React.useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  //Email
  const [email, setEmail] = React.useState("");
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  //Address
  const [address, setAddress] = React.useState("");
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  //Address
  const [city, setCity] = React.useState("");
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  //State
  const [State, setState] = React.useState("");
  const handleChangeState = (event) => {
    setState(event.target.value);
  };
  //Zip
  const [zip, setZip] = React.useState("");
  const handleChangeZip = (event) => {
    setState(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          position: "relative",
          top: "-3rem",
          marginRight: "42%",
          marginLeft: "42%",
        }}
      >
        <div className="col-12 col-md-5" style={{ marginInlineStart: "3rem" }}>
          <div className="row">
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <TextField
                  id="outlined-Name"
                  label="Name"
                  value={name}
                  onChange={handleChangeName}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  id="outlined-Email"
                  label="Email"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  label="Address"
                  id="Address"
                  value={address}
                  onChange={handleChangeAddress}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <TextField
                  id="outlined-City"
                  label="City"
                  value={city}
                  onChange={handleChangeCity}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <TextField
                  id="outlined-State"
                  label="State"
                  value={State}
                  onChange={handleChangeState}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <TextField
                  id="outlined-Zip"
                  label="Zip"
                  value={zip}
                  onChange={handleChangeZip}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentPersonalDetailsTextFields;
