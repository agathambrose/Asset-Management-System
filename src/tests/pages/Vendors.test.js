import { getAllByText, getQueriesForElement, render, screen } from "../../test-utils";

import Vendors from "../../pages/Vendors";

test("should render content", () => {
  render(<Vendors />);
});
