import type { ReactElement } from "react";
import { Grid, Box } from "@mui/material";

// components
import PageContainer from "../../src/components/container/PageContainer";
import FullLayout from "../../src/layouts/full/FullLayout";
import ContactsList from "../../src/components/mycontacts/ContactsTable";
import DashboardCard from "../../src/components/shared/DashboardCard";
// import RecentTransactions from "../../src/components/dashboard/RecentTransactions";
// import SendOverview from "../../src/components/sendoverviewFull/SendOverview";
// import ActivityGraph from "../../src/components/dashboard/ActivityGraph";

export default function Contacts() {
  return (
    <DashboardCard
    // title="My Contacts"
    >
      <Box>
        {/* entire container grid */}
        <Grid container spacing={3}>
      
          <Grid item xs={12} lg={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
              <ContactsList contactsList={[]} />
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
      </Box>
    </DashboardCard>
  );
}

Contacts.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
