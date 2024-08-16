import type { ReactElement } from "react";
import { Grid, Box } from "@mui/material";

// components
import PageContainer from "../../src/components/container/PageContainer";
import FullLayout from "../../src/layouts/full/FullLayout";
import MyCards from "../../src/components/details/MyCards";
// import ActivityGraph from "../../src/components/dashboard/ActivityGraph";
import CardStats from "../../src/components/details/CardStats";
import CardFunctions from "../../src/components/details/CardFunctions";
import WithdrawOverlay from "../../src/components/details/Transfers/withdraw/WithdrawOverlay";

export default function Home() {
  return (
    <PageContainer title="Paysenta | My Cards" description="manage cards">
      <Box>
        {/* entire container grid */}
        <Grid container spacing={3}>
          {/* left side grid  */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {/* <ActivityGraph /> */}
              </Grid>
            </Grid>
          </Grid>

          {/* right side grid */}
          <Grid item xs={12} lg={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <CardFunctions />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <MyCards />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {/* <ActivityGraph /> */}
                <CardStats />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
