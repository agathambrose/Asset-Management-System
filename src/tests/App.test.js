import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders HASOB text", () => {
  render(<App />);
  const text = screen.getByText(/HASOB/i);
  expect(text).toBeInTheDocument();
});
