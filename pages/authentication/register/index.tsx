import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../../../src/layouts/full/shared/logo/Logo";
import { useState } from "react";
import router from "next/router";
import { FormHelperText } from "@mui/material";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        XactScore
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedError, setCheckedError] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    setCheckedError(false);
  };

  const handleProceed = () => {
    if (!isChecked) {
      setCheckedError(true);
    } else {
      // Proceed with your action when the checkbox is checked
      // Add your logic here
      router.push("/dashboard");
      
    }
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    ghanaCardNumber: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    ghanaCardNumber: "",
    password: ""
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when input changes
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formValid = true;
    const newErrors: any = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
      formValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      formValid = false;
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
      formValid = false;
    }

    if (!formData.ghanaCardNumber) {
      newErrors.ghanaCardNumber = "Ghana Card number is required";
      formValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      formValid = false;
    }

    if (!isChecked) {
      setCheckedError(true);
      formValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      formValid = false;
    }

    if (formValid) {
      // Form is valid, proceed with form submission
      console.log("Form data:", formData);
      // Add your form submission logic here
  
      // Redirect to the dashboard only if the checkbox is checked
      if (isChecked) {
        router.push("/dashboard");
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(/images/backgrounds/signup-image.jpg)", //left image
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <Logo />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              mb={2}
            >
              <Typography> Enter your credentials to proceed</Typography>
            </Box>
            <Avatar sx={{ m: 1, bgcolor: "#1E4939" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              // onClick={handleProceed}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                placeholder="John Doe"
                name="fullName"
                autoComplete="name"
                autoFocus
                variant="standard"
                value={formData.fullName}
                onChange={handleInputChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                placeholder="name@example.com"
                name="email"
                autoComplete="email"
                autoFocus
                variant="standard"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                type="number"
                label="Phone Number"
                placeholder="0501234567"
                name="phoneNumber"
                autoComplete="phoneNumber"
                autoFocus
                variant="standard"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="ghanaCard"
                placeholder="GHA-12345678-9"
                label="Ghana Card Number"
                name="ghanaCardNumber"
                autoComplete="ghanaCardNumber"
                autoFocus
                variant="standard"
                value={formData.ghanaCardNumber}
                onChange={handleInputChange}
                error={!!errors.ghanaCardNumber}
                helperText={errors.ghanaCardNumber}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                placeholder="P@ssword1"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="standard"
                value={formData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                helperText={errors.password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: "#1E4939" }}
                sx={{ mt: 3, mb: 2 }}
                // onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      style={{ color: "#1E4939" }}
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      name="persistent"
                    />
                  }
                  label="By proceeding, you agree to our Terms and Conditions"
                />
                {checkedError && (
                  <FormHelperText error>
                    Please agree to the Terms and Conditions
                  </FormHelperText>
                )}
                {/* <button onClick={handleProceed}>Proceed</button> */}
              </Grid>

              <Grid container alignItems={"center"} justifyContent={"center"}>
                <Grid>
                  <Link href="/" variant="body2" color={"#1E4939"}>
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
