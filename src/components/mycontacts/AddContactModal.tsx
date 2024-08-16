import React, { FC, ChangeEvent, useState, useEffect } from "react";
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

const AddContactModal: FC<EditContactModalProps> = ({
  open,
  onClose,
  contact,
  onSave
}) => {
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);
  const [localStorageData, setLocalStorageData] = useState<Contact[]>([]);

  useEffect(() => {
    // Retrieve data from localStorage on component mount
    const localStorageContacts = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    setLocalStorageData(localStorageContacts);
  }, []);

  const handleAddClick = () => {
    try {
      onSave(contact);
      // Update localStorage with the new contact
      localStorage.setItem(
        "contacts",
        JSON.stringify([...localStorageData, contact])
      );
      console.log("User data added successfully");
    } catch (error) {
      console.error("Failed to add user data:", error);
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
      <DialogTitle>Add Contact</DialogTitle>
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
            // Add appropriate value and onChange handlers
          />
          <TextField
            label="Contact Email"
            name="email"
            fullWidth
            // Add appropriate value and onChange handlers
          />
          <TextField
            label="Contact Phone Number"
            name="phone"
            fullWidth
            // Add appropriate value and onChange handlers
          />
          <TextField
            label="Contact Account Number"
            name="accountNumber"
            fullWidth
            // Add appropriate value and onChange handlers
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddClick} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddContactModal;
