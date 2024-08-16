import React, { FC, ChangeEvent, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  TextField,
  DialogActions,
  Button,
  Grid,
  Stack,
  Avatar,
  Link,
  MenuItem,
  Select,
  Typography,
  IconButton,
  SelectChangeEvent,
  InputAdornment,
  ListItemIcon,
  Box,
  FormHelperText
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import { Wallet } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

interface MomoOverlayProps {
  open: boolean;
  onClose: () => void;
  onSaveAccountInfo: (accountInfo: AccountInfo) => void;
  // You can add other necessary props here
}

interface AccountInfo {
  formData: {
    selectMomo: string;
    phone_number: string;
    account_name: string;
  };
}

const MomoOverlay: FC<MomoOverlayProps> = ({
  open,
  onClose,
  onSaveAccountInfo
}) => {
  const [selectMomo, setSelectMomo] = useState("mtn");
  const [errors, setErrors] = useState({
    selectMomo: "",
    phone_number: "",
    account_name: ""
  });

  const [formData, setFormData] = useState({
    selectMomo: "",
    phone_number: "",
    account_name: ""
  });

  const validateFields = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (selectMomo.trim() === "") {
      newErrors.selectMomo = "Network name is required";
      valid = false;
    }

    if (formData.phone_number.trim() === "") {
      newErrors.phone_number = "Phone number is required";
      valid = false;
    }

    if (formData.account_name.trim() === "") {
      newErrors.account_name = "Account name is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSave = () => {
    const isValid = validateFields();

    if (isValid) {
      const updatedFormData = {
        ...formData,
        selectMomo: selectMomo
      };
      onSaveAccountInfo({ formData });
      onClose();

      console.log("onSaveAccountInfo:", updatedFormData);
    }
  };

  const handleSelectMomoChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectMomo(value);
    setErrors({ ...errors, selectMomo: "" }); // Clear the error when input changes
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when input changes
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Enter Mobile Money details</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <DialogContent>
        {/* Virtual Card Dropdown */}
        <Stack style={{ marginBottom: "24px" }} spacing={2}>
          <Typography variant="subtitle1">Mobile Network:</Typography>
          <Box component="form" sx={{ gap: 2 }}>
            <Select
              value={selectMomo}
              onChange={handleSelectMomoChange}
              fullWidth
              error={!!errors.selectMomo}
            >
              <MenuItem
                value="mtn"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Stack alignItems={"center"} flexDirection={"row"} mb={1}>
                  <ListItemIcon>
                    <img
                      src="/images/mobile-networks/mtn.jpg"
                      alt="Paysenta icon"
                      width={"24px"}
                      style={{ marginRight: "8px" }}
                    />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ flex: 1 }} mr={2}>
                    MTN
                  </Typography>
                </Stack>
              </MenuItem>

              <MenuItem
                value="vodafone"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Stack alignItems={"center"} flexDirection={"row"} mb={1}>
                  <ListItemIcon>
                    <img
                      src="/images/mobile-networks/vodafone.jpg"
                      alt="Paysenta icon"
                      width={"24px"}
                      style={{ marginRight: "2px" }}
                    />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ flex: 1 }} mr={2}>
                    Vodafone
                  </Typography>
                </Stack>
              </MenuItem>

              <MenuItem
                value="airteltigo"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Stack alignItems={"center"} flexDirection={"row"} mb={1}>
                  <ListItemIcon>
                    <img
                      src="/images/mobile-networks/airteltigo.jpeg"
                      alt="Paysenta icon"
                      width={"24px"}
                      style={{ marginRight: "2px" }}
                    />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ flex: 1 }} mr={2}>
                    AirtelTigo
                  </Typography>
                </Stack>
              </MenuItem>
              {/* Add more MenuItem elements for each virtual card */}
            </Select>
            <FormHelperText error={!!errors.selectMomo}>
              {errors.selectMomo}
            </FormHelperText>

            <TextField
              label="Enter Account Number"
              type="number"
              placeholder="0241234567"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
              fullWidth
              style={{ textAlign: "left" }} // Align to the left
              error={!!errors.phone_number}
              helperText={errors.phone_number}
            />
            <TextField
              label="Enter Account Name"
              name="account_name"
              type="text"
              placeholder="John Doe"
              value={formData.account_name}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
              fullWidth
              style={{ textAlign: "left" }} // Align to the left
              error={!!errors.account_name}
              helperText={errors.account_name}
            />

            <Button
              //   type="submit"
              variant="contained"
              style={{ color: "white", backgroundColor: "#08ADAD" }}
              sx={{ mt: 5, mb: 2, height: "54px" }}
              fullWidth
              onClick={handleSave}
            >
              Withdraw
            </Button>
          </Box>
        </Stack>

        {/* Transfer Destination subtitle and buttons */}
        {/* <Stack style={{ marginTop: "24px" }} spacing={2}> */}
        {/* 
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="outlined"
              startIcon={<AccountBalanceIcon />} // Image for Via Bank button
              endIcon={<NavigateNextIcon sx={{ marginLeft: "auto" }} />} // Replace ArrowForwardIcon with the right arrow icon component
              //   onClick={handleViaBankClick}
              style={{ backgroundColor: "white", color: "black" }}
              sx={{ justifyContent: "space-between" }}
              fullWidth
            >
              Withdraw
            </Button>
          </Grid>
        </Grid> */}
      </DialogContent>
      {/* DialogActions for buttons */}
      {/* <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default MomoOverlay;
