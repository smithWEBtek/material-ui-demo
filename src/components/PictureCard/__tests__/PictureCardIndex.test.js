import { render, screen } from "@testing-library/react";
import PictureCardsIndex from "../PictureCardsIndex";

describe("renders the PictureCardsIndex component", () => {
  const cards = [1,2,3]
  test("renders the PictureCardsIndex", () => {
    render(<PictureCardsIndex cards={cards} />);
    const pictureCardsIndexHeaderElements = screen.getAllByRole("heading");
    expect(pictureCardsIndexHeaderElements.length).toBe(3);
  });
});
