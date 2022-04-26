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

import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

function PaymentMethodTextField() {
  //Payment Method List
  const Payment_Method = ["Visa", "Master Card", "Debit/Credit"];

  //setting Card Nummber
  const [cardNo, setcardNo] = React.useState("");
  const handleChangeCardNo = (event) => {
    setcardNo(event.target.value);
  };

  //Setting Card holder name
  const [cardName, setcardName] = React.useState("");
  const handleChangecardName = (event) => {
    setcardName(event.target.value);
  };

  //setting Payment
  const [PaymentMode, setPaymentMode] = React.useState([]);
  const handleChangePaymentMode = (event) => {
    const {
      target: { value },
    } = event;
    setPaymentMode(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //setting date

  const [expirydate, setExpiryDate] = React.useState("");
  const handleChangeExpiryDate = (event) => {
    setExpiryDate(event.target.value);
  };

  //setting CVV

  const [cvv, setCVV] = React.useState("");
  const handleChangeCvv = (event) => {
    setCVV(event.target.value);
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
            <Grid container spacing={2} >
              <Grid item xs={12} md={12}>
                <FormControl sx={{ width: "30ch" }}>
                  <InputLabel id="demo-multiple-name-label">
                    Payment Method
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={PaymentMode}
                    onChange={handleChangePaymentMode}
                    input={<OutlinedInput label="Payment Method" />}
                  >
                    {Payment_Method.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  id="outlined-Card Number"
                  label="Card Number"
                  value={cardNo}
                  onChange={handleChangeCardNo}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  id="outlined-Card Holder Name"
                  label="Card Holder Name"
                  value={cardName}
                  onChange={handleChangecardName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-Expiry Date"
                  label="Expiry Date"
                  type="month"
                  autoComplete="false"
                  value={expirydate}
                  onChange={handleChangeExpiryDate}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-CVC/CVV"
                  label="CVC/CVV"
                  value={cvv}
                  onChange={handleChangeCvv}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentMethodTextField;
