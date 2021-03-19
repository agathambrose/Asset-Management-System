import { getAllByText, getQueriesForElement, render, screen } from "../../test-utils";

import Location from "../../pages/Locations";

test("should render content", () => {
  render(<Location />);
});

describe("<AllAssets/>", () => {
  it("renders <AllAssets/> header corectly", () => {
    render(<Location />);
    expect(screen.getByText("Locations")).toBeInTheDocument();
  });

  it("renders input and search button correctly", () => {
    render(<Location />);
    expect(document.querySelector("input")).toBeTruthy();
    expect(screen.getByText("Search")).toBeTruthy();
  });

  it("renders all row header", () => {
    render(<Location />);
    const nodeList = document.querySelectorAll("h4");
    const allArray = Array.from(nodeList);
    const arrayOfTexts = allArray.map(item => item.textContent);

    expect(arrayOfTexts).toBeTruthy();
  });
});
