import { render, screen } from "@testing-library/react";
import TuningKey from "./TuningKey.js";

test.skip("renders", () => {
  render(<TuningKey />);
  const linkElement = screen.getByText(/tuningkey/i);
  expect(linkElement).toBeInTheDocument();
});
