import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Badge,
  Button,
  Divider,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";

// components
import Profile from "./Profile";
import Notification from "./Notification";
import { IconBellRinging, IconMenu } from "@tabler/icons-react";

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: "70px"
    }
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        {/* mobile side bar toggler  */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline"
            }
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        {/* user name fetched from backend */}
        <Typography variant="h5">Welcome back</Typography>
        

        <Box flexGrow={1} />

        {/* right side  */}
        <Stack spacing={1} direction="row" alignItems="center">
         
          <Notification />
          <Profile />
        </Stack>
      </ToolbarStyled>
      <Divider />
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object
};

export default Header;
