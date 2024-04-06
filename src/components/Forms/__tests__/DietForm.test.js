import { render, screen } from "@testing-library/react";
import DietForm from "../DietForm";

describe("renders the DietForm component", () => {
  test("renders the DietForm heading", () => {
    render(<DietForm />);
    const dietFormElement = screen.getByTestId("diet-form");
    expect(dietFormElement).toBeInTheDocument();
  });
});
