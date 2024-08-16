import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Stack,
  Typography,
  Grid,
  Divider,
  Box,
  Avatar,
  Button
} from "@mui/material";
import DashboardCard from "../shared/DashboardCard";
import Image from "next/image";
import { IconCreditCard } from "@tabler/icons-react";
import AddAccountModal from "./AddAccountModal";

const CreditCardInfo = () => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;

  const [accountData, setAccountData] = React.useState({
    // accountName: "John Wayne",
    accountNumber: "5167829487561673",
    bankName: "Stanbic Bank",
    accountName: "John Wayne"
  });

  const [addBankModalOpen, seAddBankModalOpen] = React.useState(false);

  const handleAddBankModalOpen = () => {
    seAddBankModalOpen(true);
  };

  const handleAddBankModalClose = () => {
    seAddBankModalOpen(false);
  };

  const handleSaveChanges = (updatedData: any) => {
    setAccountData(updatedData);
  };

  return (
    <DashboardCard title={accountData.bankName}>
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
              gap={6}
              direction="row"
              spacing={1}
              my={2}
              alignItems="start"
              width={"100%"}
            >
              <Box>
                <Box flex="1" textAlign="left">
                  <Stack direction="row" spacing={1} mt={1} alignItems="center">
                    <Avatar sx={{ bgcolor: "white", width: 27, height: 27 }}>
                      <IconCreditCard width={60} color="#1E4939" />
                    </Avatar>
                    <Stack direction={{ xs: "row", md: "column" }}>
                      <Typography variant="h6" fontWeight={700} mr={1}>
                        {accountData.accountNumber}{" "}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography variant="h6" mt={1}>{accountData.accountName}</Typography>
                </Box>
              </Box>

              {/* bank image  */}
              <Avatar
                src={"/images/bank/stanbic-bank.jpeg"}
                alt={"bank-image"}
                sx={{ width: 56, height: 56 }}
              />
            </Stack>
          </Grid>
        </Grid>
        {/* <Stack
          flexDirection={"row"}
          alignItems={"start"}
          width={{ base: 100, md: "100%" }}
          gap={6}
        >
          <Button
            variant="contained"
            sx={{ color: "white", mt: 2 }}
            style={{ backgroundColor: "#1E4939" }}
            onClick={handleAddBankModalOpen}
          >
            Connect Bank Account
          </Button>
        </Stack> */}
        <AddAccountModal
          open={addBankModalOpen}
          onClose={handleAddBankModalClose}
          accountData={accountData}
          onSave={handleSaveChanges}
        />
      </>
    </DashboardCard>
  );
};

export default CreditCardInfo;
