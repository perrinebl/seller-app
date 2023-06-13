import ProductRoute from ".";
import { render, screen } from "../../../test.utils";

describe("ProductRoute", () => {
  it("renders cicular progress while loading data", () => {
    render(<ProductRoute />);

    expect(screen.getByRole("azaz")).toBeInTheDocument();
  });

  it.todo("renders a back button, a title and an image when data loaded");
});
