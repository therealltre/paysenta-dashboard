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

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
  profileData: {
    fullName: string;
    role: string;
    phoneNumber: string;
    ghanacardNumber: string;
    email: string;
    monthlyIncome: string;
    location: string;
  };
  onSave: (updatedData: any) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  open,
  onClose,
  profileData,
  onSave
}) => {
  const [updatedProfileData, setUpdatedProfileData] =
    React.useState(profileData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    onSave(updatedProfileData);
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
          Edit Profile
        </Typography>
        {/* Input fields for editing */}
        <Box>
          <TextField
            label="Full Name"
            fullWidth
            variant="outlined"
            name="fullName"
            value={updatedProfileData.fullName}
            onChange={handleInputChange}
            sx={{ mb: 2, width: 300, mr: 2 }}
            disabled
          />
          <TextField
            label="Phone Number"
            fullWidth
            variant="outlined"
            name="phoneNumber"
            value={updatedProfileData.phoneNumber}
            onChange={handleInputChange}
            sx={{ mb: 2, width: 300 }}
            disabled
          />
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            name="email"
            value={updatedProfileData.email}
            onChange={handleInputChange}
            sx={{ mb: 2, width: 300, mr: 2 }}
            disabled
          />
          <TextField
            label="Ghana Card"
            fullWidth
            variant="outlined"
            name="ghanacardNumber"
            value={updatedProfileData.ghanacardNumber}
            onChange={handleInputChange}
            sx={{ mb: 2, width: 300 }}
            disabled
          />
            <TextField
            label="Role"
            fullWidth
            variant="outlined"
            name="role"
            value={updatedProfileData.role}
            onChange={handleInputChange}
            sx={{ mb: 2, width: 300, mr: 2}}
          />

          <TextField
            label="Monthly Income"
            fullWidth
            variant="outlined"
            name="monthlyIncome"
            value={updatedProfileData.monthlyIncome}
            onChange={handleInputChange}
            sx={{ mb: 2, width: 300 }}
          />
          <TextField
            label="Location"
            fullWidth
            variant="outlined"
            name="location"
            value={updatedProfileData.location}
            onChange={handleInputChange}
            sx={{ mb: 2, width: 300 }}
          />
        </Box>
        {/* Other input fields */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "16px", backgroundColor: "#08ADAD", color: "white" }}
          onClick={handleSaveClick}
        >
          Save Changes
        </Button>
      </Box>
    </Modal>
  );
};

export default EditProfileModal;
