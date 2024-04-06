import { render, screen } from "@testing-library/react";
import PictureCard from "../PictureCard";

describe("renders the PictureCard component", () => {
  test("renders the PictureCard heading", () => {
    render(<PictureCard />);
    const pictureCardElement = screen.getByRole("heading");
    expect(pictureCardElement).toBeInTheDocument();
  });

  test("renders the PictureCard description", () => {
    render(<PictureCard />);
    const pictureCardElement = screen.getByText("PictureCard description");
    expect(pictureCardElement).toBeInTheDocument();
  });

  test("renders the default image title", () => {
    render(<PictureCard />);
    const cat = screen.getByTitle("PictureCard imageTitle"); // finds first one, returns it
    expect(cat).toBeInTheDocument();
  });

  test("renders the default cat image", async () => {
    render(<PictureCard />);
    const catImage = screen.getByTestId("card-media-image");
    expect(catImage).toBeInTheDocument();
  });
});
