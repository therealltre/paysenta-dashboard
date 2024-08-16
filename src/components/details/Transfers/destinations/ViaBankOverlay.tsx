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
  Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface BankOverlayProps {
  open: boolean;
  onClose: () => void;
  onSaveAccountInfo: (accountInfo: AccountInfo) => void;

  // You can add other necessary props here
}

interface AccountInfo {
  formData: {
    selectBank: string;
    account_number: string;
    account_name: string;
  };
}

const BankOverlay: FC<BankOverlayProps> = ({
  open,
  onClose,
  onSaveAccountInfo
}) => {
  const [selectBank, setSelectBank] = useState("Absa Bank");
  const [errors, setErrors] = useState({
    selectBank: "",
    account_number: "",
    account_name: ""
  });

  const [formData, setFormData] = useState({
    selectBank: "",
    account_number: "",
    account_name: ""
  });

  const validateFields = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (selectBank.trim() === "") {
      newErrors.selectBank = "Network name is required";
      valid = false;
    }

    if (formData.account_number.trim() === "") {
      newErrors.account_number = "Phone number is required";
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
        selectBank: selectBank
      };
      onSaveAccountInfo({ formData });
      onClose();

      console.log("onSaveAccountInfo:", updatedFormData);
    }
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   let formValid = true;
  //   const newErrors: any = {};

  //   if (!formData.selectBank) {
  //     newErrors.bank_name = "Bank name is required";
  //     formValid = false;
  //   }

  //   if (!formData.account_number) {
  //     newErrors.account_number = "Account number is required";
  //     formValid = false;
  //   }

  //   if (!formData.account_name) {
  //     newErrors.account_name = "Account name is required";
  //     formValid = false;
  //   }

  //   if (!formValid) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   // Form is valid, proceed with form submission
  //   // console.log("Bank name:", selectBank);
  //   console.log("Form data:", formData);
  //   // Add your form submission logic here

  //   // router.push("/dashboard");
  // };

  const handleSelectBankChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setSelectBank(value);
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
          <Typography variant="h6">Enter Bank details</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <DialogContent>
        {/* Virtual Card Dropdown */}
        <Stack style={{ marginBottom: "24px" }} spacing={2}>
          <Typography variant="subtitle1">Bank details:</Typography>
          <Box component="form" sx={{ gap: 2 }}>
            <Select
              value={selectBank}
              onChange={handleSelectBankChange}
              fullWidth
            >
              <MenuItem
                value="Absa Bank"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Stack alignItems={"center"} flexDirection={"row"} mb={1}>
                  <ListItemIcon>
                    <img
                      src="/images/bank/absa.png"
                      alt="Paysenta icon"
                      width={"24px"}
                      style={{ marginRight: "8px" }}
                    />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ flex: 1 }} mr={2}>
                    Absa bank
                  </Typography>
                </Stack>
              </MenuItem>
              <MenuItem
                value="Fidelity Bank"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Stack alignItems={"center"} flexDirection={"row"}>
                  <ListItemIcon>
                    <img
                      src="/images/bank/fidelity-bank.png"
                      alt="Paysenta icon"
                      width={"24px"}
                      style={{ marginRight: "2px" }}
                    />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ flex: 1 }} mr={2}>
                    Fidelity bank
                  </Typography>
                </Stack>
              </MenuItem>
              {/* Add more MenuItem elements for each virtual card */}
            </Select>

            <TextField
              label="Enter Account Number"
              type="text"
              placeholder="0"
              name="account_number"
              value={formData.account_number}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
              style={{ textAlign: "left" }} // Align to the left
              error={!!errors.account_number}
              helperText={errors.account_number}
            />
            <TextField
              label="Enter Account Name"
              name="account_name"
              type="text"
              placeholder="0"
              value={formData.account_name}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
              style={{ textAlign: "left" }} // Align to the left
              error={!!errors.account_name}
              helperText={errors.account_name}
            />

            <Button
              // type="submit"
              variant="contained"
              style={{ color: "white", backgroundColor: "#08ADAD" }}
              sx={{ mt: 5, mb: 3, height: "54px"}}
              fullWidth
              onClick={handleSave}
              // onClick={handleSave}
            >
              Withdraw
            </Button>
          </Box>
        </Stack>
      </DialogContent>
      {/* DialogActions for buttons */}
      {/* <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default BankOverlay;
