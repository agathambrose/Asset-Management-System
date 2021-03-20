import { getAllByText, getQueriesForElement, queryByText, render, screen } from "../../test-utils";

import ReactDOM from "react-dom";
import AllAssets from "../../pages/AllAssets";
import { array } from "yup/lib/locale";

test("should render content", () => {
  render(<AllAssets />);
});

describe("<AllAssets/>", () => {
  it("renders <AllAssets/> header corectly", () => {
    render(<AllAssets />);
    expect(screen.getByText("All Assets")).toBeInTheDocument();
  });

  it("renders input and search button correctly", () => {
    render(<AllAssets />);
    expect(document.querySelector("input")).toBeTruthy();
    expect(screen.getByText("Search")).toBeTruthy();
  });

  it("renders all row header", () => {
    render(<AllAssets />);
    const nodeList = document.querySelectorAll("h4");
    const allArray = Array.from(nodeList);
    const arrayOfTexts = allArray.map(item => item.textContent);

    expect(arrayOfTexts).toBeTruthy();
  });
});
