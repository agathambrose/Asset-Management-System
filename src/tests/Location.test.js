import {
  getAllByText,
  getQueriesForElement,
  render,
  screen,
} from "@testing-library/react";
import App from "../App";
import React from "react";
import ReactDOM from "react-dom";
import LocationPage from "../pages/LocationPage";

// test("renders Location text", () => {
//   render(<LocationPage />);
//   //   const text = screen.getByText(/All Assets/a);
//     const text = screen.getQueriesForElement("h2");
//   expect(text).toBeInTheDocument();
//   expect(text).toBe("Location");
//   expect(text).toBeTruthy();
// });

test("should render content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<LocationPage />, root);
  const {
    getByText,
    findAllByText,
    getByPlaceholderText,
  } = getQueriesForElement(root);

  expect(getByText("Location")).not.toBeNull();

  expect(root.querySelector("button").textContent).toBe("Search");
});