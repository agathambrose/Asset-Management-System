import { getAllByText, getQueriesForElement, render, screen } from "../../test-utils";

import LocationPage from "../../pages/Location";

test("should render content", () => {
  render(<LocationPage />);
});
