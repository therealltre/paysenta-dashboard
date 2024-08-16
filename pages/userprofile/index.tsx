import type { ReactElement } from "react";
import { Grid, Box } from "@mui/material";
import PageContainer from "../../src/components/container/PageContainer";
import FullLayout from "../../src/layouts/full/FullLayout";
import UserProfile from "../../src/components/userprofile/UserProfile";
import CreditCardInfo from "../../src/components/userprofile/CreditCardInfo";

// components

export default function ScoreFactors() {
  return (
    <PageContainer
      title="Xact Score | My Profile"
      description="User Dashboard"
    >
      <Box>
        {/* entire container grid */}

        <Grid container spacing={3}>
          {/* My account section */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <UserProfile />
              </Grid>
              {/* <Grid item xs={12}>
                <RecommendedActions />
              </Grid> */}
            </Grid>
          </Grid>

          {/* Cards grid  */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <CreditCardInfo />
              </Grid>
              <Grid item xs={12}>
                {/* <RecommendedActions /> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <CreditCardInfo />
              </Grid>
              <Grid item xs={12}>
                {/* <RecommendedActions /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

ScoreFactors.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
