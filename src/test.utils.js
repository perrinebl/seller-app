import { createTheme, ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import { node } from "prop-types";
import { MemoryRouter } from "react-router-dom";

const AppTechnicalContext = ({ children }) => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
    </MemoryRouter>
  );
};

AppTechnicalContext.propTypes = {
  children: node,
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AppTechnicalContext, ...options });

// re-export everything
// eslint-disable-next-line import/export
export * from "@testing-library/react";
// eslint-disable-next-line import/export
export { customRender as render };
