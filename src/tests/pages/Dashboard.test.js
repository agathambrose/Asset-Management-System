import { render, screen } from "../../test-utils";
import { Dashboard } from "../../pages";

describe("<Dashboard />", () => {
  it("renders <Dashboard /> page correctly", () => {
    render(<Dashboard />);

    // Check if buttons are rendered
    expect(screen.getByText("Assets")).toBeInTheDocument();
    expect(screen.getByText("Assigned Assets")).toBeInTheDocument();
    expect(screen.getByText("Unassigned Assets")).toBeInTheDocument();
    expect(screen.getByText("Vendors")).toBeInTheDocument();
    expect(screen.getByText("Locations")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
  });
});
