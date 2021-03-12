import { getAllByText, getQueriesForElement, queryByText, render, screen } from "../../test-utils";

import ReactDOM from "react-dom";
import AllAssets from "../../pages/AllAssets";

test("should render content", () => {
  render(<AllAssets />);
});
