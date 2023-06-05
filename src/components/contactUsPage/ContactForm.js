import React from "react";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Form } from "react-router-dom";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import "../../styles/Contact.css";
import Button, { buttonClasses } from "@mui/base/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import Select, { SelectChangeEvent } from "@mui/material/Select";

//Right panel/form of Contact Us form

function ContactForm() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    margin-top: 60px;
    margin-left: -45px;
    width: 820px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1.03rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 5px 5px 0 5px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );

  const CustomButton = styled(Button)(
    ({ theme }) => `
    
    margin-top: 10px;
    margin-right: 700px;
    font-weight: 600;
    font-size: 1rem;
    background-color: #851c1ce5;
    padding: 12px 54px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    border: none;
   
    &:hover {
      background-color: #ffffff;
      color: #851c1ce5;
      border: 1px solid #851c1ce5;
    }
    `
  );
  const CustomButtonCancel = styled(Button)(
    ({ theme }) => `
    margin-top: 10px;
    margin-right: 700px;
    font-weight: 600;
    font-size: 1rem;
    background-color: white;
    padding: 12px 54px;
    border-radius: 5px;
    color: #851c1ce5;
    text-decoration: underline;
    
    cursor: pointer;
    border: none;
   
  
    &:hover {
      background-color: #ffffff;
      color: #851c1ce5;
      border: 1px solid #851c1ce5;
    }
    `
  );
  return (
    <>
      <div className="form-area">
        <form className="form-size">
          <Stack spacing={2} direction="row">
            <FormControl
              sx={{ width: 450, borderRadius: 2, top: 10, left: 25 }}
            >
              <InputLabel htmlFor="component-outlined">Firstname</InputLabel>
              <OutlinedInput id="component-outlined" label="Firstname" />
            </FormControl>
            <FormControl
              sx={{ width: 450, borderRadius: 2, top: 10, left: 25 }}
            >
              <InputLabel htmlFor="component-outlined">Lastname</InputLabel>
              <OutlinedInput id="component-outlined" label="Lastname" />
            </FormControl>
          </Stack>
          <Stack spacing={2} direction="row">
            <FormControl
              sx={{ width: 450, borderRadius: 2, top: 20, left: 25 }}
            >
              <InputLabel htmlFor="component-outlined">Phone</InputLabel>
              <OutlinedInput id="component-outlined" label="Phone" />
              <FormHelperText id="my-helper-text">
                We won't call you, unless you want us to contact you.
              </FormHelperText>
            </FormControl>
            <FormControl
              sx={{ width: 450, borderRadius: 2, top: 20, left: 25 }}
            >
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <OutlinedInput id="component-outlined" label="Email" />
              <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </Stack>
          <Stack spacing={2} direction="row">
            <FormControl
              sx={{ width: 450, borderRadius: 2, top: 30, left: 25 }}
            >
              <InputLabel htmlFor="component-outlined">Address 1</InputLabel>
              <OutlinedInput id="component-outlined" label="Address 1" />
            </FormControl>
            <FormControl
              sx={{ width: 450, borderRadius: 2, top: 30, left: 25 }}
            >
              <InputLabel htmlFor="component-outlined">Address 2</InputLabel>
              <OutlinedInput id="component-outlined" label="Address 2" />
            </FormControl>
          </Stack>
          <Stack spacing={2} direction="row">
            <FormControl
              sx={{ width: 450, borderRadius: 2, top: 40, left: 25 }}
            >
              <InputLabel htmlFor="component-outlined">City</InputLabel>
              <OutlinedInput id="component-outlined" label="City" />
            </FormControl>
            <FormControl
              sx={{ width: 450, borderRadius: 2, top: 40, left: 25 }}
            >
              <InputLabel htmlFor="component-outlined">State</InputLabel>
              <OutlinedInput id="component-outlined" label="State" />
            </FormControl>
          </Stack>
          <Stack spacing={2} direction="row"></Stack>
          <Stack spacing={2} direction="row">
            <FormControl
              sx={{ width: 450, borderRadius: 2, top: 50, left: 25 }}
            >
              <InputLabel htmlFor="component-outlined">Country</InputLabel>
              <OutlinedInput id="component-outlined" label="Country" />
            </FormControl>
            <FormControl
              sx={{ width: 450, borderRadius: 2, top: 50, left: 25 }}
            >
              <InputLabel htmlFor="component-outlined">Zip</InputLabel>
              <OutlinedInput id="component-outlined" label="Zip" />
            </FormControl>
          </Stack>
          <Stack spacing={0} direction="row">
            <FormControl
              sx={{ m: 1, minWidth: 870, left: 2, top: 55, bottom: 10 }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Subject
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Subject"
                onChange={handleChange}
              >
                <MenuItem value="">
                  None
                </MenuItem>
                <MenuItem value={10}>Course Registration</MenuItem>
                <MenuItem value={20}>Course Pricing</MenuItem>
                <MenuItem value={30}>Educredits</MenuItem>
                <MenuItem value={40}>Other</MenuItem>
              </Select>
              <FormHelperText></FormHelperText>
            </FormControl>
          </Stack>
          <Stack>
            <StyledTextarea
              aria-label="minimum height"
              minRows={5}
              placeholder="Description"
            />
          </Stack>
          <FormControlLabel
            control={<Checkbox />}
            label="Yes, I agree to receive phone call from Professional Steps."
            sx={{ marginRight: 51, color: "#363232b5", fontFamily: "IBM Plex Sans, sans-serif"}}
          />

          <CustomButton>Submit</CustomButton>
          <CustomButtonCancel>Cancel</CustomButtonCancel>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
