import { createTheme, ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import { node } from "prop-types";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

const client = new QueryClient();

/**
 * AppTechnicalContext
 * We SHOULD use the exact same order than inside our <App /> for all our providers.
 */
const AppTechnicalContext = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={createTheme()}>
        <MemoryRouter>{children}</MemoryRouter>
      </ThemeProvider>
    </QueryClientProvider>
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
