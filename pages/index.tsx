import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
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
import Logo from "../src/layouts/full/shared/logo/Logo";
import { useState } from "react";
import router from "next/router";
import Image from "next/image";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { InputAdornment } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

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
        Paysenta
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when input changes
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formValid = true;
    const newErrors: any = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
      formValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      formValid = false;
    }

    if (!formValid) {
      setErrors(newErrors);
      return;
    }

    // Form is valid, proceed with form submission
    console.log("Form data:", formData);
    // Add your form submission logic here

    router.push("/dashboard");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }} >
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} >
          <Box
            sx={{
              my: 10,
              mx: 10
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center"
            }}
          >
            <Box
              display="flex"
              alignItems="start"
              justifyContent="start"
              mb={3}
            >
              {/* <Logo /> */}
              <Image src="/paysenta-logo.png" alt="" width={200} height={70} />
            </Box>
            <Box mb={2}>
              <Typography variant="h4" fontWeight="bold" mb={5}>
                Welcome back
              </Typography>{" "}
            </Box>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
              // margin="normal"
                id="email"
                label="Email Address"
                placeholder="Enter email Address"
                variant="outlined"
                name="email"
                autoComplete="email"
                type="email"
                autoFocus
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailIcon />
                    </InputAdornment>
                  )
                }}
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                margin="normal"
                id="password"
                label="Password"
                placeholder="Enter password"
                variant="outlined"
                name="password"
                autoComplete="password"
                type="password"
                autoFocus
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  )
                }}
                value={formData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                helperText={errors.password}
              />

              <Grid container>
                <Grid item xs>
                  <FormControlLabel
                    control={
                      <Checkbox value="remember" style={{ color: "#08ADAD" }} />
                    }
                    label="Remember me"
                  />
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" color={"#08ADAD"}>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: "#08ADAD",
                  width: "100%",
                  height: "56px"
                }}
                sx={{ mt: 3, mb: 2 }}
                // href={"/dashboard"}
              >
                Sign In
              </Button>
              <Grid container gap={1} justifyContent={"center"}>
                <Typography> Don't have an account? </Typography>
                <Link
                  href="/authentication/register"
                  variant="body2"
                  color={"#08ADAD"}
                >
                  Register Now
                </Link>
              </Grid>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(/cards-img.png)", //left image
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "contain",
            backgroundPosition: "center"
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
