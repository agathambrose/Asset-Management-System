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
