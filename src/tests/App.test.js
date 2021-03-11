import {
  getAllByText,
  getQueriesForElement,
  render,
  screen,
  getByLabelText,
} from "@testing-library/react";
import App from "../App";
import React from "react";
import ReactDOM from "react-dom";







// test("renders App text", () => {
//   render(<App/>);
//   //   const text = screen.getByText(/All Assets/a);
//   const text = screen.getQueriesForElement("h2");

//   expect(text).toBeInTheDocument();
//   expect(text).toBe("HASOB");
//   expect(text).toBeTruthy();
// });

test("should render content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
  const {
    getByText,
    findAllByText,
    getByPlaceholderText,
  } = getQueriesForElement(root);

  expect(getByText("HASOB")).not.toBeNull();

  // expect(root.querySelector("button").textContent).toBe("Search");
});
// test("renders HASOB text", () => {
//   render(<App />);
//   const text = screen.getByText(/HASOB/i);
//   expect(text).toBeInTheDocument();
//   expect(root.querySelector("p").toBe("from zero to hero"));
// });

// test("confirm name",() =>{
//   const name = "john";
//   expect(name).toBe("john")
// })

// test("should render content", () => {
//   const root = document.createElement("div");
//   ReactDOM.render(<App />, root);
//   const {
//     getByText,
//     findAllByText,
//     getByPlaceholderText,
//     findBy
//   } = getQueriesForElement(root);
//   expect(getByText("HASOB")).not.toBeNull();
//   expect(findAllByText("Click me")).not.toBeNull();
//   expect(getByPlaceholderText("input here")).toBeTruthy();
//   expect(getByText("Span here")).toBeTruthy();

  // expect(root.querySelector("h2").textContent).toBe("from zero to hero");

  // expect(root.querySelector("button").textContent).toBe("Click me");
// });
