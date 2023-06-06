import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="h1">
          SellerApp
        </Typography>
        <Typography
          sx={{
            paddingLeft: 2,
          }}
        >
          Bienvenue
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
