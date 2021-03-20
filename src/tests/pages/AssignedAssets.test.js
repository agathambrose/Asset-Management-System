import { getAllByText, getQueriesForElement, render, screen } from "../../test-utils";

import AssignedAssets from "../../pages/AssignedAssets";

test("should render content", () => {
  render(<AssignedAssets />);
});

describe("<AllAssets/>", () => {
  it("renders <AllAssets/> header corectly", () => {
    render(<AssignedAssets />);
    expect(screen.getByText("Assigned Assets")).toBeInTheDocument();
  });

  it("renders input and search button correctly", () => {
    render(<AssignedAssets />);
    expect(document.querySelector("input")).toBeTruthy();
    expect(screen.getByText("Search")).toBeTruthy();
  });

  it("renders all row header", () => {
    render(<AssignedAssets />);
    const nodeList = document.querySelectorAll("h4");
    const allArray = Array.from(nodeList);
    const arrayOfTexts = allArray.map(item => item.textContent);

    expect(arrayOfTexts).toBeTruthy();
  });
});
