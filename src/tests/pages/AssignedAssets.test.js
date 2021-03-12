import { getAllByText, getQueriesForElement, render, screen } from "@testing-library/react";
import App from "../../App";

import ReactDOM from "react-dom";
import AssignedAssets from "../../pages/AssignedAssets";

// test("renders Assigned Assets text", () => {
//   render(<AssignedAssets />);
//     // const text = screen.getByText("All Assets");
//     const text=screen.getQueriesForElement("h2");
//   expect(text).toBeInTheDocument();
//   expect(text).toBe("All Assets");
//   expect(text).toBeTruthy();
// });

test("should render content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<AssignedAssets />, root);
  const { getByText, findAllByText, getByPlaceholderText } = getQueriesForElement(root);

  expect(getByText("Assigned Assets")).not.toBeNull();

  expect(root.querySelector("button").textContent).toBe("Search");
});
