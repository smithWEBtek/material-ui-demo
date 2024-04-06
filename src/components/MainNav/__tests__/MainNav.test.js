import { render, screen } from "@testing-library/react";
import MainNav from "../MainNav";

test('renders MainNav element', () => {
  render(<MainNav />);
  const mainNavElement = screen.getByRole('banner');
  expect(mainNavElement).toBeInTheDocument();
});
