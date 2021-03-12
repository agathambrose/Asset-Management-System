import { getAllByText, getQueriesForElement, render, screen } from "@testing-library/react";
import App from "../../App";

import ReactDOM from "react-dom";
import UnassignedAssets from "../../pages/UnassignedAssets";

// test("renders Unassigned Assets text", () => {
//   render(<UnassignedAssets />);
//   //   const text = screen.getByText(/All Assets/a);
//   const text = screen.getQueriesForElement("h2");
//   expect(text).toBeInTheDocument();
//   expect(text).toBe("All Assets");
//   expect(text).toBeTruthy();
// });

test("should render content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<UnassignedAssets />, root);
  const { getByText, findAllByText, getByPlaceholderText } = getQueriesForElement(root);

  expect(getByText("Unassigned Assets")).not.toBeNull();

  expect(root.querySelector("button").textContent).toBe("Search");
});
