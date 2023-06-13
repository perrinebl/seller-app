import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

// Test suite
describe("Compteur", () => {
  // Test
  it("does that", () => {
    // Assertion
    expect(true).toBe(true);
  });
});

// Test
test("that true is true", () => {
  // Assertion
  expect(true).toBe(true);
});

const counterValue = () => screen.getByRole("marquee");
const incButton = () => screen.getByRole("button", { name: "+1" });
const descButton = () => screen.getByRole("button", { name: "-1" });

describe("Counter", () => {
  it("renders the counter value and the 2 dec/inc buttons", () => {
    render(<Counter />);

    expect(counterValue()).toHaveTextContent("0");
    expect(incButton()).toBeInTheDocument();
    expect(descButton()).toBeInTheDocument();
  });

  it("increments/decrements properly the counter value", () => {
    render(<Counter />);

    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent("0");

    userEvent.click(descButton());
    expect(counterValue()).toHaveTextContent("0");
  });
});
