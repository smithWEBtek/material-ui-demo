import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

test('renders Footer element', () => {
  render(<Footer />);
  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
});
