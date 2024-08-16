import { useState } from "react";
import { Typography, Box, Grid, Button, Card } from "@mui/material";
import WithdrawOverlay from "./Transfers/withdraw/WithdrawOverlay";
import TopupOverlay from "./Transfers/topup/TopupOverlay";

function CardFunction() {
  const [showWithdrawOverlay, setShowWithdrawOverlay] = useState(false);
  const [showTopupOverlay, setShowTopupOverlay] = useState(false);

  const toggleWithdrawOverlay = () => {
    setShowWithdrawOverlay(true);
  };

  const toggleTopupOverlay = () => {
    setShowTopupOverlay(true);
  };

  return (
    <Card
      sx={{ padding: 0, position: "relative" }}
      elevation={9}
      variant={undefined}
    >
      <Box p={2} gap={2}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} lg={6} container direction="column">
            <Grid item xs={12}>
              <Typography variant="h4" mb={2}>
                Wallet
              </Typography>
              <Typography variant="h4" color="primary">
                GHS 1,300
              </Typography>
              <Typography variant="body1" mb={2}>
                Last Transaction
              </Typography>
              <Button
                variant="contained"
                style={{
                  color: "white",
                  marginRight: "8px",
                  backgroundColor: "#08ADAD"
                }}
                onClick={toggleWithdrawOverlay}
              >
                Withdraw
              </Button>
              <Button variant="outlined" onClick={toggleTopupOverlay}>
                Top up
              </Button>
            </Grid>
          </Grid>

          {/* total balance section */}
          <Grid
            item
            xs={8}
            lg={6}
            justifyContent="flex-end"
            position="relative"
            sx={{
              position: "absolute",
              top: -70,
              right: -70,
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              backgroundColor: "#08ADAD",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              flexDirection: "column",
              color: "white",
              textAlign: "center"
            }}
          >
            <Typography variant="h1" ml={2}>
              GHS
            </Typography>
            <Typography variant="h1" ml={2}>
              13,800
            </Typography>
            <Typography variant="body1" ml={2}>
              Total balance
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* Conditionally render WithdrawOverlay based on state */}
      {showWithdrawOverlay && (
        <WithdrawOverlay
          open={showWithdrawOverlay}
          onClose={() => setShowWithdrawOverlay(false)}
        />
      )}

      {/* Conditionally render TopupOverlay based on state */}
      {showTopupOverlay && (
        <TopupOverlay
          open={showTopupOverlay}
          onClose={() => setShowTopupOverlay(false)}
        />
      )}
    </Card>
  );
}

export default CardFunction;
