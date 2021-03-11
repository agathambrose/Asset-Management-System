import {
  getAllByText,
  getQueriesForElement,
  render,
  screen,
} from "@testing-library/react";
import App from "../App";
import React from "react";
import ReactDOM from "react-dom";
import UnassignedAssetsPage from "../pages/UnassignedAssetsPage";

// test("renders Unassigned Assets text", () => {
//   render(<UnassignedAssetsPage />);
//   //   const text = screen.getByText(/All Assets/a);
//   const text = screen.getQueriesForElement("h2");
//   expect(text).toBeInTheDocument();
//   expect(text).toBe("All Assets");
//   expect(text).toBeTruthy();
// });

test("should render content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<UnassignedAssetsPage />, root);
  const {
    getByText,
    findAllByText,
    getByPlaceholderText,
  } = getQueriesForElement(root);

  expect(getByText("Unassigned Assets")).not.toBeNull();

  expect(root.querySelector("button").textContent).toBe("Search");
});