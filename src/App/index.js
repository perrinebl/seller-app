import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "../components/Header";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      MAIN
    </ThemeProvider>
  );
}
