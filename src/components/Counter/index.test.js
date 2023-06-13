import userEvent from "@testing-library/user-event";
import Counter from ".";
import { render, screen } from "../../test.utils";

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
const incButton = ({ step = 1 } = {}) =>
  screen.getByRole("button", { name: `+${step}` });
const decButton = ({ step = 1 } = {}) =>
  screen.getByRole("button", { name: `-${step}` });

describe("Counter", () => {
  it("renders the counter value and the 2 dec/inc buttons", () => {
    render(<Counter />);

    expect(counterValue()).toHaveTextContent("0");
    expect(incButton()).toBeInTheDocument();
    expect(decButton()).toBeInTheDocument();
  });

  it("increments/decrements properly the counter value", () => {
    render(<Counter />);

    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent("0");

    userEvent.click(decButton());
    expect(counterValue()).toHaveTextContent("0");
  });

  describe("while startValue === 10", () => {
    it("renders the counter value and the 2 dec/inc buttons", () => {
      render(<Counter startValue={10} />);

      expect(counterValue()).toHaveTextContent(/^10$/);
      expect(incButton()).toBeInTheDocument();
      expect(decButton()).toBeInTheDocument();
    });

    it("increments and decrements properly the counter value", () => {
      render(<Counter startValue={10} />);

      userEvent.click(incButton());
      expect(counterValue()).toHaveTextContent(/^10$/);

      userEvent.click(decButton());
      expect(counterValue()).toHaveTextContent(/^10$/);
    });
  });

  describe("while step = 3", () => {
    const step = 3;

    it("renders the counter value and the 2 dec/inc buttons", () => {
      render(<Counter step={3} />);

      expect(counterValue()).toHaveTextContent("0");
      expect(incButton({ step })).toBeInTheDocument();
      expect(decButton({ step })).toBeInTheDocument();
    });
  });
});
