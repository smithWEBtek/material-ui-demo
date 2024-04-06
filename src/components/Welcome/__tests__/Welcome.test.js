import { render, screen } from "@testing-library/react";
import Welcome from "../Welcome";

test('renders Welcome element', () => {
  render(<Welcome />);
  const footerElement = screen.getByTestId('welcome');
  expect(footerElement).toBeInTheDocument();
});
