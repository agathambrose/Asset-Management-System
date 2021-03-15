import { render } from "../../test-utils";
import { Profile } from "../../pages";

describe("<Profile />", () => {
  it("renders <Profile /> page correctly", () => {
    render(<Profile />);

    // Check if buttons are rendered
    const heading = document.querySelector("h2");
    expect(heading.textContent).toBe("User Profile");
  });
});
