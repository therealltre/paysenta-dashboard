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
  ListItemIcon
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import { Wallet } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";


interface TopupOverlayProps {
  open: boolean;
  onClose: () => void;
  // You can add other necessary props here
}

const TopupOverlay: FC<TopupOverlayProps> = ({ open, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [amount, setAmount] = useState<number | "">(""); // For the amount field
  const [transferDestination, setTransferDestination] = useState("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAmount(value === "" ? "" : Number(value));
  };

  const handleTransferDestinationChange = (
    event: SelectChangeEvent<string>
  ) => {
    const value = event.target.value as string;
    setTransferDestination(value);
  };

  const handleViaBankClick = () => {
    // Handle via bank button click
  };

  const handleViaMobileMoneyClick = () => {
    // Handle via mobile money button click
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Top up</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <DialogContent>
        {/* Virtual Card Dropdown */}
        <Stack style={{ marginBottom: "24px" }} spacing={2}>
          <Typography variant="subtitle1">Select a card:</Typography>
          <FormControl fullWidth>
            <Select
              value={transferDestination}
              onChange={handleTransferDestinationChange}
              fullWidth
            >
              <MenuItem
                value="card1"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Stack alignItems={"center"} flexDirection={"row"}>
                  <ListItemIcon>
                    <img
                      src="/paysenta-icon.png"
                      alt="Paysenta icon"
                      width={"24px"}
                      style={{ marginRight: "8px" }}
                    />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ flex: 1 }} mr={2}>
                    **** **** **** 1990
                  </Typography>
                  <Typography variant="body1">GHS 1,990</Typography>
                </Stack>
              </MenuItem>
              <MenuItem
                value="Card2"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Stack alignItems={"center"} flexDirection={"row"}>
                  <ListItemIcon>
                    <img
                      src="/paysenta-icon.png"
                      alt="Paysenta icon"
                      width={"24px"}
                      style={{ marginRight: "2px" }}
                    />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ flex: 1 }} mr={2}>
                    **** **** **** 2445
                  </Typography>
                  <Typography variant="body1">GHS 2,990</Typography>
                </Stack>
              </MenuItem>
              {/* Add more MenuItem elements for each virtual card */}
            </Select>
          </FormControl>
        </Stack>
        {/* Amount Textfield */}
        <Stack style={{ marginTop: "24px" }} spacing={2}>
          <FormControl fullWidth>
            <TextField
              label="Enter Amount"
              type="number"
              placeholder="0"
              value={amount}
              onChange={handleAmountChange}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">GHS</InputAdornment>
                ),
                readOnly: false,
                style: { fontSize: "24px" } // Set font size to 24px // Make the dollar sign non-editable
              }}
              style={{ textAlign: "left" }} // Align to the left
            />
          </FormControl>
        </Stack>

        {/* Transfer Destination subtitle and buttons */}
        {/* <Stack style={{ marginTop: "24px" }} spacing={2}> */}
        <Typography variant="subtitle1" mt={"24px"} mb={"24px"}>
          Select Top-up Method:
        </Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              startIcon={
                <AccountBalanceIcon />
              } // Image for Via Bank button
              endIcon={<NavigateNextIcon sx={{ marginLeft: "auto" }} />} // Replace ArrowForwardIcon with the right arrow icon component
              onClick={handleViaBankClick}
              style={{ backgroundColor: "white", color: "black" }}
              sx={{ justifyContent: "space-between" }}
              fullWidth
            >
              Via Bank
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              startIcon={<Wallet />} // Image for Via Bank button
              endIcon={<NavigateNextIcon />} // Replace ArrowForwardIcon with the right arrow icon component
              onClick={handleViaMobileMoneyClick}
              style={{ backgroundColor: "white", color: "black" }}
              sx={{ justifyContent: "space-between" }}
              fullWidth
            >
              Via Mobile Money
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
      {/* DialogActions for buttons */}
      {/* <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default TopupOverlay;
