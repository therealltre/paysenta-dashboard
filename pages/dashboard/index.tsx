import type { ReactElement } from "react";
import { Grid, Box } from "@mui/material";

// components
import PageContainer from "../../src/components/container/PageContainer";
import FullLayout from "../../src/layouts/full/FullLayout";
import ActivityChart from "../../src/components/dashboard/ActivityChart";
import RecentTransactions from "../../src/components/recentTransaction/RecentTransactions";
import SendOverview from "../../src/components/sendoverviewFull/SendOverview";
import ActivityGraph from "../../src/components/dashboard/ActivityGraph";

export default function Home() {
  return (
    <PageContainer
      title="Paysenta | Business Dashboard"
      description="Business Dashboard"
    >
      <Box>
        {/* entire container grid */}
        <Grid container spacing={3}>
          {/* left side grid  */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <SendOverview />
              </Grid>
            </Grid>
          </Grid>

          {/* right side grid */}
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {/* <ActivityChart /> */}
                <ActivityGraph />
              </Grid>

              <Grid item xs={12}>
                <RecentTransactions />
              </Grid>
            </Grid>
          </Grid>

          {/* Risk description & Score overview section */}

          {/* <Grid item xs={12}>
            <ScoreOverview />
          </Grid> */}
        </Grid>
      </Box>
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
