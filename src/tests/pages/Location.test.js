import { getAllByText, getQueriesForElement, render, screen } from "../../test-utils";

import LocationPage from "../../pages/Locations";

test("should render content", () => {
  render(<LocationPage />);
});
