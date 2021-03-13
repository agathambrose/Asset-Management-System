import { getAllByText, getQueriesForElement, render, screen } from "../../test-utils";
import App from "../../App";

import UnassignedAssets from "../../pages/UnassignedAssets";

test("should render content", () => {
  render(<UnassignedAssets />);
});
