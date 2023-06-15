import ProductRoute from ".";
import { product } from "../../../fixtures";
import { render, screen } from "../../../test.utils";

const productId = 12;
const myProduct = product(productId);

describe("ProductRoute", () => {
  it("renders cicular progress while loading data", () => {
    render(<ProductRoute />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders a back button, a title and an image when data loaded", async () => {
    render(<ProductRoute />, {
      path: "/products/:productId",
      initialEntries: [`/products/${productId}`],
    });

    await screen.findByRole("heading", {
      level: 4,
      name: myProduct.name,
    });

    expect(
      screen.getByRole("img", { name: myProduct.name })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "back" })).toHaveAttribute(
      "href",
      "/products"
    );
  });
});
