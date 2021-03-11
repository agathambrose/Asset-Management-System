import { render, screen } from "../../test-utils";
import { SignUp } from "../../pages";

describe("<SignUp />", () => {
  it("renders <SignUp /> page correctly", () => {
    render(<SignUp />);

    const inputs = document.querySelectorAll("input");
    expect(inputs.length).toBe(8);
  });
});
