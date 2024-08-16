// pages/index.tsx
import React, { ReactElement } from 'react';
import TransactionTable from '../../src/components/activity/Activity';
import DashboardCard from '../../src/components/shared/DashboardCard';
import { Box, Grid } from '@mui/material';
import FullLayout from '../../src/layouts/full/FullLayout';
import { activityData } from '../../src/components/recentTransaction/ActivityData';


export default function Activity() {
    return (
      <DashboardCard
      // title="Activities"
      >
        <Box>
          {/* entire container grid */}
          <Grid container spacing={3}>
        
            <Grid item xs={12} lg={12}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                <TransactionTable data={activityData}  />
                </Grid>
              </Grid>
            </Grid>
            
          </Grid>
        </Box>
      </DashboardCard>
    );
  }
  
  Activity.getLayout = function getLayout(page: ReactElement) {
    return <FullLayout>{page}</FullLayout>;
  };