import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PrimaryButton } from "../components/atoms";

describe("Primary button", () => {
  test("Primary button should be renderd with the given props", () => {
    const { getByText } = render(<PrimaryButton text="hello world" />);
    expect(getByText("hello world")).toBeInTheDocument();
  });
  test("Primary button shoul call the function once clicked", () => {
    const func = jest.fn();
    const { getByText } = render(
      <PrimaryButton text="Click Me" onClick={func} />
    );
    const btn = getByText("Click Me");
    fireEvent.click(btn);

    expect(func).toBeCalled();
  });
});
