import { render, screen } from "../test-utils";
import App from "../App";

describe("<App />", () => {
  it("renders <App /> component correctly", () => {
    render(<App />);
  });

  it("redirects to the sign in page", () => {
    render(<App />);
    const signInHeading = screen.getByTestId("sign-in");
    expect(signInHeading).toBeInTheDocument();
  });
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
