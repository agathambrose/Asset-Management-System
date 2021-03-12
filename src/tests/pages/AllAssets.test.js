import {
  getAllByText,
  getQueriesForElement,
  queryByText,
  render,
  screen,
} from "@testing-library/react";

import ReactDOM from "react-dom";
import AllAssets from "../../pages/AllAssets";

// test("renders All Assets text", () => {
//   render(<AllAssets/>);
// //   const text = screen.getByText(/All Assets/a);
//     const text = screen.getQueriesForElement("h2");

//   expect(text).toBeInTheDocument();
//   expect(text).toBe("All Assets");
//   expect(text).toBeTruthy();
// });

test("should render content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<AllAssets />, root);
  const { getByText, findAllByText, getByLabelText, getByPlaceholderText } = getQueriesForElement(
    root
  );

  expect(getByText("All Assets")).not.toBeNull();
  // expect(getByLabelText('button')).toBe("Search");
  expect(root.querySelector("button").textContent).toBe("Search");
  //   expect(root.querySelector("h4").textContent).toBe("S/N");
  //   expect(root.querySelector("h4").textContent).toBe("Name");
  //   expect(root.querySelector("h4").textContent).toBe("Categories");
  //   expect(root.querySelector("h4").textContent).toBe("Quantity");
  //   expect(root.querySelector("h4").textContent).toBe("Location");

  //   expect(findAllByText("Click me")).not.toBeNull();
  //   expect(getByPlaceholderText("input here")).toBeTruthy();

  //   expect(root.querySelector("button").textContent).toBe("Click me");
});
