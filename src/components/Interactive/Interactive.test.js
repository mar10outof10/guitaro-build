import { render, screen } from "@testing-library/react";
import Interactive from "./Interactive.js";

test.skip("renders", () => {
  render(<Interactive />);
  const linkElement = screen.getByText(/interactive/i);
  expect(linkElement).toBeInTheDocument();
});
