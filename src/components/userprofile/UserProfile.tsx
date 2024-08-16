import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Stack,
  Typography,
  Grid,
  Divider,
  Box,
  Avatar,
  Button,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,

  //new imports
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DashboardCard from "../shared/DashboardCard";
import { IconEdit } from "@tabler/icons-react";
import EditProfileModal from "./EditProfileModal";

interface AccountInfoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  bankName: string;
  onSaveAccountInfo: (accountInfo: AccountInfo) => void;
}

interface AccountInfo {
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
}

const AccountInfoPopup: React.FC<AccountInfoPopupProps> = ({
  isOpen,
  onClose,
  bankName,
  onSaveAccountInfo
}) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");

  const handleSave = () => {
    onSaveAccountInfo({
      bankName,
      accountNumber,
      accountHolderName
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Enter Account Information</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          sx={{ mb: 2, mt: 2 }}
        />
        <TextField
          fullWidth
          label="Account Holder Name"
          value={accountHolderName}
          onChange={(e) => setAccountHolderName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ color: "#08ADAD", mt: 1 }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          sx={{ color: "contained", mt: 1, mr: 2 }}
          style={{ backgroundColor: "#08ADAD", color: "white"}}
        >
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const UserProfile = () => {
  // chart color
  const theme = useTheme();

  const [profileData, setProfileData] = React.useState({
    fullName: "John Wayne",
    role: "Product Designer",
    phoneNumber: "+233123456789",
    ghanacardNumber: "GHA-12345678-9",
    email: "johnwayne@xactscore.com",
    monthlyIncome: "GHS 3,000",
    location: "Accra - Ghana"
  });

  const [editModalOpen, setEditModalOpen] = React.useState(false);

  const handleEditModalOpen = () => {
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleSaveChanges = (updatedData: any) => {
    setProfileData(updatedData);
  };

  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  //new code
  const [isAccountInfoPopupOpen, setIsAccountInfoPopupOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");

  const openAccountInfoPopup = (bankName: React.SetStateAction<string>) => {
    setSelectedBank(bankName);
    setIsAccountInfoPopupOpen(true);
  };

  const saveAccountInfo = (accountInfo: any) => {
    // Save the account info to CreditCardInfo page
    // This is a placeholder, you'll need to implement the actual saving logic
    console.log("Saving account info:", accountInfo);
  };

  return (
    <DashboardCard title="My Account">
      <>
        <Divider />
        <Grid
          container
          flexDirection={"row"}
          alignItems={"start"}
          width={{ base: 100, md: "100%" }}
          gap={{ base: 2, md: 8 }}
        >
          <Grid item xs={12} lg={2}>
            <Stack
              direction="row"
              spacing={1}
              my={2}
              alignItems="start"
              width={"100%"}
            >
              {/* profile details  */}
              <Box>
                <Box pb={2} width={200}>
                  <Grid item xs={12}>
                    <Typography style={{ color: "gray" }}>Full Name</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" fontWeight="500">
                      {profileData.fullName}
                    </Typography>
                  </Grid>
                </Box>
                <Box pb={2} width={200}>
                  <Grid item xs={12}>
                    <Typography style={{ color: "gray" }}>Role</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" fontWeight="500">
                      {profileData.role}
                    </Typography>
                  </Grid>
                </Box>
                <Box pb={2} width={200}>
                  <Grid item xs={12}>
                    <Typography style={{ color: "gray" }}>
                      Phone Number
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" fontWeight="500">
                      {profileData.phoneNumber}
                    </Typography>
                  </Grid>
                </Box>
                <Box pb={2} width={200}>
                  <Grid item xs={12}>
                    <Typography style={{ color: "gray" }}>
                      Ghana Card
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" fontWeight="500">
                      {profileData.ghanacardNumber}
                    </Typography>
                  </Grid>
                </Box>
                <Box pb={2}>
                  <Typography style={{ color: "gray" }}>Email</Typography>
                  <Grid item xs={12}>
                    <Typography variant="h6" fontWeight="500">
                      {profileData.email}
                    </Typography>
                  </Grid>
                </Box>
                <Box pb={2} width={200}>
                  <Typography style={{ color: "gray" }}>
                    Monthly Income
                  </Typography>
                  <Grid item xs={12}>
                    <Typography variant="h6" fontWeight="500">
                      {profileData.monthlyIncome}
                    </Typography>
                  </Grid>
                </Box>
                <Box width={200}>
                  <Typography style={{ color: "gray" }}>Location</Typography>
                  <Grid item xs={12}>
                    <Typography variant="h6" fontWeight="500">
                      {profileData.location}
                    </Typography>
                  </Grid>
                </Box>
              </Box>

              {/* profile image and change button  */}
              <Stack alignItems={"end"} justifySelf={"end"}>
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
                      <IconEdit width={20} color="#08ADAD" />
                    </Avatar>
                  </label>
                  <Link
                    style={{
                      color: "#08ADAD",
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
            </Stack>
          </Grid>
        </Grid>

        <Divider />
        {/* edit profile and add bank btn  */}
        <Stack
          flexDirection={"column"}
          alignItems={"start"}
          width={{ base: 100, md: "100%" }}
          gap={{ base: 1, md: 1 }}
        >
          <Button
            variant="outlined"
            sx={{ color: "#08ADAD", mt: 2 }}
            onClick={handleEditModalOpen}
            fullWidth
          >
            Edit Profile
          </Button>
          <Button
            variant="contained"
            sx={{ color: "contained", mt: 1 }}
            style={{ backgroundColor: "#08ADAD", color: "white"}}
            fullWidth
            onClick={openDrawer}
          >
            Add Bank Account
          </Button>
        </Stack>

        {/* Modal for editing profile */}
        <EditProfileModal
          open={editModalOpen}
          onClose={handleEditModalClose}
          profileData={profileData}
          onSave={handleSaveChanges}
        />

        {/* Drawer section  */}
        <Grid item xs={12} lg={12}>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={closeDrawer}
            ModalProps={{
              keepMounted: true
            }}
          >
            <Box width={{ base: "100%", md: 600 }}>
              <Stack
                // justifyItems={"center"}
                alignItems={"center"}
                direction={"row"}
                m={2}
                justifyContent={"space-between"}
              >
                <Typography variant="h6">Select Bank</Typography>
                <IconButton
                  onClick={closeDrawer}
                  sx={{ float: "right", justifySelf: "end" }}
                >
                  <CloseIcon />
                </IconButton>
              </Stack>

              <Divider />
              {/* Add your bank list and search option here */}
              <Grid
                container
                spacing={1}
                mt={2}
                direction={{ base: "column", md: "row" }}
              >
                <Grid item xs={12} lg={4}>
                  <ListItem
                    button
                    sx={{ gap: 1 }}
                    onClick={() => openAccountInfoPopup("Stanbic Bank")}
                  >
                    <Avatar
                      src={"/images/bank/stanbic-bank.jpg"}
                      alt={"bank-image"}
                      sx={{ width: 70, height: 70 }}
                    />
                    <ListItemText primary="Stanbic Bank" />
                  </ListItem>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <ListItem
                    button
                    sx={{ gap: 1 }}
                    onClick={() => openAccountInfoPopup("Fidelity Bank")}
                  >
                    <Avatar
                      src={"/images/bank/fidelity-bank.png"}
                      alt={"bank-image"}
                      sx={{ width: 70, height: 70, backgroundSize: "cover" }}
                    />
                    <ListItemText primary="Fidelity Bank" />
                  </ListItem>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <ListItem
                    button
                    sx={{ gap: 1 }}
                    onClick={() =>
                      openAccountInfoPopup("Standard Chartered Bank")
                    }
                  >
                    <Avatar
                      src={"/images/bank/stanchart.jpg"}
                      alt={"bank-image"}
                      sx={{
                        width: 70,
                        height: 70
                      }}
                      style={{ objectFit: "cover" }}
                    />
                    <ListItemText primary="Standard Chartered Bank" />
                  </ListItem>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                mt={2}
                direction={{ base: "column", md: "row" }}
              >
                <Grid item xs={12} lg={4}>
                  <List>
                    <ListItem
                      button
                      sx={{ gap: 1 }}
                      onClick={() => openAccountInfoPopup("Absa Bank")}
                    >
                      <Avatar
                        src={"/images/bank/absa.png"}
                        alt={"bank-image"}
                        sx={{ width: 70, height: 70 }}
                      />
                      <ListItemText primary="Absa Bank" />
                    </ListItem>

                    {/* Add more banks as needed */}
                  </List>
                </Grid>
              </Grid>
            </Box>
          </Drawer>
        </Grid>

        {/* Account Info Popup */}
        <AccountInfoPopup
          isOpen={isAccountInfoPopupOpen}
          onClose={() => setIsAccountInfoPopupOpen(false)}
          bankName={selectedBank}
          onSaveAccountInfo={saveAccountInfo}
        />
      </>
    </DashboardCard>
  );
};

export default UserProfile;
