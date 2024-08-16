import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button
} from "@mui/material";

import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DoneTwoToneIcon from "@mui/icons-material/DoneTwoTone";
import DashboardCard from "../shared/DashboardCard";

//   import Text from '@/components/Text';
//   import Label from '@/components/Label';

function EditProfileTab() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                Personal Details
              </Typography>
              <Typography variant="subtitle2">
                Manage informations related to your personal details
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button>
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Name:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Typography color="black">
                    <b>Craig Smith</b>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Date of birth:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Typography color="black">
                    <b>15 March 1977</b>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Address:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: "auto", sm: 300 } }}>
                    <Typography color="black">
                      123 Ave, Accra - Ghana
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                Account Settings
              </Typography>
              <Typography variant="subtitle2">
                Manage details related to your account
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button>
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Language:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Typography color="black">
                    <b>English (US)</b>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Timezone:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Typography color="black">
                    <b>GMT +2</b>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Account status:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box
                    component="span"
                    style={{
                      backgroundColor: "#EDFAE6",
                      padding: 6,
                      color: "#08ADAD"
                    }}
                  >
                    <label color="#08ADAD">
                      <DoneTwoToneIcon fontSize="small" />
                      <b>Active</b>
                    </label>
                  </Box>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                Email Addresses
              </Typography>
              <Typography variant="subtitle2">
                Manage details related to your associated email addresses
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button>
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Email ID:
                  </Box>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  sm={8}
                  md={9}
                  flexDirection={"row"}
                  gap={2}
                >
                  <Typography color="black">
                    <b>example@demo.com</b>
                  </Typography>
                  <Box
                    component="span"
                    style={{
                      backgroundColor: "#EDFAE6",
                      padding: 6,
                      color: "#08ADAD"
                    }}
                  >
                    <label color="white">verified</label>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Mobile Number:
                  </Box>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  sm={8}
                  md={9}
                  flexDirection={"row"}
                  gap={2}
                >
                  <Typography color="black">
                    <b>*******784</b>
                  </Typography>
                  <Box
                    component="span"
                    style={{
                      backgroundColor: "#EDFAE6",
                      padding: 6,
                      color: "#08ADAD"
                    }}
                  >
                    <label color="white">
                      <DoneTwoToneIcon fontSize="small" /> Primary
                    </label>
                  </Box>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default EditProfileTab;
