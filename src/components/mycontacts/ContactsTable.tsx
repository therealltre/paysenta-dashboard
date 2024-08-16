import React, {
  ChangeEvent,
  FC,
  ReactElement,
  useState,
  useEffect
} from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Checkbox,
  Avatar,
  InputAdornment,
  IconButton,
  Box,
  Grid,
  Card,
  Typography,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  DialogActions,
  Stack,
  Link
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import Tooltip from "@mui/material/Tooltip";
import { Search } from "@mui/icons-material";
import PageContainer from "../container/PageContainer";
import { Contact } from "../../models/contact_list";
import { contactsData } from "../mycontacts/ContactsData";
import EditContactModal from "./EditContactModal"; // Import the EditContactModal component
import PropTypes from "prop-types";
import { IconEdit } from "@tabler/icons-react";
import AddContactModal from "./AddContactModal";

interface ContactData {
  id: string;
  name: string;
  email: string;
  phone: string;
  accountNumber: string;
}

interface ContactListProps {
  // className?: string;
  contactsList: ContactData[];
}

//edit contact params
const defaultContact: Contact = {
  id: "",
  name: "",
  email: "",
  phone: "",
  accountNumber: ""
};

const contactData = contactsData;

const itemsPerPage = 7;

const ContactListTable: FC<ContactListProps> = ({ contactsList }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsersData, setSelectedUsersData] = useState<string[]>([]);
  const [contactData, setContactData] = useState(contactsData);
  const [editedContact, setEditedContact] = useState<Contact>(defaultContact);
  const selectedBulkActions = selectedUsersData.length > 0;
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);

  const [filteredData, setFilteredData] = useState(contactsData);
  const [newContact, setNewContact] = useState(defaultContact);
  const [addContactDrawerOpen, setAddContactDrawerOpen] = useState(false);
  const [localStorageData, setLocalStorageData] = useState<Contact[]>([]);

  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    // Retrieve data from localStorage on component mount
    const localStorageContacts = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    setLocalStorageData(localStorageContacts);
  }, []);

  const handleEditContact = (contact: Contact) => {
    setEditedContact(contact);
    setEditOpen(true);
  };

  //  handling check all boxes functionality
  const handleSelectAllusersData = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedUsersData(
      event.target.checked ? contactData.map((contact) => contact.name) : []
    );
    setSelectAll(event.target.checked); // Update the state
  };

  //  handling one checkbox functionality
  const handleSelectOneUserData = (
    _event: ChangeEvent<HTMLInputElement>,
    userDataId: string
  ): void => {
    if (!selectedUsersData.includes(userDataId)) {
      setSelectedUsersData((prevSelected) => [...prevSelected, userDataId]);
    } else {
      setSelectedUsersData((prevSelected) =>
        prevSelected.filter((id) => id !== userDataId)
      );
    }
  };

  const selectedSomeusersData =
    selectedUsersData.length > 0 &&
    selectedUsersData.length < contactData.length;

  const selectedAllusersData = selectedUsersData.length === contactData.length;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearch = () => {
    const filtered = contactsData.filter(
      (entry) =>
        entry.name.toLowerCase().includes(searchText.toLowerCase()) ||
        entry.accountNumber.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);

    console.log("Search results:", filtered);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      // setFilteredData(filtered);
      // setCurrentPage(1);
      handleSearch();
    }
  };

  const indexOfLastContact = currentPage * itemsPerPage;
  const indexOfFirstContact = indexOfLastContact - itemsPerPage;
  const currentContacts = filteredData.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const handleAddContact = (newContact: Contact) => {
    // Logic to update contacts list with the new contact
    // For now, just update the state and close the drawer
    setLocalStorageData([...localStorageData, newContact]);
    setAddContactDrawerOpen(false);
  };

  const handleAddContactDrawerOpen = () => {
    setAddContactDrawerOpen(true);
  };

  const handleAddContactDrawerClose = () => {
    setAddContactDrawerOpen(false);
    // Retrieve updated data from localStorage
    const updatedLocalStorageData = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    setLocalStorageData(updatedLocalStorageData);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <PageContainer title="Paysenta | My Contact" description="Contacts list">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card sx={{ padding: 0 }} elevation={0} variant={undefined}>
            <Grid
              container
              flexDirection={"row"}
              mt={1}
              spacing={1}
              alignItems={"center"}
            >
              <Grid item xs={8} md={10} lg={10}>
                <TextField
                  label="Search..."
                  variant="outlined"
                  placeholder="Enter contact name or account number"
                  fullWidth
                  value={searchText}
                  onKeyPress={handleKeyPress}
                  onChange={(e) => setSearchText(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleSearch}>
                          <Search />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={4} md={2} lg={2}>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ color: "white", backgroundColor: "#08ADAD" }}
                    sx={{ height: 52 }}
                    onClick={handleAddContactDrawerOpen}
                    fullWidth
                  >
                    Add Contact
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table>
                <TableHead style={{ backgroundColor: "#F9FAFB" }}>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedAllusersData}
                        indeterminate={selectedSomeusersData}
                        onChange={handleSelectAllusersData}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        Name
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <Typography
                        variant="h6"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        Email Address
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        Phone Number
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <Typography
                        variant="h6"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        Account Number
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <Typography
                        variant="h6"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        Action
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentContacts.map((contactData, index) => {
                    const isusersDataelected = selectedUsersData.includes(
                      contactData.name
                    );
                    return (
                      <TableRow
                        hover
                        // key={contactData.id}
                        // key={contactData.name}
                        key={index}
                        // selected={isusersDataelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isusersDataelected}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                              handleSelectOneUserData(event, contactData.name)
                            }
                            value={isusersDataelected}
                          />
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center" gap={2}>
                            <Avatar>{contactData.name[0]}</Avatar>
                            <Typography>{contactData.name}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          <Typography
                            variant="body1"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            {contactData.email}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body1"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            {contactData.phone}
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          <Typography
                            variant="body1"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            {contactData.accountNumber}
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          <Tooltip title="Delete" arrow>
                            <IconButton
                              color="error"
                              style={{
                                justifySelf: "center"
                              }}
                            >
                              <DeleteTwoToneIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Edit" arrow>
                            <IconButton
                              color="primary"
                              onClick={() => handleEditContact(contactData)}
                              style={{
                                justifySelf: "center"
                              }}
                            >
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <Grid
              container
              justifyContent="flex-end"
              mt={2}
              alignItems={"center"}
              gap={2}
            >
              <Box mt={2}>
                <Button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </Button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <Button
                  disabled={indexOfLastContact >= filteredData.length}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </Button>
              </Box>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      {/* edit modal section  */}
      <EditContactModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        contact={editedContact}
        onSave={(updatedContact) => {
          setEditedContact(updatedContact);
          setEditOpen(false);
        }}
      />

      {/* add contact modal  */}
      <AddContactModal
        open={addContactDrawerOpen}
        onClose={handleAddContactDrawerClose}
        contact={newContact}
        onSave={handleAddContact}
      />
    </PageContainer>
  );
};

ContactListTable.propTypes = {
  contactsList: PropTypes.array.isRequired
};

ContactListTable.defaultProps = {
  contactsList: []
};

export default ContactListTable;
