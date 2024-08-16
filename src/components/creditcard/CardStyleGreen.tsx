// components/CreditCard.tsx
import React from "react";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const CreditCard: React.FC = () => (
  <Card
    style={{
      backgroundColor: "#08ADAD",
      color: "white",
      width: "327px",
      height: "190px",
      borderRadius: "10px"
    }}
  >
    <CardContent style={{padding: "20px", }}>
      <Grid
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack direction="row" justifyContent={"space-between"} alignItems="start" width={"100%"}>
          <Image
            src="/images/goldchip-signal.png"
            alt=""
            width={77}
            height={32}
          />
          <Image
            src="/images/paysenta-p.png"
            alt=""
            width={24}
            height={36}
            style={{ justifyContent: "end" }}
          />
        </Stack>
      
      </Grid>

      <div style={{ marginTop: "27px" }}>
        <Typography variant="h4">**** **** **** 1234</Typography>
      </div>

      <Stack direction="row" justifyContent={"space-between"} alignItems="end" width={"100%"}>
        <div style={{ marginTop: "10px" }}>
          <Typography variant="body2">Card Holder</Typography>
          <Typography variant="h5">John Doe</Typography>
        </div>
        <div style={{ marginTop: "18px" }}>
          <Typography variant="body2">Expiry Date</Typography>
          <Typography variant="h5">12/23</Typography>
        </div>
        <Image
            src="/images/visa-white-circles.png"
            alt=""
            width={43}
            height={26}
            
          />
      </Stack>
    </CardContent>
  </Card>
);

export default CreditCard;
