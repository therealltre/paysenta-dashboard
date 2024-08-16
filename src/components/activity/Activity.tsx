import React, { FC, useState, useEffect, ChangeEvent } from "react";
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
  Typography
} from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import Tooltip from "@mui/material/Tooltip";
import { Search, IosShare } from "@mui/icons-material";
import PageContainer from "../container/PageContainer";
import { activityData } from "../recentTransaction/ActivityData";

interface ActivityData {
  name: string;
  date: string;
  time: string;
  transactionId: string;
  amount: number;
  accountNumber: string;
  status: string;
  type: string;
}

interface TransactionTableProps {
  data: ActivityData[];
}

interface StatusCellProps {
  status: string;
}

const StatusCell: React.FC<StatusCellProps> = ({ status }) => {
  let statusStyle: React.CSSProperties = {};

  switch (status.toLowerCase()) {
    case "success":
      statusStyle = {
        backgroundColor: "#ECFDF3",
        // border: "1px solid green",
        padding: "8px",
        borderRadius: "5px",
        color: "green",
        textAlign: "center"
      };
      break;
    case "failed":
      statusStyle = {
        backgroundColor: "#FFF5F5",
        // border: "1px solid red",
        padding: "8px",
        borderRadius: "5px",
        color: "#FF9999",
        textAlign: "center"
      };
      break;
    case "pending":
      statusStyle = {
        backgroundColor: "#FFE0C3",
        // border: "1px solid orange",
        padding: "8px",
        borderRadius: "5px",
        color: "#F5791F",
        textAlign: "center"
      };
      break;
    default:
      break;
  }

  return <div style={statusStyle}>{status}</div>;
};

const itemsPerPage = 7;

const TransactionActivity: FC<TransactionTableProps> = ({ data }) => {
  const [contactName, setContactName] = useState<string>("");
  const [transactionId, setTransactionId] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedusersData, setSelectedusersData] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const filteredData = data.filter(
    (transaction) =>
      (transaction.name.toLowerCase().includes(contactName.toLowerCase()) ||
        transaction.transactionId
          .toLowerCase()
          .includes(transactionId.toLowerCase())) &&
      Object.values(transaction).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
      
  );

  const handleExport = () => {
    // Add logic to export data (e.g., to CSV or Excel)
    console.log("Exporting data:", filteredData);
  };

  const handleSearch = () => {
    // Logic to perform search based on contactName, transactionId, and searchTerm
    // For now, let's log the filtered data to the console
    console.log("Search results:", filteredData);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  //  handling checkbox functionality
  const handleSelectAllusersData = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedusersData(
      event.target.checked
        ? activityData.map((transaction) => transaction.name)
        : []
    );
    setSelectAll(event.target.checked); // Update the state
  };

  //  handling check all boxes functionality
  const handleSelectOneuserData = (
    _event: ChangeEvent<HTMLInputElement>,
    userDataId: string
  ): void => {
    if (!selectedusersData.includes(userDataId)) {
      setSelectedusersData((prevSelected) => [...prevSelected, userDataId]);
    } else {
      setSelectedusersData((prevSelected) =>
        prevSelected.filter((id) => id !== userDataId)
      );
    }
  };

  const selectedSomeusersData =
    selectedusersData.length > 0 &&
    selectedusersData.length < activityData.length;

  const selectedAllusersData = selectedusersData.length === activityData.length;

  const toggleSelectTransaction = (transactionId: string) => {};

  // const selectedBulkActions = selectedUsersData.length > 0;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(filteredData.length / itemsPerPage)
  );

  const indexOfLastContact = currentPage * itemsPerPage;
  const indexOfFirstContact = indexOfLastContact - itemsPerPage;
  const currentContacts = filteredData.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <PageContainer
      title="Paysenta | Activities"
      description="Transaction Activities"
    >
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
                  value={searchTerm}
                  onKeyPress={handleKeyPress}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                    variant="outlined"
                    color="primary"
                    sx={{ height: 52 }}
                    onClick={handleExport}
                    fullWidth
                  >
                    <IosShare />
                    Export
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table>
                <TableHead style={{ backgroundColor: "#F9FAFB" }}>
                  <TableRow>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <Checkbox
                        checked={selectedAllusersData}
                        indeterminate={selectedSomeusersData}
                        onChange={handleSelectAllusersData}
                      />
                    </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      Transaction ID
                    </TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      Account Number
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentContacts.map((transaction, index) => {
                    const isusersDataelected = selectedusersData.includes(
                      transaction.name
                    );
                    return (
                      <TableRow key={index}>
                        <TableCell
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          <Checkbox
                            color="primary"
                            checked={isusersDataelected}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                              handleSelectOneuserData(event, transaction.name)
                            }
                            value={isusersDataelected}
                          />
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center" gap={2}>
                            <Avatar>{transaction.name[0]}</Avatar>
                            <Box
                              alignItems={"center"}
                              justifyItems={"Start"}
                              gap={0}
                            >
                              <Typography>{transaction.name}</Typography>
                              <Typography>{transaction.type}</Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          <Box>
                            <Typography> {transaction.date}</Typography>
                            <Typography>at {transaction.time}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          {transaction.transactionId}
                        </TableCell>
                        <TableCell>GHS {transaction.amount}</TableCell>
                        <TableCell
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          {transaction.accountNumber}
                        </TableCell>
                        {/* <TableCell>{transaction.status}</TableCell> */}
                        <TableCell
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          <StatusCell status={transaction.status} />
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
              <Button disabled={currentPage === 1} onClick={handlePrevPage}>
                Previous
              </Button>
              <span>{`Page ${currentPage} of ${totalPages}`}</span>
              <Button
                disabled={indexOfLastContact >= filteredData.length}
                onClick={handleNextPage}
              >
                Next
              </Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TransactionActivity;
