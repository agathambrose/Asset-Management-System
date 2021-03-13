import { getAllByText, getQueriesForElement, render, screen } from "../../test-utils";

import AssignedAssets from "../../pages/AssignedAssets";

test("should render content", () => {
  render(<AssignedAssets />);
});
