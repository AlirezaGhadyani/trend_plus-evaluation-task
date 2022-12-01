import { FC } from "react";
import {
  AppBar as MuiAppBar,
  Container,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useLogoutUser } from "../../../hooks";

const AppBar: FC<{ title: string }> = ({ title }) => {
  const handleLogoutUser = useLogoutUser();

  return (
    <MuiAppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button
            variant="text"
            color="inherit"
            size="large"
            endIcon={<Logout fontSize="medium" color="inherit" />}
            onClick={handleLogoutUser}
          >
            logout
          </Button>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
