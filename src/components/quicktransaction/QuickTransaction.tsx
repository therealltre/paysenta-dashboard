// components/QuickTransactions.tsx

import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid, InputAdornment, Stack, Typography } from "@mui/material";
import { IconPlus } from "@tabler/icons-react";
import IconButtonWithSubtitle from "./ReceiveTopup";

interface QuickTransactionsProps {
  contacts: string[]; // Array of contact names
}

const QuickTransactions: React.FC<QuickTransactionsProps> = ({ contacts }) => {
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);

  const handleContactChange = (contact: string) => {
    setSelectedContact(contact);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));
  };

  const handleAddContact = () => {
    // Add logic to add a new contact
    console.log("Adding another contact");
  };

  const handleSendMoney = () => {
    // Add logic to send money to the selected contact
    console.log(`Sending ${amount} Ghana Cedis to ${selectedContact}`);
  };

  return (
    <div>
      <Typography variant="h4" marginBottom={3} marginTop={3}>
        Quick transactions
      </Typography>

      <Typography variant="body1" marginBottom={3} marginTop={3}>
        Recent Contacts
      </Typography>

      {/* Avatar and contact addition */}
      <Grid container flexDirection={"row"}>
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            {contacts.map((contact) => (
              <Avatar
                key={contact}
                onClick={() => handleContactChange(contact)}
                style={{
                  cursor: "pointer",
                  margin: "0 12px",
                  border:
                    selectedContact === contact ? "3px solid #08ADAD" : "none"
                }}
              >
                {contact.charAt(0)}
              </Avatar>
            ))}

            <Button
              onClick={handleAddContact}
              style={{ borderRadius: "10%", backgroundColor: "#F5F6FA" }}
            >
              <IconPlus />
            </Button>
          </div>
        </Grid>
      </Grid>

      {/* Input field and send money button */}
      <Stack style={{ marginTop: "20px" }} spacing={2}>
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

        <Button
          variant="contained"
          sx={{ color: "contained", mt: 1, mr: 2 }}
          style={{ backgroundColor: "#08ADAD", color: "white", height: "54px" }}
          onClick={handleSendMoney}
          disabled={!selectedContact || amount <= 0}
        >
          Send Money
        </Button>
      </Stack>

      {/* secondary options  (receive and top-up) */}
      <Stack flexDirection={"row"} gap={2} marginTop={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <Stack alignItems="center" justifyContent="center">
              <Button
                variant="outlined"
                color="primary"
                style={{ height: 54, justifyContent: "center", gap: 10 }}
                fullWidth
              >
                <img
                  src="/images/receive-money.png"
                  alt=""
                  width={22}
                  height={20}
                  style={{ alignItems: "center" }}
                />
                Receive
              </Button>
              {/* <Typography variant="subtitle1">Receive</Typography> */}
            </Stack>
          </Grid>

          {/* <Grid item xs={12} lg={6}>
            <Stack alignItems="center" justifyContent="center">
              <Button
                variant="outlined"
                color="primary"
                style={{ height: 54 }}
                fullWidth
              >
                <img
                  src="/images/top-up.png"
                  alt=""
                  width={40}
                  height={30}
                  style={{ alignItems: "center" }}
                />
              </Button>
              <Typography variant="subtitle1">Top-up</Typography>
            </Stack>
          </Grid> */}
        </Grid>
      </Stack>
    </div>
  );
};

export default QuickTransactions;
