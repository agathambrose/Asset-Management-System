import { getAllByText, getQueriesForElement, render, screen } from "../../test-utils";
import App from "../../App";

import UnassignedAssets from "../../pages/UnassignedAssets";

test("should render content", () => {
  render(<UnassignedAssets />);
});

describe("<AllAssets/>", () => {
  it("renders <AllAssets/> header corectly", () => {
    render(<UnassignedAssets />);
    expect(screen.getByText("Unassigned Assets")).toBeInTheDocument();
  });

  it("renders input and search button correctly", () => {
    render(<UnassignedAssets />);
    expect(document.querySelector("input")).toBeTruthy();
    expect(screen.getByText("Search")).toBeTruthy();
  });

  it("renders all row header", () => {
    render(<UnassignedAssets />);
    const nodeList = document.querySelectorAll("h4");
    const allArray = Array.from(nodeList);
    const arrayOfTexts = allArray.map(item => item.textContent);

    expect(arrayOfTexts).toBeTruthy();
  });
});
