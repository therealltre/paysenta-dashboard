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
  Link
} from "@mui/material";
import { Contact } from "../../models/contact_list";
import { IconEdit } from "@tabler/icons-react";

interface EditContactModalProps {
  open: boolean;
  onClose: () => void;
  contact: Contact;
  onSave: (contact: Contact) => void;
}

const EditContactModal: FC<EditContactModalProps> = ({
  open,
  onClose,
  contact,
  onSave
}) => {
  const [updatedContact, setUpdatedContact] = useState<Contact>(contact);
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedContact((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    try {
      // Attempt to save the updated contact
      //   onSave(updatedContact);
      onSave(contact);
      console.log("User data saved successfully");
    } catch (error) {
      console.error("Failed to save user data:", error);
    } finally {
      onClose(); // Close the dialog regardless of success or failure
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Edit Contact</DialogTitle>
      <DialogContent>
        {/* profile image and change button  */}
        <Stack alignItems={"start"} justifySelf={"start"} mt={2}>
          <Avatar
            src={
              selectedImage
                ? URL.createObjectURL(selectedImage)
                : "/images/profile/user-1.jpg"
            }
            alt={"profile-image"}
            sx={{
              width: 56,
              height: 56,
              justifyItems: "between"
            }}
          />
          <input
            type="file"
            accept="image/*"
            id="profile-image-input"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />

          <Stack direction="row" mt={1} alignItems="center">
            <label htmlFor="profile-image-input">
              <Avatar sx={{ bgcolor: "white", width: 27, height: 27 }}>
                <IconEdit width={20} color="black" />
              </Avatar>
            </label>
            <Link
              style={{
                color: "primary",
                fontWeight: 700,
                cursor: "pointer"
              }}
              onClick={() =>
                document.getElementById("profile-image-input")?.click()
              }
            >
              Change
            </Link>
          </Stack>
        </Stack>

        {/* form section  */}
        <FormControl sx={{ mt: 5, gap: 3 }} fullWidth>
          <TextField
            label="Contact Name"
            name="name"
            fullWidth
            value={contact.name} // Change 'contact' to 'updatedContact'
            onChange={handleInputChange}
          />
          <TextField
            label="Contact Email"
            name="email"
            fullWidth
            value={contact.email} // Change 'contact' to 'updatedContact'
            onChange={handleInputChange}
          />
          <TextField
            label="Contact Phone Number"
            name="phone"
            fullWidth
            value={contact.phone} // Change 'contact' to 'updatedContact'
            onChange={handleInputChange}
          />
          <TextField
            label="Contact Account Number"
            name="accountNumber"
            fullWidth
            value={contact.accountNumber} // Change 'contact' to 'updatedContact'
            onChange={handleInputChange}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSaveClick} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditContactModal;
