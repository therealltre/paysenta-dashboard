// EditProfileModal.tsx
import React from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

interface AddAccountModalProps {
  open: boolean;
  onClose: () => void;
  accountData: {
    // accountName: string;
    accountNumber: string;
    bankName: string;
  };
  onSave: (updatedData: any) => void;
}

const AddAccountModal: React.FC<AddAccountModalProps> = ({
  open,
  onClose,
  accountData,
  onSave
}) => {
  const [updatedBankAccountData, setUpdatedBankAccountData] =
    React.useState(accountData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedBankAccountData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    onSave(updatedBankAccountData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: 2,
          outline: "none",
          borderRadius: "4px",
          width: "90vw", // Responsive width
          maxWidth: "650px" // Maximum width for larger screens
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 0, right: 0 }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" mb={2}>
          Add Bank Account
        </Typography>
        {/* Input fields for editing */}
        {/* You can replace these with your own form fields */}
        <Box>
          <TextField
            label="Bank Name"
            fullWidth
            variant="outlined"
            name="bankName"
            value={updatedBankAccountData.bankName}
            onChange={handleInputChange}
            sx={{ mb: 2, width: 300, mr: 2 }}
          />
          <TextField
            type="number"
            label="Account Number"
            fullWidth
            variant="outlined"
            name="accountNumber"
            value={updatedBankAccountData.accountNumber}
            onChange={handleInputChange}
            sx={{ mb: 2, width: 300 }}
          />
          {/* <TextField
            label="Account Name"
            fullWidth
            variant="outlined"
            name="accountNumber"
            value={updatedBankAccountData.accountName}
            onChange={handleInputChange}
            sx={{ mb: 2, width: 300 }}
          /> */}
        </Box>
        {/* Other input fields */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "16px", backgroundColor: "#1E4939" }}
          onClick={handleSaveClick}
        >
          Save Changes
        </Button>
      </Box>
    </Modal>
  );
};

export default AddAccountModal;
