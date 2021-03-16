import { render } from "../../test-utils";
import { Profile } from "../../pages";

describe("<Profile />", () => {
  it("renders <Profile /> page correctly", () => {
    render(<Profile />);

    const heading = document.querySelector("h2");
    expect(heading.textContent).toBe("User Profile");
  });
});
