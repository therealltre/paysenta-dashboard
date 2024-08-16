import { useState, ChangeEvent, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react';
import Head from 'next/head';
// import SidebarLayout from '@/layouts/SidebarLayout';
// import PageHeader from '@/content/Management/Users/settings/PageHeader';
// import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Tabs, Tab, Grid } from '@mui/material';
// import Footer from '@/components/Footer';
import { styled } from '@mui/material/styles';



// import ActivityTab from '../../src/components/settings/ActivityTab';
import EditProfileTab from '../../src/components/settings/EditProfileTab';
import SecurityTab from '../../src/components/settings/SecurityTab';
import NotificationsTab from '../../src/components/settings/NotificationTab';
import FullLayout from '../../src/layouts/full/FullLayout';


const TabsWrapper = styled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

function ManagementUserSettings() {
  const [currentTab, setCurrentTab] = useState<string>('edit_profile');

  const tabs = [
    { value: 'edit_profile', label: 'Edit Profile' },
    { value: 'security', label: 'Passwords/Security' },
    { value: 'notifications', label: 'Notifications' }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <>
      <Head>
        <title>User Settings - Applications</title>
      </Head>
      {/* <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper> */}
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <TabsWrapper
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </TabsWrapper>
          </Grid>
          <Grid item xs={12}>
            {currentTab === 'edit_profile' && <EditProfileTab />}
              {currentTab === 'security' && <SecurityTab />}
            {currentTab === 'notifications' && <NotificationsTab />}
          
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

ManagementUserSettings.getLayout = (page: string | number | boolean | ReactElement<any, string | JSXElementConstructor<
        // import SidebarLayout from '@/layouts/SidebarLayout';
        // import PageHeader from '@/content/Management/Users/settings/PageHeader';
        // import PageTitleWrapper from '@/components/PageTitleWrapper';
        any>> | ReactFragment | ReactPortal | null | undefined) => (
  <FullLayout>{page}</FullLayout>
);

export default ManagementUserSettings;
