import { render } from "../../test-utils";
import { SignIn } from "../../pages";

describe("<SignIn />", () => {
  it("renders <SignIn /> page correctly", () => {
    render(<SignIn />);
    //   Renders 3 inputs, (two text and one checkbox)
    const inputs = document.querySelectorAll("input");
    expect(inputs.length).toBe(3);
  });
});
